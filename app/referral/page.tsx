import React from 'react';
import Image from 'next/image';
import ReferralForm from './form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ReferralPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Join Our Referral Program
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Earn rewards by referring your friends and family to our platform. It&apos;s easy, fast, and mutually beneficial!
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Image
              src="/referral.webp"
              alt="Referral Program"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Form and Explanation Section */}
      <section className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <ReferralForm />
        </div>
        <div className="w-full lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>How Our Referral System Works</CardTitle>
              <CardDescription>Simple steps to start earning rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4">
                <li>Fill out the referral form with your details and your friend&apos;s information.</li>
                <li>We&apos;ll send an invitation to your friend to join our platform.</li>
                <li>When your friend signs up and makes their first purchase, you&apos;ll earn reward points.</li>
                <li>Redeem your points for discounts, special offers, or cash back!</li>
              </ol>
              <p className="mt-4 text-sm text-gray-600">
                The more friends you refer, the more rewards you can earn. There&apos;s no limit to how many people you can refer!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ReferralPage;