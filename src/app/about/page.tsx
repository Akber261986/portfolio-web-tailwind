'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {

  const skills = [
    { name: "TypeScript", targetWidth: 85, bg: "bg-blue-500" },
    { name: "Next.js", targetWidth: 60, bg: "bg-yellow-500" },
    { name: "HTML", targetWidth: 90, bg: "bg-green-500" },
    { name: "CSS", targetWidth: 75, bg: "bg-fuchsia-500" },
    { name: "JavaScript", targetWidth: 70, bg: "bg-cyan-500" },
    { name: "React", targetWidth: 45, bg: "bg-red-500" },
  ];

  const [widths, setWidths] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setWidths((prevWidths) => {
          const newWidths = [...prevWidths];
          if (newWidths[index] < skill.targetWidth) {
            newWidths[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newWidths;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  return (
    <div>
      <div className='flex flex-col justify-center items-center px-6 '>
        <div>
          <Image
            width={130}
            height={130}
            src="/images/Profile-Pic.png"
            alt="Ghulam Akber"
            className="rounded-full object-cover w-32 h-32 mb-6 mt-6" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 font-sans">About Me</h1>
        <p>
          Hi, I’m Ghulam Akber, a passionate web developer skilled in TypeScript,
          Next.js, and modern web technologies. I enjoy building responsive and
          interactive web applications with a strong focus on user experience and
          performance.
        </p>
        <p>
          With a deep understanding of TypeScript, I’ve built various projects
          including a dynamic resume builder, CLI-based ATM machine, and more.
          I’m constantly learning and expanding my skill set to deliver innovative
          solutions.
        </p>
        <a
          href="/resume.pdf"
          download
          className="flex gap-4 items-center mt-6 bg-blue-500 px-6 py-5 rounded-lg text-lg text-white sm:self-start"
        >
          <Image 
            src="/images/svg/download-solid.svg"
            alt="Download"
            width={20}
            height={20}
          />
          Download Resume
        </a>
       </div>
      <div className='my-10 px-16'>
        <h1
        className='text-2xl font-bold text-center'
        >Skills</h1>
        {skills.map((skill, index) => (
          <div key={index} className='flex gap-6 items-center mt-4'>
            <div className='w-20'>
              <span>{skill.name}</span>
            </div>
            <div className='w-3/4'>
            <div
              className={`${skill.bg} h-4 transition-all duration-500 ease-out`}
              style={{ width: `${widths[index]}%` }}
            ></div>
            </div>
            <span>{widths[index]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
