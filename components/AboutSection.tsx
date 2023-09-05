import { ReactNode } from 'react';

export function SectionText({ children, position }: { children: ReactNode, position: string }) {
  return (
    <section className={`flex flex-col text-center lg:text-left justify-self-${position}`}>
      {children}
    </section>
  );
}

export function AboutSection({ children, reverse }: { children: ReactNode, reverse: boolean }) {
  return (
    <div className={`flex ${reverse ? 'flex-col-reverse' : 'flex-col'} lg:grid lg:grid-cols-2 lg:p-10 lg:gap-20 items-center`}>
      {children}
    </div>
  );
}