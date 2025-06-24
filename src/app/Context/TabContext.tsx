'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
};

type TabContextType = {
  navLinks: NavLink[];
  addEditPlanTab: () => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    { href: '/', label: 'Dashboard' },
    { href: '/Users', label: 'Users' },
    { href: '/manage', label: 'Manage API Pricing' },
    { href: '/docs', label: 'Docs' },
  ]);

  const router = useRouter();

  const addEditPlanTab = () => {
    const exists = navLinks.find(link => link.href === '/Editpage');

    if (!exists) {
      const newTab = { href: '/Editpage', label: 'Edit Plan' };
      const updatedLinks = [
        ...navLinks.slice(0, navLinks.length - 1),
        newTab,
        navLinks[navLinks.length - 1],
      ];
      setNavLinks(updatedLinks);
    }

    router.push('/Editpage'); // ✅ Route must match your folder name
  };

  return (
    <TabContext.Provider value={{ navLinks, addEditPlanTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
