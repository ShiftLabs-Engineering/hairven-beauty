import React from "react"

import { IconProps } from "types/icon"

const HairvenLogo: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 382 398"
      width={size}
      height={size}
    >
      <path
        fill="#400000"
        fillOpacity=".2"
        d="M176.4 240c0 17.3.2 24.4.3 15.7.2-8.6.2-22.8 0-31.5-.1-8.6-.3-1.5-.3 15.8m-11 1c0 16.8.2 23.6.3 15.2.2-8.3.2-22.1 0-30.5-.1-8.3-.3-1.5-.3 15.3m-39-7c0 6.3.1 8.9.3 5.7.2-3.1.2-8.3 0-11.5-.2-3.1-.3-.5-.3 5.8"
      />
      <path
        fill="#400000"
        fillOpacity=".3"
        d="M205.3 220c0 4.7.2 6.6.4 4.2.2-2.3.2-6.1 0-8.5-.2-2.3-.4-.4-.4 4.3m.1 26c0 6.9.1 9.7.3 6.2.2-3.4.2-9 0-12.5-.2-3.4-.3-.6-.3 6.3m-69.1-.5c0 3.8.2 5.3.4 3.2.2-2 .2-5.2 0-7-.2-1.7-.4-.1-.4 3.8m-10 7.5c0 4.7.2 6.6.4 4.2.2-2.3.2-6.1 0-8.5-.2-2.3-.4-.4-.4 4.3"
      />
      <path
        fill="#800040"
        fillOpacity=".8"
        d="M120.7 206.7c-.3.5 4.4.8 10.3.8s10.6-.3 10.3-.8c-.2-.4-4.9-.7-10.3-.7s-10.1.3-10.3.7m75.8 6.6c-.3.7-.4 13.8-.2 29.2l.2 28 .3-28.7c.2-26.3.3-28.7 2-29.1 1.6-.4 1.6-.5-.1-.6-1 0-2 .5-2.2 1.2m7.9 44.7c0 7.4.1 10.5.3 6.7.2-3.7.2-9.7 0-13.5-.2-3.7-.3-.6-.3 6.8m-28.8 15.2c.2.4-1.3.9-3.3 1.1-2.1.2-.8.3 2.9.3 7.2-.1 9.1-1.1 3.4-1.8-1.9-.2-3.3-.1-3 .4m15.9.7c1.9.9 11.3 1.5 10.4.7-.2-.2-3.1-.6-6.4-1-4-.4-5.3-.3-4 .3"
      />
      <path
        fill="#800040"
        fillOpacity=".7"
        d="M127.4 236.5c0 13.2.2 18.5.3 11.7.2-6.8.2-17.6 0-24-.1-6.4-.3-.9-.3 12.3m8 5c0 5.5.1 7.6.3 4.7s.2-7.4 0-10-.3-.2-.3 5.3"
      />
      <path
        fill="#800040"
        fillOpacity=".9"
        d="M171 147.1c-9.6 12.9-15.2 24-14.9 29.4.1 2 .1 2 .6 0 1.8-8.2 8-19.4 15.7-28.5 2.5-2.9 4.4-5.6 4.1-5.8-.3-.3.3-1.1 1.3-1.8 1-.8 1.2-1.3.4-1.4-.6 0-3.9 3.7-7.2 8.1m-4.2 101.5c-.2 14.1 0 25.8.4 26 .4.3.7-11.3.8-25.6 0-14.3-.2-26-.4-26-.3 0-.7 11.5-.8 25.6m64.3-8c-.1.5 1.6 2.6 3.6 4.5 3.1 2.8 3.3 2.9 1.3.5-2.2-2.6-2.3-2.9-.5-2.3 1.9.7 1.9.7.1-.8-1-.8-2.2-1.2-2.7-1-.4.3-1-.1-1.2-.7-.3-.7-.6-.8-.6-.2"
      />
      <path
        fill="#400040"
        fillOpacity=".4"
        d="M195.4 245c0 5.2.1 7.4.3 4.7.2-2.6.2-6.8 0-9.5-.2-2.6-.3-.4-.3 4.8"
      />
      <path
        fill="#800040"
        fillOpacity=".6"
        d="M175.4 241c0 16.8.2 23.6.3 15.2.2-8.3.2-22.1 0-30.5-.1-8.3-.3-1.5-.3 15.3m-9 5.5c0 13.7.2 19.5.3 12.8.2-6.7.2-17.9 0-25-.1-7-.3-1.6-.3 12.2"
      />
      <g fill="#BF0040" strokeWidth="0">
        <path d="M198.6 124.1c.4 1.9 1 4.1 1.5 4.9.4.9.1 4.7-.7 8.5-1.4 6.7-2.5 9.4-8.9 21.4-3.1 5.8-4.3 14-2.7 18.1.9 2.4 1 2.4 1.7.5 2.4-6.9 7.7-10.9 15.8-12 7.4-1 7.7-1.5 7.1-10.3-.4-6.4-.8-7.8-2.9-9.6-1.4-1.2-2.5-2.6-2.5-3 0-.5.9-.1 2.1 1 1.7 1.6 2.2 1.6 2.9.4 1.4-2.2 1.3-2.3-2.5-4.8-2-1.2-3.5-3-3.5-4.1 0-1-.6-2.1-1.3-2.4-.8-.3-2-2.6-2.7-5.1-1.6-5.8-4.3-8.6-3.4-3.5" />
        <path d="M181.8 148.7c-16.4 24.6-18.1 36.8-6.8 49.7 4.5 5 16.3 8.9 21.9 7.1 3.6-1.1 2.3-2-3.6-2.3-12.7-.6-20.3-9.4-20.3-23.7 0-9 2.1-14.8 11.4-31.8 2.6-4.8 4.6-8.7 4.3-8.7-.2 0-3.3 4.4-6.9 9.7m-53.7 91.1c-.1 35.5-.3 34.2 5 34.2 1.8 0 1.9-.9 1.9-13.9 0-10.2-.3-14.1-1.2-14.4-1-.4-1-.7-.1-1.4.9-.6 1.1-2.8.8-6.9-.7-7.8.1-8.6 7.3-7.2 3.6.8 6.2.8 8.5 0l3.2-1-3.7-.1c-2.1-.1-6.2-1.2-9.3-2.5l-5.5-2.5-.1-6.3c-.1-3.5-.2-7.2-.3-8.3-.1-1.5-.9-2.1-3.3-2.3l-3.1-.3zm39.9-32.4c0 .1-.1 15.1-.3 33.4l-.2 33.2h3.9c3.1 0 3.7-.3 3.2-1.6-.3-.9-.6-15.7-.6-32.9v-31.3l-3-.4c-1.6-.3-3-.4-3-.4m56.6 4.1c2.2 1.3 4.9 4 5.9 5.9 1.1 2 2.2 3.1 2.6 2.5.3-.6.4 1.2.1 4-.5 5.2 1 7.2 2.2 2.8 1.7-6.6-1.2-12.2-8.1-15.6-5.9-2.9-7.7-2.6-2.7.4m-26.8 1.7c-.1.2-.5 13.9-.8 30.6l-.5 30.2h2.2c1.2 0 2.4-.6 2.6-1.3.4-.9.8-.8 1.6.3s1-5.6.7-23.5c-.3-13.8-.5-27.6-.5-30.8-.1-5.4-.2-5.7-2.6-5.7-1.4 0-2.6.1-2.7.2m38.7 32.9c4.9 5.9 6.5 10.3 6.5 17.9 0 9.9-2.4 14.6-9.7 19-6.6 4-5.2 5.1 2.9 2.4 7.2-2.4 13.4-8.7 14.3-14.6.6-4.2-.5-10.7-2.4-13.7-.7-1.1-1.1-1-2 .5-1.1 1.6-1.2 1.4-.7-1.3.5-2.9 0-3.8-4.6-8.3-5.6-5.5-8.5-6.8-4.3-1.9" />
      </g>
      <path
        fill="#800040"
        fillOpacity=".4"
        d="M126.8 275.7c2.3.2 6.1.2 8.5 0 2.3-.2.4-.4-4.3-.4s-6.6.2-4.2.4m42 0c2.3.2 6.1.2 8.5 0 2.3-.2.4-.4-4.3-.4s-6.6.2-4.2.4"
      />
      <path
        fill="#BF0040"
        fillOpacity=".9"
        d="M174.4 237c0 15.7.2 22.1.3 14.2.2-7.8.2-20.6 0-28.5-.1-7.8-.3-1.4-.3 14.3"
      />
      <path
        fill="#400040"
        fillOpacity=".3"
        d="M136.4 261c0 5.2.1 7.4.3 4.7.2-2.6.2-6.8 0-9.5-.2-2.6-.3-.4-.3 4.8"
      />
    </svg>
  )
}

export default HairvenLogo
