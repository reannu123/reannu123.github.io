import React from "react";
import profile from "../assets/profile-square.jpg";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// react icon for gmail

function Summary() {
  return (
    <div className="my-auto items-center justify-center text-center md:flex mx-16">
      <div className="md:hidden">
        {/* mobile */}
        <h1 className="font-Comfortaa font-bold text-center text-xl  mb-2 md:hidden text-teal-800 dark:text-teal-300 drop-shadow-lg">
          Reannu Instrella
        </h1>
        <h2 className="font-PublicSans font-bold mb-6 md:hidden text-teal-600 text-sm">
          Software Developer
        </h2>
      </div>

      <div>
        <div className="mx-auto h-40 w-40 md:h-[24vh] md:w-[24vh] lg:max-h-80 lg:max-w-80 bg-teal-500 dark:bg-teal-100 bg-opacity-30 rounded-full flex items-center justify-center  transition">
          <img
            src={profile}
            className="mx-auto rounded-full h-36 w-36 md:h-[22vh] md:w-[22vh] lg:max-h-72 lg:max-w-72"
            alt="Summary"
          />
        </div>
        {/* desktop */}
        <h1 className="font-Comfortaa font-bold text-center text-teal-800 dark:text-teal-300 max-md:hidden md:text-[3vh] md:whitespace-nowrap lg:text-4xl mb-2 mt-4 lg:mb-4 lg:mt-8 lg:mx-[5vw] drop-shadow-lg">
          Reannu Instrella
        </h1>
        <h2 className="max-md:hidden font-PublicSans font-bold mb-4 lg:mb-8 text-teal-600 md:text-[2vh] md:whitespace-nowrap lg:text-xl">
          Software Developer
        </h2>
        <div className="max-md:hidden flex flex-row justify-around md:justify-evenly space-x-4">
          <a
            href="
            https://www.facebook.com/Reannu.Emmanuel.Lubiano.Instrella/"
          >
            <FaFacebook className="md:text-[4vh] lg:text-3xl text-teal-600   dark:text-teal-600 hover:text-opacity-50 dark:hover:text-opacity-50 transition-all" />
          </a>
          <a href="https://github.com/reannu123">
            <FaGithub className="md:text-[4vh] lg:text-3xl text-teal-800 dark:text-teal-800 hover:text-opacity-50  dark:hover:text-opacity-50 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/reannu-instrella">
            <FaLinkedin className="md:text-[4vh] lg:text-3xl text-teal-500  dark:text-teal-500 hover:text-opacity-50  dark:hover:text-opacity-50 transition-all" />
          </a>
          <a href="mailto:reannumon123@gmail.com">
            <SiGmail className="md:text-[4vh] lg:text-3xl text-teal-600 dark:text-teal-600 hover:text-opacity-50  dark:hover:text-opacity-50 transition-all" />
          </a>
        </div>
      </div>
      <div>
        <p className="font-NotoSerif text-sm sm:text-[3vw] md:text-[2vh] xl:text-3xl text-center md:ml-12 md:leading-[5vh] lg:ml-[10vw] md:px-8 py-8 max-w-2xl">
          A passionate and motivated individial with a passion for learning new
          technologies. Graduated Cum Laude from the University of the
          Philippines Diliman with a Bachelor's Degree in Computer Science. Has
          experience in full-stack development and server management locally and
          on the cloud. Has used different languages such as JavaScript,
          TypeScript, Python, C, as well as web development frameworks like
          React, Express, and other web service technologies like reverse
          proxying and tunneling. Developed several projects such as
          NSNP-Simulator, RPSuper, and maintaining servers locally and in the
          cloud for different purposes and projects such as file serving and
          backend for web applications.
        </p>
        <div className="md:hidden flex flex-row justify-around md:justify-evenly space-x-4">
          <a
            href="
            https://www.facebook.com/Reannu.Emmanuel.Lubiano.Instrella/"
          >
            <FaFacebook className="text-3xl text-teal-600   dark:text-teal-600 hover:text-opacity-50 dark:hover:text-opacity-50 transition-all" />
          </a>
          <a href="https://github.com/reannu123">
            <FaGithub className="text-3xl text-teal-800 dark:text-teal-800 hover:text-opacity-50  dark:hover:text-opacity-50 marker:transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/reannu-instrella">
            <FaLinkedin className="text-3xl text-teal-500  dark:text-teal-500 hover:text-opacity-50  dark:hover:text-opacity-50 ransition-all" />
          </a>
          <a href="mailto:reannumon123@gmail.com">
            <SiGmail className="text-3xl text-teal-600 dark:text-teal-600 hover:text-opacity-50  dark:hover:text-opacity-50 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Summary;
