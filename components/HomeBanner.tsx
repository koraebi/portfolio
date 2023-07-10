'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import basePicture from '/public/designerEngineer.png';
import designerPicture from '/public/designer.png';
import engineerPicture from '/public/engineer.png';

export default function HomeBanner() {
  const [opacityDesigner, setOpacityDesigner] = useState(0);
  const [opacityEngineer, setOpacityEngineer] = useState(0);

  const handleMouseEvent = (target: string) => {
    if (target === 'designer') {
      setOpacityEngineer(0);
      setOpacityDesigner(100);
    } else if (target === 'engineer') {
      setOpacityDesigner(0);
      setOpacityEngineer(100);
    } else {
      setOpacityEngineer(0);
      setOpacityDesigner(0);
    }
  };

  return (
    <div className="grid relative w-full h-[300px] lg:h-[500px]">
      <div className="h-[300px] lg:h-[500px]">
        <Image className="lg:absolute object-cover h-full drop-shadow-lg" src={basePicture} alt=""/>
        <Image 
          className={`
            absolute 
            hidden lg:block 
            object-cover 
            h-full 
            transition-opacity duration-1000 opacity-${opacityDesigner}`} 
          src={designerPicture} alt=""
        />
        <Image 
          className={`
            absolute 
            hidden lg:block 
            object-cover 
            h-full 
            transition-opacity duration-1000 opacity-${opacityEngineer}`} 
          src={engineerPicture} alt=""
        />
      </div>
      <div className="absolute hidden lg:flex flex-row justify-between w-full h-full p-10">
        <section 
          className="group flex flex-col justify-center" 
          onMouseEnter={() => handleMouseEvent('designer')} 
          onMouseLeave={() => handleMouseEvent('')}
        >
          <h1 className="font-extrabold mb-2 text-5xl group-hover:text-6xl ease-in duration-300">
            Designer
          </h1>
          <div className="text-gray-500">
            <p className="font-semibold mb-1">
              Interaction • User Experience • User Interface
            </p>
            <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-normal">
                Developping Digital Products following the Design Thinking process <br className="hidden lg:block"/>
                and the Human-Centred Design industry norm <span className="text-xs">(ISO 9241-210-2019).</span>
              </p>
              <p className="font-medium">
                Specifying -&gt; Producing -&gt; Evaluating
              </p>
            </div>
          </div>
        </section>
        <section 
          className="group flex flex-col justify-center text-right pl-11" 
          onMouseEnter={() => handleMouseEvent('engineer')} 
          onMouseLeave={() => handleMouseEvent('')}
        >
          <h1 className="font-extrabold mb-2 text-5xl group-hover:text-6xl ease-in duration-300">
            Engineer
          </h1>
          <div className="text-gray-500">
            <p className="font-semibold mb-1">
              Responsive Web • Native Mobile • Microservice
            </p>
            <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-normal">
                Building Software Solutions following the Agile methodology <br className="hidden lg:block"/>
                and the iterative Software Development Life Cycle model.
              </p>
              <p className="font-medium">
                Analyzing -&gt; Coding -&gt; Testing
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}