import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-3xl font-extrabold mb-4 drop-shadow-md shadow-white">
          Unleash the Power of Cold - Your One-Stop Shop for Dry Ice Products
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-white">
          Welcome to the coolest store on the web. Whether you&apos;re in need
          of dry ice slabs, pellets, blocks, or high-quality blasters and
          accessories, we&apos;ve got you covered. Explore our range and let the
          power of dry ice transform your cleaning routine
        </p>
        {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo of dry ice pellets"
        className="absolute inset-0 rounded-b-3xl"
        draggable="false"
      />
    </div>
  )
}

export default Hero
