import { ShoppingBag } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import EmblaCarousel from "../embla-carousel/"
import type { EmblaOptionsType } from "embla-carousel"

const Hero = () => {
  const emblaOptions: EmblaOptionsType | undefined = {
    dragFree: true,
    loop: true,
  }
  const SLIDE_COUNT = 3
  const SLIDES =[0,1,2]// Array.from(Array(SLIDE_COUNT).keys())



  return (

    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle mt-10">

      <div className="absolute inset-0 z-10  flex flex-col items-center justify-center gap-6 text-center small:p-2 p-4">
      	<EmblaCarousel slides={SLIDES} options={emblaOptions} />
        <a href="/store">
          <Button variant="danger" size="xlarge">
            Get Shopping
            <ShoppingBag />
          </Button>
        </a>
       </div>
    </div>

  )
}

export default Hero
