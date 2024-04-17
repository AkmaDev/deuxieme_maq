import Image from "next/image";

const Recycling = () => {
  return (
    <div className="h-max flex flex-row justify-between pb-20">
      <div className="flex flex-row relative pt-28">      
          <Image
          src={"/assets/images/learning/Shape gauche.png"}
          alt=""
          className="hidden lg:block lg:z-0 lg:pt-10 lg:mt-56 lg:pr-36"
          width={364}
          height={395}/>
      <Image
          src={"/assets/images/learning/image.png"}
          alt=""
          className="hidden md:block lg:absolute lg:pl-2 lg:z-10 lg:ml-16"
          width={486}
          height={678}/>
      </div>

      <div className="pl-7 flex flex-col max-w-lg lg:ml-32 sm:pl-10 pt-24 sm:pt-28 items-start">
        <h1 className="text-special_h text-7xl sm:text-8xl font-bold max-w-38">Learning How to Recycle</h1>
        <p className="py-6">PH waste management got everything you need when it comes to disposing of your waste easily. We offer reliable recycling and waste pick-up at your doorstep. Simply chedule on our website today!</p>
        <p className="text-white bg-special_h px-8 rounded-xl text-2xl py-2  ">GET STARTED</p>
      </div>
      <div>
      <Image
          src={"/assets/images/learning/Shape droit.png"}
          alt=""
          className="hidden sm:block pb-10 "
          width={199}
          height={319}/>
      </div>
    </div>
  )
}

export default Recycling
