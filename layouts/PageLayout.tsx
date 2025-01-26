import { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col mt-5 p-5 lg:px-40">
      {children}
    </div>
  );
}