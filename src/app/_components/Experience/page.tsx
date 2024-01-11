import React from 'react'
import { Inter_Tight } from 'next/font/google';
import I1 from '../../../images/Asset 1.png'
import Image from 'next/image';
function page() {
  return (
    <>
      <div className="flex justify-between">
        <div data-aos="fade-out-right">
          <h2 className="text-center font-bebas">Experience</h2>
          <h3 className="font-bebas ml-10">
            MERN Stack Developer || NighaTech || Nov 2023 - Nov 2024
          </h3>
          <h3 className="mx-5 font-normal lg:w-[500px] w-auto text-left md:text-center md:ml-9">
            I have Completed two Projects Related to Blockchain Technology,One
            of the Project is creating ERC20 Token System using the ETH and
            Solidity.Another one project is on Reward system for Video Watching
            and Gift the ETH also is an Integrated to third party API
            Twitter,Discord,Telegram Account Verification.This are my Major
            Projects Development for Team Work, more then i had alone completed
            two Projects. Now i research Blockchain Related Technology Updates
            and Development Process NFT,TOKEN,MUSIC,IPFC,BigChainDB
          </h3>
          <br/>
          <h3 className="font-bebas ml-10">
            Web Development Internship || Oasis Infobyte || June 2022 
          </h3>
          <h3 className="mx-5 font-normal lg:w-[500px] w-auto text-left md:text-center md:ml-9">
            In this Internship i complete the Basic Task of HTML,CSS,JS. In the organization is just for assigned me to complete the some basic task about Calculator Development,Clock Development, Form Validation. 
          </h3>
        </div>
        <div data-aos="fade-down-right">
          <Image
            className="hidden lg:inline-flex w-[300px] animate-bounce-slow mr-[130px] mt-32"
            src={I1}
            alt="PNG"
          />
        </div>
      </div>
    </>
  );
}

export default page