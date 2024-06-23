import LocalizedClientLink from "@modules/common/components/localized-client-link"
import HairvenLogo from "@modules/common/icons/hairven-logo"

const HairvenLogoComponent = () => {
  return (
    <div className="flex items-center h-full">
      <HairvenLogo size={120} />
      <LocalizedClientLink
        href="/"
        className="txt-compact-xlarge-plus hover:text-ui-fg-base text-center -ml-10"
        data-testid="nav-store-link"
      >
        <span className="text-rose-700">
          Hairven Beauty <br /> Store
        </span>
      </LocalizedClientLink>
    </div>
  )
}

export default HairvenLogoComponent
