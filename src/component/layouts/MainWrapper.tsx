import React from 'react';
interface MainWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainWrapper({ children, className = '' }: MainWrapperProps) {
  return (
    <main className={`content__wrapper ${className}`}>
      {children}
    </main>
  );
}
