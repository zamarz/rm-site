
const Skills = () => {
  return (
    <section className="px-10 py-10 mx-auto container min-h-screen">
    <div className="py-10 mx-10 px-10">
        <div className="flex flex-col text-center justify-center items-center py-10 ">
          <h2 className="font-black text-2xl lg:text-5xl py-5">Why me?</h2>
            
            <ul className="space-y-3 md:text-xl lg:text-2xl">
              <li>I have great interpersonal and communication skills after working as a journalist, communications consultant and copywriter for a number of years.</li>
              <li>I worked as a B2B tech writer <span className="underline decoration-secondary"> but wanted to dive deeper into the industry </span> so enlisted at a software development bootcamp which equipped me with essential skills including proficiency in JavaScript, React, Jest, Git and GitHub...and much more! </li>
              <li>Since graduating I have been refining my skills in personal projects and <span className="underline decoration-secondary">learning new things </span> like TypeScript and Next.js.</li>

              <li>I've been part of a number of agile teams, in the UK and abroad, and know how to make full use of collaboration tech like Slack, Jira, and Trello. 
              </li>           
                <li>Want to see my work? Head to my portfolio and find links to my <a className="underline bg-primary hover:bg-secondary" href="https://www.zachmarzouk.dev/" target="blank"> project sites</a> and delicious code.</li>
            </ul>
            </div>
            <div className="flex flex-col text-center justify-center items-center py-10">
          <a href="https://www.zachmarzouk.dev/" target="blank"><button className="button">Click for code</button></a>
        </div>
            </div>
            </section>
  )
}

export default Skills