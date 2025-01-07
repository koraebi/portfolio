type Props = {
  horizontal: boolean,
  link: string,
  onClose: () => void
};

export default function EmbedPreview({ horizontal, link, onClose } : Props) {
  return (
    <div>
      <div
        className='
          absolute 
          z-20 
          h-full 
          w-full 
          left-0 
          right-0 
          top-0 
          bottom-0 
          bg-black 
          bg-opacity-70'
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
          ${horizontal ? 'w-[1000px] h-[600px]' : 'w-[542px] h-[800px]'}`}
        src={`${link}`}  
        allowFullScreen={true}
      >
      </iframe>
    </div>
  );
}