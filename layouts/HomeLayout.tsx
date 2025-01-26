import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      {children}
    </div>
  );
}