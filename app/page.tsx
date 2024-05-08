import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Image from "next/image";


const Home = () => {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pn-24 pt-10 lg:grid-cols-3
        sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52
        ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4
          ">
            <div className="relative mx-auto text-center lg:text-left
            flex flex-col items-center lg:items-start">
              <div className="absolute 2-28 left-0 top-20 hidden lg:block">
                <Image
                className="w-full"
                src="/images/snake-1.png"
                alt="logo"
                width={100}
                height={100}
                />
              </div>
              <h1 className="relative w-fit tracking-tight 
              text-balance mt-16 font-bold !leading-tight text-gray-900 
              text-5xl md:text-6xl lg:text-7xl">Your image on a <span 
              className="bg-green-600 px-2">
                Custom</span> Phone Case</h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

export default Home
