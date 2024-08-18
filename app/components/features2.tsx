/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BUti0KbqULH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center py-12 min-h-screen">
      <h2 className="text-4xl font-bold mb-12">Our Features</h2>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg">
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <RocketIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 1</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <LightbulbIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 2</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <SunIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 3</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <LeafIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 4</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <WavesIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 5</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <CloudIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 6</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <CodeIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 7</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <PuzzleIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 8</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="group flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <HeartIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium group-hover:text-gray-900">Feature 9</span>
          <Link href="#" className="mt-4" prefetch={false}>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function HeartIcon(props) {
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


function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function PuzzleIcon(props) {
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
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function WavesIcon(props) {
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
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  )
}