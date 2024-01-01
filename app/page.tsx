import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <header>        
        <nav className="bg-gray-800 text-white py-1 w-full">
            <div className="container mx-auto flex flex-row items-center justify-between py-1">
                <Link href='/' className="flex flex-row items-center gap-x-2">
                    <h6>monyorojoseph</h6>
                    <h6 className="font-extrabold text-yellow-400 animate-pulse">/</h6>
                </Link>
                <div className="flex flex-row items-center gap-x-4 font-semibold">
                    <Link href='/' className='cursor-pointer'>About</Link>
                    <Link href='/' className='cursor-pointer'>Blogs</Link>
                    <Link href='/' className='cursor-pointer'>Projects</Link>
                </div>
            </div>
        </nav>
      </header>
      <section className="mx-auto container" style={{minHeight: "76.7vh"}}>

        <div className="w-full mx-auto lg:w-8/12">

            <div className="flex flex-col items-center justify-center my-12">
                <h6 className='text-2xl'>Joseph Monyoro</h6>
                <p className='text-sm'>software engineer</p>
            </div>

            <div className="space-y-3 ">
                <p>
                    Experienced software engineer with a passion for coding, problem-solving, and 
                    diverse expertise in web development, data analysis, data science, mobile development, and scripting.
                </p>
                <ul className="list-disc px-6">
                    <li>Skilled in designing and implementing scalable web solutions using React.js, Next.js, and creating intuitive user interfaces.</li>
                    <li>Proficient in statistical analysis, data visualization, and machine learning algorithms using Python, 
                        Excel and BI tools, with the ability to extract insights from large datasets</li>
                    <li>Experienced in developing cross-platform mobile applications using Flutter.</li>
                    <li>Adept at scripting languages like Python and Bash for task automation and workflow improvement. 
                        Strong problem-solving abilities, adaptable to new technologies, and thrives in collaborative environments.</li>
                </ul>
                <p>
                    Committed to continuous learning and staying updated with industry trends. 
                    Eager to contribute to impactful projects and drive software development excellence.
                </p>
            </div>
        </div>
      </section>
      <footer className="w-full bg-stone-200">
        <div className="py-10">        
            <div className="text-center">
                <h6 className="font-semibold text-lg">Socials</h6>            
            </div>

            <div className="flex flex-row items-center justify-center gap-x-3">
                <span>
                    <a href="https://github.com/monyorojoseph" target="_blank" className="flex flex-row items-center">
                        <span>github</span>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/joseph-monyoro-04188a244/" target="_blank"  className="flex flex-row items-center">
                        <span>linked in</span>
                    </a> 
                </span>

                <span>
                    <a href="https://discordapp.com/users/513367625263349790" target="_blank"  className="flex flex-row items-center">
                        <span>discord</span>
                    </a>
                </span>

            </div>
        </div>
      </footer>
    </main>
  )
}
