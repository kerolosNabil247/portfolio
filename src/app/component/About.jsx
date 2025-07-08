import Image from "next/image";


export default function About() {
  return (
    
    <div id="about" className="m-6 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-12rem)] md:min-h-[500px]">
        <hr className="my-28 col-span-1 md:col-span-2" />
        <div className="relative min-h-[300px] overflow-hidden rounded-lg col-span-1 md:col-start-1">
            <Image
                src="/web-development.jpeg" 
                alt="" 
                layout="fill" // Or 'responsive', 'intrinsic', 'fixed'
                objectFit="cover" 
                className="rounded-lg " // Add any other Tailwind classes directly here
                priority />
        </div>
        <div className="col-span-1 md:col-start-2 m-10">
            <h1 className="text-[#c1cffb] text-4xl font-bold m-4">About Me</h1>
            <p className="text-[#c1cffb]">Full-Stack developer</p> <br /><br />
            <p className="text-[#c1cffb]">Dedicated Full Stack Developer with practical expertise honed through an intensive ITI bootcamp. Skilled in
                        building dynamic and responsive web applications, adept at both front-end interface development and robust
                        backend system design. My background in Communication and Electronics Engineering provides a unique
                        analytical and problem-solving approach to software development.</p>
        </div>
        <div className="">

        </div>

    </div>
  )
}
