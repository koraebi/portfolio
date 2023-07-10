export default function PortfolioInsightTile({ 
    name, 
    picture, 
    categories, 
    skills,
    description,
    onClick,
  }: { 
    name: string, 
    picture: string, 
    categories: string[], 
    skills: string[],
    description: string,
    onClick: () => void
  }) {
  return (
    <div 
      className="
        flex flex-col 
        cursor-pointer 
        rounded-2xl
        w-full min-w-[100px] h-[150px] lg:min-w-[200px] lg:h-[200px] 
        drop-shadow-lg 
        bg-white
        p-3 lg:p-5"
      onClick={onClick}
    >
      <div className="flex">
        <section>
          <h1 className="font-extrabold mb-1 lg:mb-2 text-lg lg:text-xl">
            {name}
          </h1>
          <p className="font-semibold line-clamp-1">
            {categories.map((category: string, index: number) => (
              <span key={index}>{category}{index !== categories.length - 1 && ' • '}</span>
            ))}
          </p>
          <p className="font-normal text-sm line-clamp-1">
            {skills.map((skill: string, index: number) => (
              <span key={index}>{skill}{index !== skills.length - 1 && ' • '}</span>
            ))}
          </p>
        </section>
        <img className="ml-auto h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] rounded-2xl object-cover" src={picture}/>
      </div>
      <p className="font-normal text-sm line-clamp-3 mt-3 break-words">
        {description}
      </p>
    </div>
  );
}