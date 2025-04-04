# To run the image
docker run -d --name pweb -e PORT=3000 -p 3000:3000 --restart always portfolio-web