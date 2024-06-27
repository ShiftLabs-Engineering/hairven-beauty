import { Metadata } from "next"
import "styles/globals.css"
import "linq-extensions"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  title: "HairvenBeauty Store | Luxury Hair for Boss Ladies",
  metadataBase: new URL(BASE_URL),
  category:
    "wigs,hair extensions,wig rejuvenation and treatment,customised wigs,100% human hair",
  description:
    "Luxury hair for boss ladies. Best in class wigs and extensions. 100% human hair, bone straight, curls. Free shipping. Easy returns. Shop now!",
  abstract:
    "Online store for Hairvenbeauty.Place orders for your customised wigs and hair extensions. Buy gift Cards for bae and your loved ones",
  applicationName: "HairvenBeauty",
  creator: "ShiftLabs",
  keywords:
    "hairvenbeauty,south africa,johannesburg,bone straight, luxury haur,hair, wigs, extensions, beauty, luxury, boss ladies, human hair, free shipping, easy returns, shop now, gift cards, bae, loved ones, customised wigs, online store",
  robots: "index,follow",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
