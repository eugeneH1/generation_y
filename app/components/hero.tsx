'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full py-4 md:py-24 lg:py-28 xl:py-36">
      <h1 className="font-bold text-4xl mb-8 text-center text-gray-900 pb-8">
        Finance and Insurance Brokerage
      </h1>
      <div className="container px-4 md:px-6 grid lg:grid-cols-[1fr_500px] gap-12 items-center py-8">
        <Image
          src="/geny.png"
          width={550}
          height={550}
          alt="Hero Image"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-black text-lg font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none">
              Your Vehicle<br />
              Your Needs<br />
              Our Tailored Solutions<br />
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Generation Y Solutions understands that financing and insurance aren't one-size-fits-all. Our experienced brokers find the perfect fit for your budget and lifestyle. Get started with a free quote today!
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-950 disabled:pointer-events-none disabled:opacity-50"
            >
              Get Finance
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-pink-500 bg-white px-8 text-sm font-medium text-pink-500 shadow-sm transition-colors hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-950 disabled:pointer-events-none disabled:opacity-50 dark:border-pink-400 dark:bg-gray-950 dark:text-pink-400 dark:hover:bg-pink-900/50 dark:focus-visible:ring-pink-300"
            >
              Get insurance
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-family: 'Tomatoes', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Hero;