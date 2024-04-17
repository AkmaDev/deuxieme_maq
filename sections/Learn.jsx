import Image from "next/image";

const Learn = () => {
  return (
    <div className=" sm:h-screen sm:flex flex-row justify-between py-10 sm:py-0">
        <div className="flex flex-row relative ">      
          <Image
          src={"/assets/images/recyclage/Shape.png"}
          alt=""
          className=" hidden lg:block lg:z-0 lg:pt-6 lg:pb-72 lg:pr-10"
          width={319}
          height={319}/>
      <Image
          src={"/assets/images/recyclage/image.png"}
          alt=""
          className="hidden lg:block lg:absolute lg:z-10 lg:ml-20 lg:pt-36"
          width={569}
          height={570}/>
      </div>
      <div className="flex flex-col justify-end items-end max-w-lg sm:pb-28 pb-10 gap-14 px-8">
        <div>
          <h1 className="text-6xl text-special pb-4">Recycling Pickup</h1>
          <p>PH waste management got everything you need when it comes to disposing of your waste easily. We offer reliable recycling and waste pick up at your doorstep. Simply schedule on our website today!</p>
        </div>
        <div>
          <h1 className="text-6xl text-special pb-4">Business Waste</h1>
          <p>Excess waste? Let us handle all the work, and turn wastes to energy. A sustainable solution that repurpose wastes and creates a long term solution for you and your business. Modern solutions designed for you.</p>
        </div>
      </div>
      <div className="flex flex-col-reverse">
      <Image
          src={"/assets/images/recyclage/shape-1.png"}
          alt=""
          className="hidden sm:block sm:ml-0 ml-36"
          width={199}
          height={319}/>
      </div>
    </div>
  )
}

export default Learn
