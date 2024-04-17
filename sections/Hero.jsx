import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="flex flex-col items-start lg:pl-20 pl-10 ">
        <h1 className="py-4 text-special lg:text-8xl sm:text-8xl text-7xl pt-10">LET'S GET<br /> TO THE <span className="text-outline">DIRTY</span><br />BUSINESS.</h1>

          
          <div className="flex max-w-lg items-center">
            <h1 className="text-4xl -rotate-90 text-special font-bold " >UNO</h1>
            <p className="text-gray-800 text-sm ">PH waste management got everything you need when it comes to disposing of your waste easily. We offer reliable recycling and waste pick-up at your doorstep. Simply schedule on our website today! </p>
             
          </div>
          <p className="ml-2 sm:ml-0 text-white bg-special px-8 rounded-xl text-2xl py-2 my-5">LEARN MORE</p>
      </div>
      <div className="relative flex lg:pl-36 pt-10">
        
        <div className="hidden sm:block">
        <Image
          src={"/assets/images/accueil/image/photo.png"}
          alt=""
          className=""
          width={356}
          height={665}/>
      </div>
      <div className=" hidden lg:flex lg:flex-col-reverse ">
      <Image
          src={"/assets/images/ovale_1.png"}
          alt=""
          className="h-4/6"
          width={100}
          height={362}/>
      </div >
      
      <div className="hidden lg:block">
        <Image
          src={"/assets/images/assets/accueil/design/Shape.png"}
          alt=""
          className=""
          width={152}
          height={319}/>
      </div>
      </div>
      
    
      
    </div>
  )
}

export default Hero
