import React from 'react';

interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-bold tracking-tight">
      {children}
    </h2>
  );
}