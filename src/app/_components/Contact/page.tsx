'use client'
import React from 'react';
import { SocialIcon } from "react-social-icons";
function page() {
    return (
      <>
        <h1 className="text-center font-bebas pt-10">Contact Details</h1>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-auto">
            <h2 className="font-bebas text-center">CV & Githup</h2>
            <br />
            <center>
              <SocialIcon url="https://pdf.ac/36DZiN"></SocialIcon>
            </center>
           <br/>
            <center>
              <SocialIcon url="https://github.com/siva626203" />
            </center>
          </div>
          <br/>
          <div className="md:w-1/2 w-auto">
            <h2 className="font-bebas text-center">Social Media Links</h2>
            <br />
            <center>
              <SocialIcon url="https://www.linkedin.com/in/siva-kumar-8634b61ab/" /><br/><br/>
              <SocialIcon url="https://www.instagram.com/software_tamilan_official/" /><br/><br/>
              <SocialIcon url="https://twitter.com/SoftwaretamilN" />
            </center>
          b</div>
        </div>
      </>
    );
}

export default page;