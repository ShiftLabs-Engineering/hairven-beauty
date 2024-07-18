"use client"

import React, { useCallback } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import { DotButton, useDotButton } from "./embla-carousel-dot-button"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000,stopOnInteraction: false,stopOnFocusIn: false, })])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="!w-full !h-full overflow-hidden" ref={emblaRef}>
      {/* <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="flex w-full h-full"> */}
          {slides.map((url, index) => (
            <div
              className="flex-none items-center justify-center  w-full h-full"
              key={index}
            >
              <div className="flex items-center justify-center h-full w-full font-extrabold text-8xl">
                <Image
                  src={url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 rounded-rounded"
                  alt={`What is hot ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        {/* </div>
      </div> */}

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex
                  ? " embla__dot--selected text-black"
                  : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
