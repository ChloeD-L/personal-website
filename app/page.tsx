import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-[#fefae0] text-[#283618] h-screen snap-y snap-mandatory 
    overflow-scroll z-0" >
      {/* <h1>Chloe's portfolio</h1>
      <p>Chloe's personal portfolio</p> */}

      <Header />
      <section id="hero" className="snap-center">
        <Hero />

      </section>
    </div>
  );
}
