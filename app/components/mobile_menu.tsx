import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        onClick={toggleMenu}
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 text-white shadow-lg">
          <nav className="container mx-auto px-4 py-2">
            <Link href="/" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/finance" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Vehicle Finance
            </Link>
            <Link href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Private to Private Finance
            </Link>
            <Link href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Re-finance a Car
            </Link>
            <Link href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Balloon/Residual Refinance
            </Link>
            <Link href="/warranties-service-plans" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Extended warranties and Service Plans
            </Link>
            <Link href="/referral" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Referral and Spotters Fees
            </Link>
            <Link href="https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3aacf262d066%20" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Cash Loans
            </Link>
            <Link href="https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3aacf262d066%20" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Workshops/Services/Repair Loans
            </Link>
            <Link href="https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3aacf262d066%20" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Leisure Finance
            </Link>
            <Link href="/contact" className="block py-2 hover:bg-gray-700" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;