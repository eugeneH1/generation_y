/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BUti0KbqULH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center py-12 min-h-screen">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg">
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/car.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Vehicle Finance</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Vehicle Finance</h4>
                  <p className="text-sm text-muted-foreground">
                    Get financing options for your vehicle purchases.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/finance.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Private to Private Finance</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Private to Private Finance</h4>
                  <p className="text-sm text-muted-foreground">
                    Facilitate financial transactions between private parties.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/refinance.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Re-finance a Car</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Re-finance a Car</h4>
                  <p className="text-sm text-muted-foreground">
                    Refinance your existing car loan to lower your monthly payments or tap into your car&apos;s equity.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/balloon.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Balloon/Residual Refinance</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Balloon/Residual Refinance</h4>
                  <p className="text-sm text-muted-foreground">
                    Refinance your balloon or residual payment to lower your monthly payments or avoid a large lump sum payment.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/document.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Extended Warranties and Service Plans</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Extended Warranties and Service Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    Protect your vehicle with extended warranties and service plans to cover unexpected repairs and maintenance.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/referral.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Referral and Spotter Fees</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Referral and Spotter Fees</h4>
                  <p className="text-sm text-muted-foreground">
                    Earn referral fees by referring friends and family to our services, or spotter fees for finding vehicles for our clients.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/cash.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Cash Loans</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Cash Loans</h4>
                  <p className="text-sm text-muted-foreground">
                    Get cash loans for personal or business use, with flexible repayment terms and competitive interest rates.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/tool.svg" alt="Car" width={24} height={24} className="invert"/>
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Workshops/Services/Repair Loans</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Workshops/Services/Repair Loans</h4>
                  <p className="text-sm text-muted-foreground">
                    Get financing for workshop, service, or repair costs for your vehicle, with flexible repayment terms.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <HeartIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Leisure Finance</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Learn More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Leisure Finance</h4>
                  <p className="text-sm text-muted-foreground">
                    Get financing for leisure activities like boats, caravans, or motorcycles, with competitive interest rates and flexible repayment terms.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  )
}




function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}