import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-blue-100 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Discover the Source of Innovation</h3>
          <p>
            Explore CMW CO2 Technologies, the Makers of Our Premium Dry Ice
            Blasters.
          </p>
          <div className="mt-6">
            <UnderlineLink href="https://cmw-dryice.com">
              Explore Here
            </UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/cta_three.webp"
            alt=""
            className="absolute inset-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
