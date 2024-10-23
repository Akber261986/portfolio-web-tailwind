import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col sm:flex-row sm:justify-around items-center sm:items-start sm:mt-8 bg-slate-100">
      <div className="flex flex-col items-center sm:items-start sm:m-2 sm:w-1/2 justify-center h-96 px-6">
        <h1 className="text-blue-500 text-4xl font-bold mb-4">
          Hi! <span className="text-gray-950">I am Ghulam Akber</span>
        </h1>
        <p className="text-2xl text-gray-500">Web Developer</p>
      <p className="sm:text-xl text-justify text-gray-950 mt-6">A passionate web developer skilled in TypeScript, Next.js, and Tailwind CSS. I specialize in creating dynamic, user-friendly web applications with a strong focus on clean code and intuitive design. Explore my projects to see how I turn ideas into reality through code!</p>
      <a 
        href="/resume.pdf"
        className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600"
        >View CV</a>
      </div>
      <div>
        <Image
        src={'/images/image1.png'}
        alt="my-pp"
        width={350}
        height={0}
        className="hidden sm:block"
        />
        <Image
        src={'/images/image2.png'}
        alt="my-pp"
        width={300}
        height={0}
        className="sm:hidden block rounded-lg"
        />
      </div>
    </div>
  );
}
