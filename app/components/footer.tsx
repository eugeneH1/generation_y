import React from 'react';
import Image from 'next/image';
import geny2 from "../public/geny2.png";
import logo_black from "../public/geny_black.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3c4660] text-white py-12 md:py-16 p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            {/* Uncomment and adjust the Image component if needed */}
            {/* <Image
              src={logo_black}
              width={24}
              height={24}
              alt="Generation Y Solutions Logo"
              className="h-8 w-8 mr-2"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-gray-400 mr-2"
            />
            <span className="text-xl font-bold">Generation Y Solutions</span>
          </div>
          <p className="text-gray-400">
            With over 20 years of industry experience, we provide expert finance and insurance solutions to clients and businesses. 
            Our passion and knowledge help us build strong, lasting relationships with both new and existing customers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a className="text-gray-400 hover:text-white" href="./privacy_policy" rel="ugc">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="./termspage" rel="ugc">
                  Terms & Conditions
                </a>
              </li>
              {/* <li>
                <a className="text-gray-400 hover:text-white" href="https://www.youtube.com" rel="ugc">
                  Services
                </a>
              </li> */}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Company</h4>
            <p>Part of Independent Dealer Association</p>
            <p>FSP Number: 28260</p>
            <p>NCA, FAIS, FIC, CBD, Fit and Proper compliant.</p>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Contact Us</h4>
          <ul className="space-y-1">
            <li>
              <a className="text-gray-400 hover:text-white" href="tel:0834474472" rel="ugc">
                083 447 4472
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="tel:0836445722" rel="ugc">
                083 644 5722
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="tel:0834474471" rel="ugc">
                083 447 4471
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="mailto:info@generationy.co.za" rel="ugc">
                info@generationy.co.za
              </a>
            </li>        
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=SILVER+LAKES+GOLF+ESTATE+Pretoria+South+Africa">
                Silver Lakes Golf Estate, Pretoria
              </a>
            </li>   
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;