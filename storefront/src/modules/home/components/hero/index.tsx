import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className=" text-white absolute inset-0 z-10 flex flex-col justify-center items-center medium:items-start medium:justify-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-5xl font-semibold leading-[4rem] mb-4 drop-shadow-md shadow-[blue] max-w-[50rem]">
          Unleash the <span className="text-blue-200">Power of Cold</span>{" "}
          <br />
          Your One-Stop Shop for Dry Ice Products
        </h1>
        <p className="text-xl font-medium max-w-[40rem] mb-6 drop-shadow-md shadow-[blue]">
          Welcome to the coolest store on the web. Whether you&apos;re in need
          of dry ice slabs, pellets, blocks, or high-quality blasters and
          accessories, we&apos;ve got you covered
        </p>
        <UnderlineLink href="#start">Let&apos;s go </UnderlineLink>
      </div>
      <div className="gradientBackground absolute inset-0 rounded-b-3xl z-0"></div>
      <Image
        src="/hero.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo of dry ice pellets"
        className="absolute inset-0 rounded-b-3xl z-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
