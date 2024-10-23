import React from 'react';
import Image from 'next/image';

const about = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex flex-col justify-center items-center px-6 sm:w-1/2'>
      <div>
          <Image
          width={130}
          height={130}
          src="/images/Profile-pic.png"
          alt="Ghulam Akber"
          className="rounded-full object-cover w-32 h-32 mb-6 mt-6" 
          />
        </div>
      <h1 className="text-4xl font-bold mb-6 font-sans">About Me</h1>
      <p>
            Hi, I’m Ghulam Akber, a passionate web developer skilled in
            TypeScript, Next.js, and modern web technologies. I enjoy building
            responsive and interactive web applications with a strong focus on
            user experience and performance.
          </p>
          <p>
            With a deep understanding of TypeScript, I’ve built various
            projects including a dynamic resume builder, CLI-based ATM machine,
            and more. I’m constantly learning and expanding my skill set to
            deliver innovative solutions.
          </p>
      <a href="/resume.pdf" download className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white sm:self-start ">Download Resume</a>
      </div>
    </div>
  )
}

export default about
