import { ShoppingBag } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import EmblaCarousel from "../embla-carousel/"
import type { EmblaOptionsType } from "embla-carousel"

const Hero = () => {
  const emblaOptions: EmblaOptionsType | undefined = {
    dragFree: true,
    loop: true
  }
  const SLIDE_COUNT = 5
  const emblaSlides = [
    'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/h8iz87yva1tkppnnlth6',
    'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/mmifrlnojtmceogzaztw',
     'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/lwv6hzfniiifgzkjuyer',
  ]

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center small:p-16 p-8">
        <EmblaCarousel slides={emblaSlides} options={emblaOptions} />
        <a href="/store">
          <Button variant="primary" size="xlarge">
            Get Shopping
            <ShoppingBag />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
