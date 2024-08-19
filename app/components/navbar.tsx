"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("hidden md:flex justify-center fixed top-10 inset-x-0 z-50", className)}>
      <div className="w-full max-w-md bg-white rounded-full border border-gray-200 shadow-sm">
        <Menu setActive={setActive}>
          <Link href="/" className="text-black hover:opacity-[0.9] dark:text-white">
            Home
          </Link>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/finance">Vehicle Finance</HoveredLink>
              <HoveredLink href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4">Private to Private Finance</HoveredLink>
              <HoveredLink href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4">Re-finance a Car</HoveredLink>
              <HoveredLink href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4">Balloon/Residual Refinance</HoveredLink>
              <HoveredLink href="/warranties-service-plans">Extended warranties and Service Plans</HoveredLink>
              <HoveredLink href="/referral">Referral and Spotters Fees</HoveredLink>
              <HoveredLink href="https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3aacf262d066%20">Cash Loans</HoveredLink>
              <HoveredLink href="https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3aacf262d066%20">Workshops/Services/Repair Loans</HoveredLink>
              <HoveredLink href="https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3aacf262d066%20">Leisure Finance</HoveredLink>
            </div>
          </MenuItem>
          <Link href="/contact" className="text-black hover:opacity-[0.9] dark:text-white">
            Contact
          </Link>
        </Menu>
      </div>
    </div>
  );
}