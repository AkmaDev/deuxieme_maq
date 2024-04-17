

const NavFooter = () => {
  return (
    <div className="bg-special_recycle relative">
     
      <div className="md:hidden text-special flex flex-col md:flex-row gap-6 pl-4 py-6">
      <div className="lg:pl-20">
                  <p className="border-special border-b-2 text-xl">Our Compagny</p>
                  <p className="font-light">What We Do</p>
                  <p className="font-light">How We Can Help</p>
                  <p className="font-light">Our Team</p>
                  <p className="font-light">Press Releases</p>
                  <p className="font-light">Our Works</p>
        </div>
        <div className="lg:pl-72 ">
                  <p className="border-special border-b-2 text-xl">Resources</p>
                  <p className="font-light">Waste to energy</p>
                  <p className="font-light">Home Waste Recycling</p>
                  <p className="font-light">Business Solutions</p>
                  <p className="font-light">Home Solutions</p>
        </div>
        <div className="lg:pl-60 "> 
                  <p className="text-xl border-special border-b-2">Get In Touch</p>
                  <p className="font-light">Careers</p>
                  <p className="font-light">Plans & Pricing</p>
                  <p className="font-light">Patnerships</p>
                  <p className="font-light">Social Media</p>
        </div>
        <div className="lg:pl-72">
                  <p className="text-xl border-special border-b-2">Legal</p>
                  <p className="font-light">Terms & Conditions</p>
                  <p className="font-light">Privacy Policy</p>
                  <p className="font-light">Copyright</p>
                  <p className="font-light">Cookies Policy</p>
        </div>
      </div>

      <hr className="hidden md:block absolute w-full top-14 z-10 bg-special border-2 border-special" />

      <div className="hidden md:flex justify-center text-special lg:gap-40 md:gap-28 px-6">

          <div className=" z-0">
            <p className="text-2xl font-bold whitespace-nowrap">Our Compagny</p>
            <div className="  lg:mt-8 pt-6 md:pt-14 lg:pt-6">
              <p>What We Do</p>
              <p>How We Can Help</p>
              <p>Our Team</p>
              <p>Press Releases</p>
              <p>Our Works</p>
            </div>            
          </div>


        <div className=" z-0">
            <p className="text-2xl font-bold">Resources</p>     
            <div className="  lg:mt-14 lg:pt-0 md:pt-14">
              <p>Waste to energy</p>
              <p>Home Waste Recycling</p>
              <p>Business Solutions</p>
              <p>Home Solutions</p>
            </div>
        </div>
          
        <div className=" z-0">
          <p className="text-2xl font-bold whitespace-nowrap">Get In Touch</p>
          <div className="  lg:pt-10 lg:mt-4 md:pt-14">
            <p>Careers</p>
            <p>Plans & Pricing</p>
            <p>Patnerships</p>
            <p>Social Media</p>
          </div>
        </div>
        
        <div className=" z-0">
          <p className="text-2xl font-bold lg:">Legal</p>
          <div className="   lg:mt-14 lg:pt-0 md:pt-14">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Copyright</p>
            <p>Cookies Policy</p>
          </div>
        </div>

      </div>
        <p className="text-special font-semibold text-lg py-8 pl-4 lg:pl-44 sm:pl-16">COPYRIGHT 2021 PH WASTE MANAGEMENT ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default NavFooter
