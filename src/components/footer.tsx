const Footer = () => {
  return (
    <div className="w-full py-2 md:py-4 md:pb-6 bg-[#1E1E26]">
      <div className="max-w-screen-xl px-4 flex flex-col md:grid md:grid-cols-3 mx-auto items-center pt-12 pb-8">
        <div className="md:row-start-1 md:justify-end md:mb-auto md:col-start-3 flex items-center mb-10">
          <input
            className="mr-3 w-full max-w-[220px] placeholder:text-slate-500 placeholder:text-sm py-3 px-5 rounded-full"
            placeholder="Updates in your inbox..."
          />
          <button className="text-sm py-3 px-7 text-white font-medium rounded-full bg-orange-600">
            GO
          </button>
        </div>

        <div
          className="md:col-start-2 md:row-start-1 text-slate-200 text-sm grid grid-cols-[1fr,1fr] w-full mb-10
        md:mb-0 md:mr-44"
        >
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

        <div
          className="flex flex-col md:flex-col-reverse items-center w-full
        md:row-start-1 md:col-start-1"
        >
          <div className="flex items-center justify-around w-full max-w-xs mb-14 md:mb-0 md:w-fit md:space-x-3">
            <img
              className="md:h-5 md:w-5 h-7 w-7"
              src="/icon-facebook.svg"
              alt="facebook"
            />
            <img
              className="md:h-5 md:w-5 h-7 w-7"
              src="/icon-youtube.svg"
              alt="youtube"
            />
            <img
              className="md:h-5 md:w-5 h-7 w-7"
              src="/icon-twitter.svg"
              alt="twitter"
            />
            <img
              className="md:h-5 md:w-5 h-7 w-7"
              src="/icon-pinterest.svg"
              alt="pinterest"
            />
            <img
              className="md:h-5 md:w-5 h-7 w-7"
              src="/icon-instagram.svg"
              alt="instagram"
            />
          </div>

          <img className="md:mb-20" src="/logo-white.svg" alt="logo" />
        </div>

        <span className="mt-10 md:ml-auto md:row-start-1 md:mt-auto md:col-start-3 text-neutral-400 text-xs">
          Copyright 2024. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
