import Image from "next/image";

const Services = () => {
  return (
    
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center">
            <h1 className="text-5xl text-special sm:text-8xl z-10">OUR SERVICES</h1>
            <Image
          className="absolute z-0 -rotate-12 sm:left-20 sm:-top-20 -top-10"
          height={362}
          width={598}
          src={"/assets/images/ovale_3.png"}/>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-8 md:gap-y-20 pt-4">
        <div className="flex flex-col p-6 text-lg items-center gap-y-8 md:p-6 sm:p-8">
          <img
          className="select-none"
          src={"/assets/images/service/plastic.png"}/>
          <p className="md:text-xl sm:text-lg tracking-wide lg:w-3/4 text-center">Environmental Service that can help you with organizing and properly disposing your waste.</p>
        </div>
          <div className="flex flex-col p-6 text-lg items-center gap-y-8 md:p-6 sm:p-8">
          <img
          className="select-none"
          src={"/assets/images/service/volunteers1.png"}/>
          <p className="md:text-xl sm:text-lg tracking-wide lg:w-3/4 text-center">Environmental Service that can help you with organizing and properly disposing your waste.</p>
          </div>

          <div className="flex flex-col p-6 text-lg items-center gap-y-8 md:p-6 sm:p-8">
          <img
          className="select-none"
          src={"/assets/images/service/volunteers2.png"}/>
          <p className="md:text-xl sm:text-lg tracking-wide lg:w-3/4 text-center">Environmental Service that can help you with organizing and properly disposing your waste.</p>
          </div>
          <div className="flex flex-col p-6 text-lg items-center gap-y-8 md:p-6 sm:p-8">
          <img
          className="select-none"
          src={"/assets/images/service/dechet.png"}/>
          <p className="md:text-xl sm:text-lg tracking-wide lg:w-3/4 text-center">Environmental Service that can help you with organizing and properly disposing your waste.</p>
          </div>
          <div className="flex flex-col p-6 text-lg items-center gap-y-8 md:p-6 sm:p-8">
          <img
          className="select-none"
          src={"/assets/images/service/image-5.png"}/>
          <p className="md:text-xl sm:text-lg tracking-wide lg:w-3/4 text-center">Environmental Service that can help you with organizing and properly disposing your waste.</p>
          </div>
          <div className="flex flex-col p-6 text-lg items-center gap-y-8 md:p-6 sm:p-8">
          <img
          className="select-none"
          src={"/assets/images/service/image-6.png"}/>
          <p className="md:text-xl sm:text-lg tracking-wide lg:w-3/4 text-center">Environmental Service that can help you with organizing and properly disposing your waste.</p>
          </div>
        </div>  
      </div>

  )
}

export default Services
