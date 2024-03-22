"use client"

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";


import { title } from "@/components/primitives"

import { Model } from "./model"

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline max-w-lg">
        <h1 className={title()}>Hi!&nbsp;</h1>
        <br />
        <h1 className={title()}>I'm&nbsp;</h1>
        <h1 className={title({ color: "violet"})}>Tangui</h1>
        <h1 className={title()}>,</h1>
        <br />
        <h1 className={title()}>fullstack developper</h1>
      </div>
      <div className="w-full h-96 mt-16">
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
		</section>
	);
}

