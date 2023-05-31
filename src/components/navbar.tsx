import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 h-fit items-center justify-between bg-white mb-10 p-5 shadow-md lg:flex">
      <a href="/" className="flex items-center flex-shrink-0 text-gray-800 mr-7">
        <Image className="mr-2" src="/logo.png" alt="Koraebi Logo" width="20" height="20" />
        <span className="font-semibold text-xl">Koraebi</span>
      </a>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-gray-400">
          <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4">
            About
          </a>
          <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4">
            Projects
          </a>
          <a href="/studies" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4">
            Studies
          </a>
          <a href="/gallery" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800">
            Gallery
          </a>
        </div>
        <a href="/contact" className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800 mt-4 lg:mt-0">
          Contact
        </a>
      </div>
    </nav>
  );
}