/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import I1 from '../../../images/wavemaker.png'
import I2 from '../../../images/skc.png'
function page() {
    return (
      <div className="flex md:flex-row flex-col mt-5">
        <div className="md:w-1/2 w-auto" data-aos="flip-left">
          <h2 className="font-bebas text-center">Projects</h2>
          <h3 className="font-bold text-center">Wavemaker</h3>
          <p className="mx-5 my-3 lg:h-[280px] md:h-56">
            Wavemaker is ERC20 Token Create and Modify the Token Details.ERC20 -
            OpenZeppelin is provide the access to create the ERC20 Smart
            Contract for Token Creation. One token is equal to Another Token
            Customer can Decide the Token Price for ETH Value.
            <br />
            <p className="font-semibold italic">
              Technology Used: NextJS,MongoDB,Alchemy,ether,RainbowKit
            </p>
          </p>
          <h3 className="font-bold text-center">
            SKC Event Registration Application
          </h3>
          <p className="mx-5 my-3 lg:h-[280px md:h-56]">
            SKC Event Registration Application is used to other college's can
            apply their details and students participating Events details.In
            this Development i have learned Team Management, Event Management
            and Communication Skills.We are used to deploy the application for
            vercel Hosting services.
            <br />
            <p className="font-semibold italic">
              Technology Used: NextJS,MongoDB,Vercel
            </p>
          </p>
        </div>
        <div className="md:w-1/2 w-auto" data-aos="flip-right">
          <h2 className="text-center font-bebas">Projects Sources</h2>
          <Image
            src={I1}
            alt="Image"
            className="w-[50%] my-7 ml-[25%] hover:w-[55%] border-[3px] border-gray-600 rounded-lg hover:animate-bounce-slow"
          />
          <a
            href="https://wavemaker-official.vercel.app/"
            className="text-center ml-[25%] hover:text-emerald-700 border-[3px] px-5 py-1 rounded-xl hover:bg-red-500 "
          >
            Visit
          </a>
          <Image
            src={I2}
            alt="Image"
            className="w-[50%] my-7 ml-[25%] hover:w-[55%] border-[3px] border-gray-600 rounded-lg hover:animate-bounce-slow"
          />
          <a
            href="https://skcevent.vercel.app/"
            className="text-center ml-[25%] hover:text-emerald-700 border-[3px] px-5 py-1 rounded-xl hover:bg-red-500 "
          >
            Visit
          </a>
        </div>
      </div>
    );
}

export default page