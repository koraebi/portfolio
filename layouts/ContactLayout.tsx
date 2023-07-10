import ContactForm from '../components/ContactForm';

export default function ContactLayout({ translations: t }: { translations: any }) {
  return (
    <main className="flex flex-col mt-5 p-5 lg:px-40">
      <div className="flex flex-col lg:p-10 lg:grid lg:grid-cols-2 lg:gap-10">
        <section className="w-full text-center lg:text-left lg:mt-10">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t['contact']}
          </h1>
          <p className="text-lg mb-1">
            {t['contactSubtitle']}
          </p>
          <p className="font-light mb-4">
            {t['contactDescription1']}<br/>
            {t['contactDescription2']}
          </p>
        </section>
        <ContactForm translations={t}/>
      </div>
    </main>
  );
}