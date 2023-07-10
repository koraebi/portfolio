import React, { MouseEvent } from 'react';

export default function EmbedPreview({ 
    link,
    onClose
  } : { 
    link:string,
    onClose: () => void
  }) {

  return (
    <div>
      <div
        className="
          absolute 
          z-20 
          h-full 
          w-full 
          left-0 
          right-0 
          top-0 
          bottom-0 
          bg-black 
          bg-opacity-70"
          onClick={onClose}
      >
      </div>
      <iframe 
        className={`
          absolute 
          z-30 
          m-auto
          left-0 
          right-0
          bottom-0
          top-0
          ${link.includes('/presentation/') ? 'w-[946px] h-[570px]' : 'w-[826px] h-[570px]'}`}
        src={`${link}`}  
        allowFullScreen={true}
      >
      </iframe>
    </div>
  );
}