import AboutManage from "../components/about-manage";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <section className="max-w-screen-xl mx-auto flex flex-col items-center px-6 pt-10 mb-20">
          <Navbar />

          {/* background pattern  */}
          <div
            className="-z-10 top-0 h-full max-w-lg md:max-w-none w-full right-0 absolute bg-[url(/bg-tablet-pattern.svg)]
            bg-[size:clamp(420px,calc(35vmin+270px),500px)]
         md:bg-[size:clamp(420px,80vmin,700px)] bg-no-repeat bg-[position:top_-30%_right_calc(1vmin-130px)]
         sm:bg-[position:top_-30%_right_calc(5vmin-70px)]
          md:bg-[position:calc(100%+150px)_-100px]"
          />

          <Hero />
        </section>
      </div>

      <div
        className="w-full md:bg-[url(/bg-tablet-pattern.svg)]
        bg-[size:800px] bg-no-repeat bg-[position:-450px_260px]"
      >
        <AboutManage />

        <Slider />
      </div>

      <div
        className="bg-primary md:bg-[url(/bg-simplify-section-desktop.svg)]
        md:bg-[position:260px_-110px] bg-no-repeat 
        bg-[url(/bg-simplify-section-mobile.svg)]
        bg-[position:0_10px]"
      >
        <div className="max-w-screen-xl mx-auto py-24 md:py-14 px-6 flex flex-col md:flex-row md:justify-between items-center">
          <h2 className="mb-7 text-[38px] md:text-[42px] leading-[50px] text-center md:text-left font-bold text-white max-w-lg">
            Simplify how your team works today.
          </h2>
          <button className="font-bold text-xs py-3.5 px-8 text-orange-600 bg-white rounded-full">
            Get Started
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
