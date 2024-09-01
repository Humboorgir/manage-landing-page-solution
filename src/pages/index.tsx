import Navbar from "../components/navbar";

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

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center mt-20">
        <h2 className="font-bold text-center text-slate-800 text-3xl md:text-4xl mb-24">
          What they've said
        </h2>

        <div className="bg-gray-200/40 relative w-full max-w-xl text-center px-6 pb-10 pt-14 mb-8">
          <img
            className="absolute bottom-[calc(100%-40px)] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full"
            src="/avatar-anisha.png"
            alt="user avatar"
          />

          <h3 className="text-slate-800 text-lg font-bold mb-3">Anisha Li</h3>
          <p className="text-slate-500 text-sm">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="mr-1 h-2 w-2 rounded-full border border-orange-500" />
          <div className="mr-1 h-2 w-2 rounded-full bg-orange-500" />
          <div className="mr-1 h-2 w-2 rounded-full border border-orange-500" />
          <div className="h-2 w-2 rounded-full border border-orange-500" />
        </div>

        <button className="mb-8 md:mb-40 font-medium text-sm py-3 px-7 text-white rounded-full bg-orange-600">
          Get Started
        </button>
      </div>

      <div className="bg-orange-600">
        <div className="max-w-screen-xl mx-auto py-20 px-6 flex flex-col md:flex-row md:justify-between items-center">
          <h2 className="mb-7 text-4xl text-center md:text-left font-bold text-white max-w-lg">
            Simplify how your team works today.
          </h2>
          <button className="font-medium text-sm py-3 px-7 text-orange-600 bg-white rounded-full">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full bg-[#1E1E26]">
        <div className="max-w-screen-xl px-4 flex flex-col mx-auto items-center pt-12 pb-8">
          <div className="flex items-center mb-10">
            <input
              className="mr-3 w-full placeholder:text-slate-500 placeholder:text-sm py-3 px-5 rounded-full"
              placeholder="Updates in your inbox..."
            />
            <button className="text-sm py-3 px-7 text-white font-medium rounded-full bg-orange-600">
              GO
            </button>
          </div>

          <div className="text-slate-200 text-sm grid grid-cols-[1fr,1fr] w-full mb-10">
            <div className="flex flex-col items-stretch">
              <a className="py-1.5 pl-[25%]">Home</a>
              <a className="py-1.5 pl-[25%]">Pricing</a>
              <a className="py-1.5 pl-[25%]">Products</a>
              <a className="py-1.5 pl-[25%]">About us</a>
            </div>
            <div className="flex flex-col items-stretch">
              <a className="py-1.5 pl-[25%]">Careers</a>
              <a className="py-1.5 pl-[25%]">Community</a>
              <a className="py-1.5 pl-[25%]">Privacy Policy</a>
            </div>
          </div>

          <div className="flex items-center justify-around w-full max-w-xs mb-14">
            <img className="h-7 w-7" src="/icon-facebook.svg" alt="facebook" />
            <img className="h-7 w-7" src="/icon-youtube.svg" alt="youtube" />
            <img className="h-7 w-7" src="/icon-twitter.svg" alt="twitter" />
            <img
              className="h-7 w-7"
              src="/icon-pinterest.svg"
              alt="pinterest"
            />
            <img
              className="h-7 w-7"
              src="/icon-instagram.svg"
              alt="instagram"
            />
          </div>

          <img className="mb-10" src="/logo-white.svg" alt="logo" />

          <span className="text-neutral-400 text-xs">
            Copyright 2024. All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
