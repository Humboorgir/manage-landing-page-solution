import Footer from "../components/footer";
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
         bg-[size:max(90vmin,450px)] bg-no-repeat bg-[position:top_-200px_right_-160px] md:bg-[position:calc(100%+150px)_-100px]"
          />

          <div className="w-full grid grid-cols-1 justify-between md:grid-cols-[auto,auto] mb-16">
            <img
              className="w-full max-w-xs mx-auto md:max-w-lg md:min-w-[400px] "
              src="/illustration-intro.svg"
            />

            <div
              className="mx-auto md:mx-none md:col-start-1 md:min-w-[300px] md:row-start-1 text-center md:text-left
           flex flex-col items-center md:items-start max-w-md md:max-w-lg justify-center"
            >
              <h1 className="text-[clamp(30px,6vw,56px)] leading-[1] font-bold text-slate-800 mb-5 md:mb-6">
                Bring everyone together to build better products.
              </h1>
              <p className="text-slate-500 md:text-lg mb-6 md:mb-8 max-w-[340px]">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button className="text-sm py-3 px-7 text-white rounded-full bg-orange-600">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      <div
        className="w-full md:bg-[url(/bg-tablet-pattern.svg)]
        bg-[size:800px] bg-no-repeat bg-[position:-450px_260px]"
      >
        <section className="grid grid-cols-[auto] md:grid-cols-[auto,auto] justify-between max-w-screen-xl mx-auto px-6">
          <div className="text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-[28px] md:text-4xl max-w-[500px] leading-10 mb-3.5 md:mb-5 text-slate-800 font-bold">
              What's different about Manage?
            </h2>
            <p className="text-slate-500 mb-16 max-w-[340px] mx-auto md:mx-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="flex flex-col items-center md:max-w-xl">
            {[
              {
                badge: "01",
                title: "Track company-wide progress",
                content: `See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone leave all the way done to the
              smallest details. Never lose sight of the bigger picture again.`,
              },
              {
                badge: "02",
                title: "Advanced built-in reports",
                content: `Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build the reports you
              need to keep key stakeholders informed.`,
              },
              {
                badge: "03",
                title: "Everything you need in one place",
                content: `Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.`,
              },
            ].map(({ badge, title, content }) => {
              return (
                <div className="max-w-screen-xl pl-4 w-full mb-20">
                  <div className="md:mb-3 flex items-center bg-orange-200/30 md:bg-transparent rounded-l-full w-full mb-2">
                    <div className="bg-orange-500 rounded-full py-1.5 px-5 text-white font-bold">
                      {badge}
                    </div>
                    <span className="pl-3 font-bold text-sm md:text-lg py-1.5">
                      {title}
                    </span>
                  </div>
                  <p className="md:pl-[74px] text-slate-500 pr-6 text-sm md:text-base">
                    {content}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <Slider />
      </div>

      <div
        className="bg-[#F3613C] md:bg-[url(/bg-simplify-section-desktop.svg)]
        md:bg-[position:260px_-110px] bg-no-repeat 
        bg-[url(/bg-simplify-section-mobile.svg)]
        bg-[position:0_10px]"
      >
        <div className="max-w-screen-xl mx-auto py-14 px-6 flex flex-col md:flex-row md:justify-between items-center">
          <h2 className="mb-7 text-[42px] leading-[50px] text-center md:text-left font-medium text-white max-w-lg">
            Simplify how your team works today.
          </h2>
          <button className="font-bold text-sm py-3 px-7 text-orange-600 bg-white rounded-full">
            Get Started
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
