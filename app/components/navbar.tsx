"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <div className="flex flex-col space-y-4">
              <HoveredLink href="/services/vehicle-finance">Vehicle Finance</HoveredLink>
              <HoveredLink href="/services/private-to-private-finance">Private to Private Finance</HoveredLink>
              <HoveredLink href="/services/refinance-car">Re-finance a Car</HoveredLink>
              <HoveredLink href="/services/balloon-residual-refinance">Balloon/Residual Refinance</HoveredLink>
              <HoveredLink href="/services/warranties-service-plans">Extended warranties and Service Plans</HoveredLink>
            </div>
            <div className="flex flex-col space-y-4">
              <HoveredLink href="/services/referral-spotters-fees">Referral and Spotters Fees</HoveredLink>
              <HoveredLink href="/services/cash-loans">Cash Loans</HoveredLink>
              <HoveredLink href="/services/repair-loans">Workshops/Services/Repair Loans</HoveredLink>
              <HoveredLink href="/services/leisure-finance">Leisure Finance</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}