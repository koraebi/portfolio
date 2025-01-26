type Props = {
  direction: string,
  isVisible: boolean,
  onClick: (direction: string) => void,
};

export default function ScrollButton({ direction, isVisible, onClick }: Props) {
  return (
    <div 
      className={`
        absolute 
        place-self-center
        hidden
        lg:block
        cursor-pointer
        ${isVisible ? 
          'z-10 opacity-100' : 
          'cursor-default z-0 opacity-0'
        }
        ${direction === 'right' && ' ml-auto right-0'}
        transition-opacity duration-300
        bg-white 
        p-4 py-3 
        rounded-full 
        drop-shadow-lg 
        text-xl`}
      onClick={() => onClick(direction)}
    >
      {direction === 'left' ? '<-' : '->'}
    </div>
  );
}