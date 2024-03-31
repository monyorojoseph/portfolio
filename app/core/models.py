from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django_lifecycle import LifecycleModelMixin, hook, AFTER_CREATE


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    full_name = models.CharField(max_length=200)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

# projects
class Project(LifecycleModelMixin, models.Model):
    author = models.ForeignKey("User", on_delete=models.CASCADE, related_name="projects")
    name = models.CharField(max_length=200)
    description = models.TextField()
    github_url = models.URLField()
    website_url = models.URLField(null=True, blank=True)
    slug = models.CharField(max_length=100, null=True)
    draft = models.BooleanField(default=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
     
    def __str__(self) -> str:
        return self.name
    
    @hook(AFTER_CREATE)
    def create_slug(self):
        slug = f"{self.name.join('-')}-{self.id}"
        self.slug = slug
        self.save()
