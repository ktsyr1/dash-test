import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { LayoutShell } from './LayoutShell';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <LayoutShell>
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50 px-6 py-8">
          {children}
        </main>
      </LayoutShell>
    </div>
  );
}