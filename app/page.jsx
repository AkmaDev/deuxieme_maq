"use client"
import {Hero, AboutUs, BusinessSolutions, Learn, Recycling, Services, SubstainableSolutions } from "@/sections";


const Home = () => {

  return (
    <main className="relative overflow-hidden">
        <section className="bg-special_recycle">
        <Hero/>
        </section>
        <section className="h-max bg-special py-20">
        <AboutUs/>
        </section>
        <section className="bg-special_recycle py-10">
        <Services/>
        </section>
        <section className="bg-special">
        <BusinessSolutions/>
        </section>

        <section className="bg-special_recycle">
        <Recycling/>
        </section>
        <section className="">
        <SubstainableSolutions/>
        </section>
        <section className="bg-special_recycle">
        <Learn/>
        </section>
    </main>
  );
}

export default Home;




