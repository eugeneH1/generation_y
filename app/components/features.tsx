"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Features() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setOpenPopover(id);
  };

  const handleMouseLeave = () => {
    setOpenPopover(null);
  };

  const services = [
    {
      id: "vehicle-finance",
      title: "Vehicle Finance",
      icon: "/car.svg",
      link: "/finance",
      description: "Get financing options for your vehicle purchases.",
    },
    {
      id: "private-finance",
      title: "Private to Private Finance",
      icon: "/finance.svg",
      link: "https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4",
      description: "Facilitate financial transactions between private parties.",
    },
    {
      id: "refinance-car",
      title: "Re-finance a Car",
      icon: "/refinance.svg",
      link: "https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4",
      description: "Refinance your existing car loan to lower your monthly payments or tap into your car's equity.",
    },
    {
      id: "balloon-refinance",
      title: "Balloon/Residual Refinance",
      icon: "/balloon.svg",
      link: "https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4",
      description: "Refinance your balloon or residual payment to lower your monthly payments or avoid a large lump sum payment.",
    },
    {
      id: "warranties-plans",
      title: "Extended Warranties and Service Plans",
      icon: "/document.svg",
      link: "/warranties-service-plans",
      description: "Protect your vehicle with extended warranties and service plans to cover unexpected repairs and maintenance.",
    },
    {
      id: "referral-fees",
      title: "Referral and Spotter Fees",
      icon: "/referral.svg",
      link: "/referral",
      description: "Earn referral fees by referring friends and family to our services, or spotter fees for finding vehicles for our clients.",
    },
    {
      id: "cash-loans",
      title: "Cash Loans",
      icon: "/cash.svg",
      link: "https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3a03e1fe0ff4%20",
      description: "Get cash loans for personal or business use, with flexible repayment terms and competitive interest rates.",
    },
    {
      id: "repair-loans",
      title: "Workshops/Services/Repair Loans",
      icon: "/tool.svg",
      link: "https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3a03e1fe0ff4%20",
      description: "Get financing for workshop, service, or repair costs for your vehicle, with flexible repayment terms.",
    },
    {
      id: "leisure-finance",
      title: "Leisure Finance",
      icon: "/leisure.svg",
      link: "https://www.motodata.co.za:8443/leadapplicationDealership.jsf?supplier=002245MD&compGuid=e7ece5ac-7b42-46e7-8f82-3a03e1fe0ff4%20",
      description: "Get financing for leisure activities like boats, caravans, or motorcycles, with competitive interest rates and flexible repayment terms.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 min-h-screen">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg"
            onMouseEnter={() => handleMouseEnter(service.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
              <Image src={service.icon} alt={service.title} width={24} height={24} className="invert"/>
            </div>
            <span className="text-lg font-medium group-hover:text-gray-900">{service.title}</span>
            <Popover open={openPopover === service.id}>
              <PopoverTrigger asChild>
                <div className="w-full h-full absolute top-0 left-0 cursor-default" />
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="relative z-20"
            >
              <a href={service.link}>Learn More</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}