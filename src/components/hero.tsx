import Button from "./button";

const Hero = () => {
  return (
    <section
      className="w-full grid grid-cols-1 justify-between md:grid-cols-[auto,auto]
    max-w-screen-xl mx-auto px-6 mb-20"
    >
      <img
        className="w-full max-w-xs mx-auto md:max-w-lg md:min-w-[400px] "
        src="/illustration-intro.svg"
        alt="introduction illustration"
      />

      <div
        className="mx-auto md:mx-none md:col-start-1 md:min-w-[300px] md:row-start-1 text-center md:text-left
   flex flex-col items-center md:items-start max-w-md md:max-w-lg justify-center"
      >
        <h1 className="text-[clamp(34px,6vw,56px)] leading-[1.2] md:leading-[1] font-bold text-slate-800 mb-5 md:mb-6">
          Bring everyone together to build better products.
        </h1>
        <p className="text-slate-500 md:text-lg mb-6 md:mb-8 max-w-[340px]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;
