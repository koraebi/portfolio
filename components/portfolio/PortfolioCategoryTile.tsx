export default function PortfolioCategoryTile({ 
    name, 
    picture, 
    background,
    isSelected,
  }: { 
    name: string, 
    picture: string,
    background: string,
    isSelected: boolean,
  }) {
  return (
    <div 
      className={`
        ${isSelected ? 'opacity-100' : 'opacity-50'} 
        flex flex-col 
        shrink 
        rounded-2xl 
        drop-shadow-lg 
        w-[150px] h-[100px] 
        lg:w-[200px] lg:h-[150px] 
        bg-no-repeat bg-cover 
        ${background}`} 
      style={{ backgroundImage: picture && `url(${picture})` }}>
      <h1 className="mt-auto p-3 lg:p-5 font-extrabold lg:text-xl">
        {name}
      </h1>
    </div>
  );
}