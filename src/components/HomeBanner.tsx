'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import basePicture from '/public/face.jpg';
import designerPicture from '/public/face2.jpg';
import engineerPicture from '/public/face2.jpg';

export default function HomeBanner() {
  const [picture, setPicture] = useState(basePicture);

  return (
    <div className="grid relative w-full place-items-center">
      <Image className="object-contain h-[300px] lg:h-[450px] w-auto" src={picture} alt=""/>
      <div className="absolute grid grid-cols-2 w-full h-full place-items-center">
        <div className="group flex flex-col justify-center h-[300px] lg:h-[450px]" onMouseEnter={() => setPicture(designerPicture)} onMouseLeave={() => setPicture(basePicture)}>
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl group-hover:text-3xl lg:group-hover:text-6xl ease-in duration-300">
            Designer
          </h1>
          <div className="font-semibold text-gray-500 text-sm lg:text-base">
            <p>
              <span className="group-hover:hidden lg:group-hover:inline-block">
                Researching
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="hidden lg:inline-block font-normal">
                  &nbsp;the most efficient&nbsp;
                </span>
                <span className="hidden group-hover:inline-block lg:inline-block">
                  Computer Interaction
                </span>
              </span>
            </p>
            <p>
              <span className="group-hover:hidden lg:group-hover:inline-block">
                Designing
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                <span className="hidden lg:inline-block font-normal">
                  &nbsp;the most satisfying&nbsp;
                </span>
                <span className="hidden group-hover:inline-block lg:inline-block">
                  User Experience
                </span>
              </span>
            </p>
            <p>
              <span className="group-hover:hidden lg:group-hover:inline-block">
                Evaluating
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-1000">
                <span className="hidden lg:inline-block font-normal">
                  &nbsp;the most effective&nbsp;
                </span>
                <span className="hidden group-hover:inline-block lg:inline-block">
                  User Interface
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="group flex flex-col justify-center text-right h-[300px] lg:h-[450px]" onMouseEnter={() => setPicture(engineerPicture)} onMouseLeave={() => setPicture(basePicture)}>
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl group-hover:text-3xl lg:group-hover:text-6xl ease-in duration-300">
            Engineer
          </h1>
          <div className="font-semibold text-gray-500 text-sm lg:text-base">
            <p>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="hidden group-hover:inline-block lg:inline-block">
                  User Expectations
                </span>
                <span className="hidden lg:inline-block font-normal">
                  &nbsp;determination when&nbsp;
                </span>
              </span>
              <span className="group-hover:hidden lg:group-hover:inline-block">
                Analyzing
              </span>
            </p>
            <p>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                <span className="hidden group-hover:inline-block lg:inline-block">
                  Quality Code
                </span>
                <span className="hidden lg:inline-block font-normal">
                  &nbsp;writting when&nbsp;
                </span>
              </span>
              <span className="group-hover:hidden lg:group-hover:inline-block">
                Developping
              </span>
            </p>
            <p>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-1000">
                <span className="hidden group-hover:inline-block lg:inline-block">
                  Product
                </span>
                <span className="hidden lg:inline-block font-normal">
                  &nbsp;validation when&nbsp;
                </span>
              </span>
              <span className="group-hover:hidden lg:group-hover:inline-block">
                Deploying
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}