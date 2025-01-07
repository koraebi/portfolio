import { ReactNode } from 'react';

export default function Section({ children, reverse }: { children: ReactNode, reverse: boolean }) {
  return (
    <div className={`flex ${reverse ? 'flex-col-reverse' : 'flex-col'} lg:grid lg:grid-cols-2 lg:p-10 lg:gap-20 items-center`}>
      {children}
    </div>
  );
};