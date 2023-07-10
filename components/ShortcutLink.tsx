export default function ShortcutLink({ link, title, description } : { link:string, title:string, description:string }) {
  return (
    <a href={link} className="group rounded-lg px-5 py-4 transition-colors border border-transparent hover:border-gray-300 hover:bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm text-gray-500">
        {description}
      </p>
    </a>
  );
}