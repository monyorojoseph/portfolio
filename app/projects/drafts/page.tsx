import prisma from "@/lib/prisma";

async function getData() {

    const feed = await prisma.project.findMany({
        where: { published: false }
    });
    return feed
}

const DraftProjects = ()=> {
    const feed = getData()

    return(
        <section>Draft Projects</section>
    )
}

export default DraftProjects;