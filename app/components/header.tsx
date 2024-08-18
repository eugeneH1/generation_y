import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#fff5c4] py-4 shadow-sm sticky top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/GENY1.png" alt="Logo" width={384} height={128} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;