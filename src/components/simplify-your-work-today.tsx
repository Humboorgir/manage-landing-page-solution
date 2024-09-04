const SimplifyYourWorkToday = () => {
  return (
    <section
      className="bg-primary md:bg-[url(/bg-simplify-section-desktop.svg)] md:bg-[position:260px_-110px]
       bg-no-repeat bg-[url(/bg-simplify-section-mobile.svg)] bg-[position:0_10px]"
    >
      <div className="max-w-screen-xl mx-auto py-24 md:py-14 px-6 flex flex-col md:flex-row md:justify-between items-center">
        <h2 className="mb-7 text-[38px] md:text-[42px] leading-[50px] text-center md:text-left font-bold text-white max-w-lg">
          Simplify how your team works today.
        </h2>
        <button className="font-bold text-xs py-3.5 px-8 text-orange-600 bg-white rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default SimplifyYourWorkToday;
