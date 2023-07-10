export default function PortfolioProjectTile({ 
    name, 
    picture, 
    categories, 
    skills,
    onClick,
  }: { 
    name: string, 
    picture: string, 
    categories: string[], 
    skills: string[],
    onClick: () => void,
  }) {
  return (
    <div 
      className="
        flex flex-col 
        cursor-pointer 
        rounded-2xl
        w-full min-w-[100px] h-[200px] lg:min-w-[200px] lg:h-[300px] 
        drop-shadow-lg 
        bg-cover
        bg-no-repeat" 
      style={{ backgroundImage: `url(${picture})` }}
      onClick={onClick}
    >
      <div className="bg-white mt-auto h-fit rounded-b-2xl p-3 lg:p-5">
        <h1 className="font-extrabold mb-1 lg:mb-2 text-lg lg:text-xl">
          {name}
        </h1>
        <p className="font-semibold line-clamp-1">
          {categories.map((category: string, index: number) => (
            <span key={index}>{category}{index !== categories.length - 1 && ', '}</span>
          ))}
        </p>
        <p className="font-normal text-sm line-clamp-1">
          {skills.map((skill: string, index: number) => (
            <span key={index}>{skill}{index !== skills.length - 1 && ' • '}</span>
          ))}
        </p>
      </div>
    </div>
  );
}