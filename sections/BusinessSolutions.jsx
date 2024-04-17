import Image from "next/image";

const BusinessSolutions = () => {
  return (
    <div className=" flex justify-center gap-32 lg:py-20 sm:py-24 py-32">
      <div className="flex flex-col items-center max-w-md pt-18">
        <h1 className="text-white sm:text-9xl text-5xl font-bold text-outline_white">BUSINESS</h1>
        <h1 className="text-white sm:text-9xl text-5xl font-bold py-4 text-outline_white pb-6">SOLUTIONS</h1>
    
        <p className="text-slate-700 lg:mb-4 sm:mb-6 mb-10 text-lg sm:opacity-70 text-center">Excess waste? Let us handle all the work, and turn wastes to energy. A substainable solution that repurpose wastes and creates a long-term solution for you and your business. Modern solutions designed for you.</p>
      
        <p className="bg-white text-special_h px-10 rounded-xl text-2xl py-2 font-bold ">SERVICES</p>
      
    </div>
      <div className="hidden lg:block">
      <Image
      className=""
      height={569}
      width={469}
      src={"/assets/images/business/Image.png"}
      />
      </div>
    </div>
  )
}

export default BusinessSolutions
