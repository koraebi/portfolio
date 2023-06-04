
import ShortcutLink from '@/components/ShortcutLink'
import HomeBanner from '@/components/HomeBanner'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-5">
      <HomeBanner/>
      <div className="flex flex-col mt-10 text-center lg:flex-row lg:text-left">
        <ShortcutLink title="About" link="/about" text="Find my latest resume and an overview of my story and future ambitions." />
        <ShortcutLink title="Portfolio" link="/portfolio" text="Take a look at my work in Product Design and Software Engineering." />
        <ShortcutLink title="Studies" link="/studies" text="Read some of my case studies in Human-Computer Interaction (HCI)." />
        <ShortcutLink title="Gallery" link="/gallery" text="Discover my artistic side with some of my graphic design visuals." />
      </div>
    </main>
  );
}
