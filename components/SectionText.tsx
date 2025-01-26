import { ReactNode } from 'react';

export default function SectionText({ children, position }: { children: ReactNode, position: string }) {
  return (
    <section className={`flex flex-col text-center lg:text-left justify-self-${position}`}>
      {children}
    </section>
  );
};