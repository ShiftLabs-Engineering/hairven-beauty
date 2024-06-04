import { Text } from "@medusajs/ui"

// import Medusa from "../../../common/icons/medusa"
import Spinner from "../../../common/icons/spinner"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by ShiftLabs
      <a href="https://www.shiftlabs.com" target="_blank" rel="noreferrer">
        <Spinner fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      {/* &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a> */}
    </Text>
  )
}

export default MedusaCTA
