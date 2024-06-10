import Image from "next/image"

const Intro = () => {
  return (
    <section className="px-10 py-10 mx-auto container min-h-screen">

    <div className="py-10 mx-10 px-10">
        <div className="flex flex-col text-center justify-center items-center py-10">
        <div className="h-64 w-96 relative">
          <Image
            src={"/ZM_profile.jpg"}
            className="w-full h-auto sm:w-auto sm:max-w-lg mx-auto rounded-lg"
            alt="A portrait image of the developer"
            layout="fill"
            objectFit="contain"
          />
        </div>
            
        </div>
       
        <div className="flex flex-row items-center py-5 ">
          <h2 className="font-black text-5xl py-5">Hi, I'm Zach and I'm applying to the position of Front-End Developer at Rusty Monkey</h2>
        </div>
        <p className="text-2xl">
          I'm an enthusiastic developer keen to delve deeper into the tech world
          and continue my development journey.
        </p>
       
        <div className="py-7  text-xl lg:text-2xl">
          <p>
            After covering the world of B2B tech as a writer, I decided to take
            the plunge and dive even deeper into the industry by becoming a
            software developer.

            I've applied to this job because...
          </p>
        </div>
    </div>
    </section>
  )
}

export default Intro