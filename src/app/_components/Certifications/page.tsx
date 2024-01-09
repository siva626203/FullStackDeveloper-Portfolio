import React from 'react';
import Image from 'next/image';
import CA from '../../../images/SIVAKUMAR.jpg'
import C1 from "../../../images/hackerrank.png";
import C2 from '../../../images/oasis.jpeg'
import C3 from "../../../images/GreatLearning.jpg";
import I1 from "../../../images/skillup.png"
import I2 from "../../../images/mimo.jpg";
function page() {
    return (
      <div className="mt-10">
        <h1 className="text-center font-bebas capitalize">
          campus ambassador program
        </h1>
        <h2 className="underline text-center decoration-double decoration-green-600">
          TECHKRITI, <b>IIT KANPUR</b>
        </h2>
        <center className="mt-5">
          <div data-aos="flip-right">
            {" "}
            <Image src={CA} className="w-[300px] " alt="IIT" />
          </div>
        </center>
        <h1 className="text-center mt-5 font-bebas capitalize">
          Internship Certificate
          <h2 className="underline text-center decoration-double decoration-yellow-300">
            Oasis Infobyte
          </h2>
          <center className="mt-5">
            <div data-aos="flip-right">
              {" "}
              <Image src={C2} className="w-[300px] " alt="IIT" />
            </div>
          </center>
        </h1>
        <h1 className="text-center mt-5 font-bebas capitalize">
          Courses Learning Certificates
        </h1>
        <h2 className="underline text-center decoration-double decoration-black">
          HackerRank
        </h2>
        <center className="mt-5">
          <div data-aos="flip-left">
            {" "}
            <Image src={C1} className="w-[300px] " alt="IIT" />
          </div>
        </center>
        <h2 className="underline text-center decoration-double decoration-black">
          SkillUP
        </h2>
        <center className="mt-5">
          <div data-aos="flip-right">
            {" "}
            <Image src={I1} className="w-[300px] " alt="IIT" />
          </div>
        </center>
        <h2 className="underline text-center decoration-double decoration-black">
          MIMO
        </h2>
        <center className="mt-5">
          <div data-aos="flip-left">
            {" "}
            <Image src={I2} className="w-[300px] " alt="IIT" />
          </div>
        </center>
        <h2 className="underline text-center decoration-double decoration-black">
          GreatLearning
        </h2>
        <center className="mt-5">
          <div data-aos="flip-right">
            {" "}
            <Image src={C3} className="w-[300px] " alt="IIT" />
          </div>
        </center>
      </div>
    );
}

export default page;