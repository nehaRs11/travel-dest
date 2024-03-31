"use client";
import Footer from "./components/Footer";
import HomeLanding from "./components/HomeLanding";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import TravelPoint from "./components/TravelPoint";
import TravelSection from "./components/TravelSection";

export default function Home() {
  return (
    <body className="flex min-h-screen flex-col container bg-white mx-0 py-5 relative overflow-hidden">
      <div className="hidden h-full md:block "><TravelSection />
        <HomeLanding />
        <Services />
        <TravelPoint />
        <Subscribe />
        <Footer />
      </div>

      <div className="md:hidden">
        <TravelSection />
        <div className=" grid grid-cols-2 card-grid container ml-80">
          <HomeLanding />
          <Services />
          <div style={{ display: 'flex' }}>
            <Subscribe />
            <TravelPoint />
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
}
