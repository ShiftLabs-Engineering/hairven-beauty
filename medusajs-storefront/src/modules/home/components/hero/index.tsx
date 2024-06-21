import { ShoppingBag } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import EmblaCarousel from "../embla-carousel/"
import type { EmblaOptionsType } from "embla-carousel"

const Hero = () => {
  const OPTIONS: EmblaOptionsType | undefined = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center small:p-16 p-8">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="primary" size="large">
            Get Shopping
            <ShoppingBag />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
