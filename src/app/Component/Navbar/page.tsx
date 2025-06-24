  'use client';

  import React from 'react';
  import Image from 'next/image';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import { useTabContext } from '@/app/Context/TabContext'; // ✅ import context

  export default function Sidebar() {
    const pathname = usePathname();
    const { navLinks } = useTabContext(); // ✅ get tabs from context

    const Icon = ({ isActive }: { isActive: boolean }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={`w-6 h-6 ${isActive ? 'text-black' : 'text-white'}`}
        fill="currentColor"
      >
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
      </svg>
    );

    return (
      <div className="text-white border-r border-gray-800 h-screen">
        {/* Logo */}
        <div className="p-3">
          <Image src="/images/dashLogo.svg" alt="Logo" width={212} height={56} />
        </div>

        <div className="mt-20">
          <nav className="space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center border-l-2 py-3 pl-6 pr-2 cursor-pointer 
                    ${isActive
                      ? 'border-[#FFB700] bg-[#FFB7001A] text-white'
                      : 'border-transparent hover:border-[#FFB700] hover:bg-[#FFB7001A]'}
                  `}
                >
                  <div className={`mx-3 p-2 rounded ${isActive ? 'bg-[#FFB700]' : 'bg-[#D9D9D91A]'}`}>
                    <Icon isActive={isActive} />
                  </div>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }
