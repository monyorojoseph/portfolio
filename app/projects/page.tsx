import prisma from "@/lib/prisma";

async function getData() {

    const feed = await prisma.project.findMany({
        where: { published: true }
    });
    return feed
}

const Projects = ()=> {
    const feed = getData()
    // console.log(feed)
    return (
        <section className="mx-auto container">Projects</section>
    )
}

export default Projects;