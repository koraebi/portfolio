import Portfolio from '@/components/portfolio/Portfolio';

export default function PortfolioLayout({ translations: t }: { translations: any }) {
  return (
    <main>
      <Portfolio translations={t}/>
    </main>
  );
}