const Footer = () => {
  return (
    <div className="w-full py-2 md:py-4 md:pb-6 bg-[#1E1E26]">
      <footer className="max-w-screen-xl px-4 flex flex-col md:grid md:grid-cols-3 mx-auto items-center pt-12 pb-8">
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
          {/* links  */}
          <ul className="flex flex-col items-stretch">
            {["Home", "Pricing", "Products", "About us"].map((label) => {
              return (
                <li>
                  <a className="block py-1.5 pl-[25%]" href="#">
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col items-stretch">
            {["Careers", "Community", "Privacy Policy"].map((label) => {
              return (
                <li>
                  <a className="block py-1.5 pl-[25%]" href="#">
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="flex flex-col md:flex-col-reverse items-center w-full
        md:row-start-1 md:col-start-1"
        >
          <div className="flex items-center justify-around w-full max-w-xs mb-14 md:mb-0 md:w-fit md:space-x-3">
            {[
              { src: "/icon-facebook.svg", alt: "facebook" },
              { src: "icon-youtube.svg", alt: "youtube" },
              { src: "/icon-twitter.svg", alt: "twitter" },
              { src: "/icon-pinterest.svg", alt: "pinterest" },
              {
                src: "/icon-instagram.svg",
                alt: "instagram",
              },
            ].map(({ src, alt }) => {
              return (
                <img className="md:h-5 md:w-5 h-7 w-7" src={src} alt={alt} />
              );
            })}
          </div>

          <img className="md:mb-20" src="/logo-white.svg" alt="logo" />
        </div>

        <span className="mt-10 md:ml-auto md:row-start-1 md:mt-auto md:col-start-3 text-neutral-400 text-xs">
          Copyright 2024. All Rights Reserved
        </span>
      </footer>
    </div>
  );
};

export default Footer;
