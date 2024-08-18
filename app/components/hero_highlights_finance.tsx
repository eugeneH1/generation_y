"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import Image from "next/image";
export function HeroHighlightFinance() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Thank you for choosing 
        <Image src="/GENY2.png" alt="Generation Y Solutions" width={800} height={800} />
        {" "}
        <Link href="https://thirdparty.signio.co.za/ThirdPartyIntegration/application?skin=LIGHTSTONE&uuid=00000180-fb8c-6ad9-9a38-3a03e1fe0ff4">
          <Highlight className="text-black dark:text-white">
            here 
          </Highlight>
        </Link>
        {" "}
        to apply for vehicle finance
      </motion.h1>
    </HeroHighlight>
  );
}