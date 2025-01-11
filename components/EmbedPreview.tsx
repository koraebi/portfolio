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
          inset-0
          z-20 
          bg-black 
          fixed
          bg-opacity-70'
          onClick={onClose}
      >
      </div>
      <iframe 
        className={`
          fixed 
          z-30 
          m-auto
          inset-0
          ${horizontal ? 'w-[1000px] h-[600px]' : 'w-[542px] h-[800px]'}`}
        src={`${link}`}  
        allowFullScreen={true}
      >
      </iframe>
    </div>
  );
}