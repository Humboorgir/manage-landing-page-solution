import AboutManage from "../components/about-manage";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SimplifyYourWorkToday from "../components/simplify-your-work-today";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      {/* background pattern  */}
      <div
        className="-z-10 top-0 h-full max-w-lg md:max-w-none w-full right-0 absolute bg-[url(/bg-tablet-pattern.svg)]
        bg-[size:clamp(420px,calc(35vmin+270px),500px)] md:bg-[size:clamp(420px,80vmin,700px)] bg-no-repeat 
        bg-[position:top_-30%_right_calc(1vmin-130px)] sm:bg-[position:top_-30%_right_calc(5vmin-70px)]
        md:bg-[position:calc(100%+150px)_-100px]"
        aria-hidden
      />

      <Navbar />
      <main>
        <Hero />

        <div className="w-full md:bg-[url(/bg-tablet-pattern.svg)] bg-[size:800px] bg-no-repeat bg-[position:-450px_260px]">
          <AboutManage />

          <Slider />
        </div>

        <SimplifyYourWorkToday />
      </main>
      <Footer />
    </>
  );
};

export default Home;
