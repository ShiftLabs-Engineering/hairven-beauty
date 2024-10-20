"use client"

// import React, { useCallback } from "react"
// import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
// import { DotButton, useDotButton } from "./embla-carousel-dot-button"
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./embla-carousel-arrow-buttons"
// import Autoplay from "embla-carousel-autoplay"
// import useEmblaCarousel from "embla-carousel-react"
// import Image from "next/image"
// import ClassNames from 'embla-carousel-class-names'

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props
//   const emblaSlides = [
//     'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/h8iz87yva1tkppnnlth6',
//     'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/mmifrlnojtmceogzaztw',
//      'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/lwv6hzfniiifgzkjuyer'
//   ]
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000,stopOnInteraction: false,stopOnFocusIn: false, })])


//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//      useDotButton(emblaApi)

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi)

//   return (
//   <div className="embla m-auto w-full h-[75vh] border-b border-ui-border-base relative bg-ui-bg-subtle">
//      <div className="embla__viewport w-full h-full" ref={emblaRef}>
//        <div className="embla__container">
//          {slides.map((index) => (
//            <div className="embla__slide embla__class-names" key={index}>
//            <img
//                            className="embla__slide__img"
//                            src={`https://picsum.photos/600/350?v=${index}`}
//                            alt="Your alt text"
//                          />
//            {/* <Image
//                             src={emblaSlides[0]}
//                             className="embla__slide__img"
//                             alt={`What is hot ${index + 1}`}
//                             fill

//                             style={{
//                               objectFit: "cover",
//                             }}
//                           /> */}
//              {/* <img
//                className="embla__slide__img"
//                src={emblaSlides[index]}
//                alt="Your alt text"
//              /> */}
//            </div>
//          ))}
//        </div>
//      </div>

//      <div className="embla__controls">
//        <div className="embla__buttons">
//          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//        </div>

//        <div className="embla__dots">
//          {scrollSnaps.map((_, index) => (
//            <DotButton
//              key={index}
//              onClick={() => onDotButtonClick(index)}
//              className={'embla__dot'.concat(
//                index === selectedIndex ? ' embla__dot--selected' : ''
//              )}
//            />
//          ))}
//        </div>
//      </div>
//    </div>
//   )
// }

// export default EmblaCarousel
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './embla-carousel-arrow-buttons'
import { DotButton, useDotButton } from './embla-carousel-dot-button'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames(),Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

    const emblaSlides = [
      'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/h8iz87yva1tkppnnlth6',
      'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/mmifrlnojtmceogzaztw',
       'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/lwv6hzfniiifgzkjuyer',
       'https://res.cloudinary.com/dkqiokfok/image/upload/f_auto,q_auto/v1/hairven-beauty/carousel/sq4zcaia8on2vlv6tze9'
    ]
  return (
    <div className="embla pt-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <img
                className="embla__slide__img"
                src={emblaSlides[index]}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

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
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
