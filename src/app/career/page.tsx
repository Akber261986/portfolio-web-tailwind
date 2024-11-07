"use client";

import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleShowButton = () => {
    setShowButton(!showButton);
  };

  return (
      <section
        id="projects"
        className="flex flex-col items-center bg-slate-200 px-8 py16"
      >
        <h1 className="text-4xl font-bold text-center mt-4">My Projects</h1>
        <div className="grid gap-4 mt-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Project 1 */}
            <div className="sm:w-1/3 text-center p-6 rounded-lg bg-white mx-1 shadow-lg">
              <Image
                width={250}
                height={196}
                src="/images/project1.jpg"
                alt="Project1"
                className="w-full rounded-lg object-cover h-48 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Dynamic Resume Builder</h3>
              <p>
                A web application that allows users to generate and share dynamic
                resumes using TypeScript, HTML, and CSS. Includes PDF download and
                shareable links.
              </p>
              <div className="link">
                <a
                  href="https://hachathon-milestone-05.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Akber261986/Milestone-05.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="sm:w-1/3 text-center p-6 rounded-lg bg-white mx-1 shadow-lg">
              <Image
                width={250}
                height={196}
                src="/images/project2.jpg"
                alt="Project2"
                className="w-full rounded-lg object-cover h-48 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Simple Calculator</h3>
              <p>
                A Simple Calculator built with HTML, CSS and TypeScript that
                simulates an simple calculation like balance plus, mines, multiply
                and dicision.
              </p>
              <div>
                <a
                  href="https://day-05-simple-calculator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Akber261986/simple-calculator.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="sm:w-1/3 text-center p-6 rounded-lg bg-white mx-1 shadow-lg">
              <Image
                width={250}
                height={196}
                src="/images/project3.jpg"
                alt="Project3"
                className="w-full rounded-lg object-cover h-48 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">CountDown Timer</h3>
              <p>
              The Countdown Timer is a Next.js app that lets users input a target, then counts down in real-time. It uses React hooks for dynamic updates and is deployed on Vercel.
              </p>
              <div>
                <a
                  href="https://countdown-timer-psi-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Akber261986/my-countdown-timer.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>  
          </div>


          <div className={`${showButton ? "flex flex-col gap-4 sm:flex-row" : "hidden"}`}>
                            {/* Project 4 */}
            <div className="sm:w-1/3 text-center p-6 rounded-lg bg-white mx-1 shadow-lg">
              <Image
                width={250}
                height={196}
                src="/images/project4.jpg"
                alt="Project4"
                className="w-full rounded-lg object-cover h-48 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Number Guessing Game</h3>
              <p>
              I this game Players try to guess a randomly generated number within a specified range, receiving feedback on each attempt. 
              </p>
              <div>
                <a
                  href="https://number-guessing-game-ecru.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Akber261986/number-guessing-game.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Project 5 */}
            <div className="sm:w-1/3 text-center p-6 rounded-lg bg-white mx-1 shadow-lg">
              <Image
                width={250}
                height={196}
                src="/images/project5.jpg"
                alt="Project5"
                className="w-full rounded-lg object-cover h-48 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Digital Clock</h3>
              <p>
              The Digital Clock is a Next.js app that displays the current time in both 12-hour and 24-hour formats. Using React hooks, it updates the time in real-time and includes a button to toggle between formats.
              </p>
              <div>
                <a
                  href="https://day06-digital-clock.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Akber261986/digital-clock.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Project 6 */}
            <div className="sm:w-1/3 text-center p-6 rounded-lg bg-white mx-1 shadow-lg">
              <Image
                width={250}
                height={196}
                src="/images/project6.jpg"
                alt="Project6"
                className="w-full rounded-lg object-cover h-48 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Random Jock Genrator</h3>
              <p>
              The Random Joke Generator is a Next.js app that fetches and displays random jokes from an API with each button click. It uses React for dynamic updates and ensures a fun user experience with new jokes each time.
              </p>
              <div>
                <a
                  href="https://day07-random-jock-genrator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Akber261986/random-jock-genrator.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 no-underline text-blue-700 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>
              
          </div>

          {/* Add more projects similarly */}
        </div>
        <a
          className="no-underline mt-6 mb-6 px-4 py-3 bg-blue-500 text-white font-bold rounded-md transition-colors cursor-pointer"
          onClick={handleShowButton}
        >
          {showButton ? "Show Less" : "Show More"}
        </a>

      </section>
  );
};

export default Projects;
