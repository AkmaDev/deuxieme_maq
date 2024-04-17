import Image from "next/image";

const SubstainableSolutions = () => {
  return (
    <div className="h-max bg-special flex flex-row justify-between py-20  sm:gap-6">
      
      
        <div className="hidden sm:flex flex-col">
          <Image
          src={"/assets/images/solutions/image-1.png"}
          alt=""
          className="pt-10 lg:pl-10 justiyf"
          width={259}
          height={322}/>
        </div>
        <div className="sm:py-0 flex flex-col justify-center items-center sm:pt-20 sm:pb-20 lg:pt-32 sm:max-w-sm lg:max-w-lg">
          <h1 className="text-5xl lg:text-9xl sm:text-8xl text-white font-bold sm:pl-10 ">SUSTAINABLE</h1>
          <h1 className="text-5xl lg:text-9xl sm:text-8xl sm:pl-10 text-white font-bold sm:py-0 py-2">SOLUTIONS</h1>
          
          <p className="text-slate-800 sm:pl-8 text-center text-lg mt-4">PH waste management got everything you need when it comes to disposing of your waste easily. We offer reliable recycling and waste pick-up at your doorstep. Simply schedule on our website today!</p>
        </div>
        <div className="hidden sm:flex flex-col-reverse lg:pr-10">
        <Image
          src={"/assets/images/solutions/image-2.png"}
          alt=""
          className="pb-10"
          width={276}
          height={343}/>
        </div>
      
    </div>
  )
}

export default SubstainableSolutions
