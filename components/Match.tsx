import Image from "next/image"
import { FaBook, FaCodeBranch, FaComputer, FaRegCalendar } from "react-icons/fa6"

const Match = () => {
  return (
    <section className="px-10 py-10 mx-auto container min-h-screen">
    <div className="py-10 mx-10 px-10">
    <div className="flex flex-col text-center justify-center items-center py-10">
        <div className="h-64 w-96 relative">
          <Image
            src={"/monkey_image.jpg"}
            className="w-full h-auto sm:w-auto sm:max-w-lg mx-auto rounded-lg"
            alt="A portrait image of a monkey that looks similar to the developer."
            layout="fill"
            objectFit="contain"
          />
        </div>

            
        </div>


        <div className="flex flex-col text-center justify-center items-center py-10">
          <h2 className="font-black text-3xl lg:text-5xl py-5">It&apos;s a match?</h2>
          <h3 className="text-xl lg:text-2xl py-5">Want to learn more about me? Here are some fun facts:</h3>
           <ul className="space-y-4 align-middle flex flex-col lg:text-2xl">
            <li className="flex flex-col items-center space-x-2 "><FaComputer /> I recently <span className="underline decoration-secondary">built my first ever PC</span></li>
            <li className="flex flex-col items-center space-x-2"> <FaRegCalendar /> I'm an advocate of hybrid working and <a className="underline bg-primary hover:bg-secondary" target="blank" href="https://www.itpro.com/business-strategy/flexible-working/361831/why-its-time-for-a-three-day-working-week-in-2022">the four day week.</a></li>
            <li className="flex flex-col items-center space-x-2"> <FaBook /> I like to read (wow so cool)</li>
            <li className="flex flex-col items-center space-x-2"> <FaCodeBranch /> I volunteer with <span className="underline decoration-secondary">Code Your Future</span>, a non-profit that helps marginalised people learn how to code.</li>
           </ul>
        </div>

        <div className="flex flex-col text-center justify-center items-center py-10">
          <a href="mailto:zachmarzouk@gmail.com"><button className="button">Drop me a line</button></a>
        </div>
    </div>
    </section>
  )
}

export default Match