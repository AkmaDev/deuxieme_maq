import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-row h-max justify-between">
      <div>
        <Image
      className=""
      height={319}
      width={214}
      src={"/assets/images/about/design/Shape.png"}/>
      </div>
    <div className="flex flex-col h-max sm:pt-32 pt-5">
          <div className="flex flex-col items-center ">
      <h1 className="text-white text-2xl lg:text-5xl">WASTE MANAGEMENT</h1>
      <h1 className="text-white text-5xl lg:text-9xl sm:text-8xl font-bold py-4 ">ABOUT US</h1>
  
        <p className="text-slate-700 mb-4 text-lg opacity-70 text-center sm:w-1/2">Excess waste? Let us handle all the work, and turn wastes to energy. A substainable solution that repurpose wastes and creates a long-term solution for you and your business. Modern solutions designed for you.</p>
    
      <p className="bg-white text-special px-8 rounded-xl text-2xl py-2 font-bold ">LEARN MORE</p>
      
    </div>
    </div>
    <div className="flex flex-col-reverse">
      <Image
      className=""
      height={319}
      width={214}
      src={"/assets/images/about/design/Shape-1.png"}/>
    </div>
    </div>
    
    
  )
}

export default AboutUs
