export default async function Home() {
    return (
      <section className="mx-auto container h-full">
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
  )
}
