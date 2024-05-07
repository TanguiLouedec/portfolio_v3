"use client"

import { useRouter } from 'next/navigation';

import anime from 'animejs'

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Environment } from "@react-three/drei";
import { Model } from "./model"

import { title } from "@/components/primitives"
import { Button } from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Tooltip} from "@nextui-org/tooltip";
import Loading from './loading';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true) 
  const router = useRouter()
  const handleClick = () => {
    anime.timeline({
            easing: 'spring(1, 80, 10, 0)',
            duration: 750,
          })
          .add({
            targets: '#button',
            translateX: 100,
          })
          .add({
            targets: '#button',
            translateX: -2000,
          }, 250)
          .add({
            targets: '#render',
            translateX: 100,
          }, 500)
          .add({
            targets: '#render',
            translateX: -2000,
          }, 500)
          .add({
            targets: '#title',
            translateX: 100,
          }, 750)
          .add({
            targets: '#title',
            translateX: -2000,
          }, 1000)
    setTimeout(() => {
      router.push('/about')
    }, 1500)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault() // Prevent default Space behavior
      handleClick()
    }
  } 

  useEffect(() => {
    // Attach the keydown event listener
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function HandleLoad({ load }) {
    useEffect(() => {
      setIsLoading(true)
      return () => setIsLoading(false)
    }, [])
  }

	return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div id="title" className="inline max-w-lg">
        <h1 className={title()}>Hi!&nbsp;</h1>
        <br />
        <h1 className={title()}>I'm&nbsp;</h1>
        <h1 className={title({ color: "violet"})}>Tangui</h1>
        <h1 className={title()}>,</h1>
        <br />
        <h1 className={title()}>fullstack developper</h1>
      </div>
      <div id='render' className="w-full h-96 mt-16">
        <Canvas>
          <Suspense fallback={<HandleLoad load={setIsLoading} />}>
            <Model />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
        {isLoading && <Loading />} 
      </div>
      <div id='button'> 
        <Tooltip content="Yes, you can also click me...">
          <Button
            size="lg"
            radius="full"
            variant="shadow"
            color="default"
            className="mt-8"
            onClick={handleClick}
          >
            Press <Kbd> Enter</Kbd> or <Kbd> Space</Kbd> to start!
          </Button>
        </Tooltip>
      </div>
    </section>
	);
}

