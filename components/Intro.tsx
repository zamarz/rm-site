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
       
        <div className="flex flex-row text-center items-center py-5 ">
          <h2 className="font-black text-2xl lg:text-5xl py-5">Hi, I&apos;m Zach and I&apos;m applying to the position of Front-End Developer at <span className="underline decoration-primary">Rusty Monkey</span></h2>
        </div>
        <p className="md:text-2xl">
        I am an enthusiastic developer who is always looking for the opportunity to learn new things and immerse myself in tech wherever possible. I&apos;m a former tech writer turned coder who is eager to dive deeper into the industry and create great products and engaging features.

        </p>
       
        <div className="py-7  md:text-xl lg:text-2xl">
          <p>
          I&apos;m interested in joining Rusty Monkey as <span className="underline decoration-primary"> it&apos;s an exciting organisation to work
           for </span> where I can learn new skills on the job and contribute to its client&apos;s success.
           I have formerly worked for a WPP agency in the past and am keen to offer my new
            skills to Rusty Monkey and produce engaging websites and work with stakeholders in this role.
          </p>
        </div>
    </div>
    </section>
  )
}

export default Intro