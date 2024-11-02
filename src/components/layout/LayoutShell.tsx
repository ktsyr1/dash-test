import React from 'react';

interface LayoutShellProps {
  children: React.ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="flex flex-1 flex-col lg:pl-72">
      {children}
    </div>
  );
}