'use client'

import Image from 'next/image'
import { useState } from 'react'

export type CarouselItem = {
  id: string,
  imgSrc: string
}


export type CarouselProps = {
  items: CarouselItem[]
}

export default function Carousel({ carouselProps }: { carouselProps: CarouselProps }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? carouselProps.items.length - 1 : current - 1);
  const next = () => setCurrent(current === carouselProps.items.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
          {carouselProps.items.map((item) => (
            <div key={item.id} className='relative h-screen min-w-full'>
              <Image src={item.imgSrc} alt='123' fill className='object-cover'></Image>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} className="absolute left-0 top-1/2 h-full -translate-y-1/2 bg-linear-to-l from-black/0 to-foreground/20 text-background pl-10 pr-40 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Image src={"/vector/arrow_left.svg"} alt='123' width={24} height={24}></Image>
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 h-full -translate-y-1/2 bg-linear-to-r from-black/0 to-foreground/20 text-background pr-10 pl-40 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Image src={"/vector/arrow_right.svg"} alt='123' width={24} height={24}></Image>
      </button>
    </div>
  );
}