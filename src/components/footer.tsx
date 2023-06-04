import Socials from '@/components/Socials';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center place-items-center mt-auto text-xs text-gray-900 p-3 space-y-1 space-x-0 lg:space-y-0 lg:space-x-2 lg:pt-10 lg:flex-row">
      <div className="block lg:hidden">
        <Socials/>
      </div>
      <p><a href="https://github.com/koraebi/Portfolio">Built from scratch with Next.js & Tailwind</a> by © 2023 Koraebi</p>
      <p className="hidden text-sm lg:block">|</p>
      <p>SIRET 88300306300012</p>
    </footer>
  );
}

