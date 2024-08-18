import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: "Vehicle Finance",
    icon: (
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    ),
    color: "red",
    buttonText: "More Info"
  },
  {
    title: "Private to Private Finance",
    icon: (
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    ),
    color: "orange",
    buttonText: "Apply"
  },
  {
    title: "Re-finance a Car",
    icon: (
      <circle cx="12" cy="12" r="4"></circle>
    ),
    color: "yellow",
    buttonText: "Apply"
  },
  {
    title: "Balloon/Residual Refinance",
    icon: (
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    ),
    color: "green",
    buttonText: "Apply"
  },
  {
    title: "Extended warranties and Service Plans",
    icon: (
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
    ),
    color: "teal",
    buttonText: "More Info"
  },
  {
    title: "Referral and Spotters Fees",
    icon: (
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    ),
    color: "blue",
    buttonText: "More Info"
  },
  {
    title: "Cash Loans",
    icon: (
      <polyline points="16 18 22 12 16 6"></polyline>
    ),
    color: "indigo",
    buttonText: "Apply"
  },
  {
    title: "Workshops/Services/Repair Loans",
    icon: (
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path>
    ),
    color: "purple",
    buttonText: "Apply"
  },
  {
    title: "Leisure Finance",
    icon: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    ),
    color: "pink",
    buttonText: "Apply"
  }
];

const Features = () => {
  return (
    <section className="bg-white text-black flex flex-col items-center justify-center py-12 min-h-screen">
      <h2 className="text-5xl font-bold mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, icon, color, buttonText }) => {
  return (
    <div className={`group flex flex-col items-center justify-center gap-4 p-6 rounded-lg hover:bg-${color}-200 transition-colors hover:scale-105 shadow-lg`}>
      <div className={`w-12 h-12 rounded-full bg-${color}-500 flex items-center justify-center`}>
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
          className="w-6 h-6 text-white"
        >
          {icon}
        </svg>
      </div>
      <span className="text-lg font-medium group-hover:text-gray-900 text-center">{title}</span>
      <Link href="#" className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default Features;