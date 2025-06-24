// components/ActivePageHeader.tsx (or wherever you prefer to save it)
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function page() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    // Determine the page title based on the current pathname
    switch (pathname) {
      case '/':
        setPageTitle('Dashboard');
        break;
      case '/Users':
        setPageTitle('Users');
        break;
      case '/manage':
        setPageTitle('Manage API Pricing');
        break;
      case '/docs':
        setPageTitle('Docs');
        break;
      default:
        setPageTitle('Page Not Found'); // A default for unknown paths
    }
  }, [pathname]); // This effect re-runs whenever the URL changes

  return (
    <div className="text-2xl font-bold text-white p-5 ">
      {pageTitle}
    </div>
  );
}