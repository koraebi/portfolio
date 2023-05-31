import ShortcutLink from '@/components/shortcutLink'
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-5">
      <section className="flex flex-col-reverse mb-5 items-center text-center lg:text-left lg:flex-row lg:mb-10">
        <div className="max-w-2xl">
          <h1 className="mb-2 text-4xl font-extrabold lg:mb-4 lg:text-6xl">
            Building digital products.
          </h1>
          <div className="text-gray-500 lg:text-xl">
            <p>
              <b>Researching</b> the most satisfying <b>User Experience</b>
            </p>
            <p>
              <b>Designing</b> the most efficient <b>User Interface</b>
            </p>
            <p>
              <b>Engineering</b> the most effective <b>Software</b>.
            </p>
          </div>
        </div>
        <div className="place-content-end">
          <img className="mb-10 lg:object-contain lg:mb-0" src="/logo.png" alt="Koraebi Logo"/>
        </div>
      </section>
      <div className="flex flex-col text-center mt-auto lg:flex-row lg:text-left">
        <ShortcutLink title="About" link="/about" text="Find my latest resume and an overview of my story and future ambitions." />
        <ShortcutLink title="Projects" link="/projects" text="Take a look at my work in Product Design and Software Engineering." />
        <ShortcutLink title="Studies" link="/studies" text="Read some of my case studies in Human-Computer Interaction." />
        <ShortcutLink title="Gallery" link="/gallery" text="Discover my artistic side with some of my graphic design visuals." />
      </div>
    </main>
  );
}
