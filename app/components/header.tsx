'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile_menu';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#fff5c4] py-4 shadow-sm sticky top-0 left-0 right-0 md:h-[130px] z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-3 lg:px-4 lg:pt-4 xl:pt-0">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image 
              src="/GENY1.png" 
              alt="Logo" 
              width={384} 
              height={128} 
              className="hidden xl:block" 
            />
            <Image 
              src="/GENY3.png" 
              alt="Logo" 
              width={241} 
              height={81} 
              className="block md:hidden lg:block xl:hidden" 
            />
            <Image 
              src="/logo_no_bg.png" 
              alt="Logo" 
              width={100} 
              height={100} 
              className="hidden md:block lg:hidden" 
            />
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;