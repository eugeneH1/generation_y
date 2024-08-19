import Image from "next/image";
import Hero from "./components/hero";
import Features from "./components/features";

export default function Home() {
  return (
   <main className="pt-[180px]">
    <Hero />
    <Features />
   </main>
  );
}