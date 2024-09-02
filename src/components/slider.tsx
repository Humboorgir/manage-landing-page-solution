import { useEffect, useRef, useState } from "react";
import Button from "./button";

const Slider = () => {
  const testimonials = [
    {
      name: "Anisha Li",
      message: `Manage has supercharged our team’s workflow. The ability to maintain 
            visibility on larger milestones at all times keeps everyone motivated.`,
      avatar: "/avatar-anisha.png",
    },
    {
      name: "Ali Bravo",
      message: `We have been able to cancel so many other subscriptions since using 
            Manage. There is no more cross-channel confusion and everyone is much more focused.`,
      avatar: "/avatar-ali.png",
    },
    {
      name: "Richard Watts",
      message: `Manage allows us to provide structure and process. It keeps us organized 
            and focused. I can’t stop recommending them to everyone I talk to!`,
      avatar: "/avatar-richard.png",
    },
    {
      name: "Shanai Gough",
      message: `Their software allows us to track, manage and collaborate on our projects 
            from anywhere. It keeps the whole team in-sync without being intrusive.`,
      avatar: "/avatar-shanai.png",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<null | number>(null);
  const timeoutRef = useRef<null | number>(null);
  const slideContainer = useRef<HTMLDivElement>(null);

  function calculateTranslateX(activeSlide: number) {
    const base = 8;
    const basePercentage = 25;

    return `calc(-${basePercentage * activeSlide}% - ${base * activeSlide}px)`;
  }

  function slide() {
    setActiveSlide((prev) => {
      if (prev == testimonials.length - 1) return 0;
      return prev + 1;
    });
  }

  useEffect(() => {
    if (!slideContainer.current) return;
    slideContainer.current.style.transform = `translate(${calculateTranslateX(
      activeSlide
    )}, 0)`;
  }, [activeSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      slide();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center mt-20">
      <h2 className="font-bold text-center text-slate-800 text-3xl md:text-4xl mb-24">
        What they've said
      </h2>

      <div
        className="flex overflow-x-hidden items-center
        md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
        pt-[40px] bg-gradient-to-r max-w-screen-xl w-[1px] min-w-full"
      >
        {/* Desktop version  */}

        {/* return this twice */}
        {[0, 0].map(() => {
          return (
            <div className="hidden md:flex items-stretch space-x-8 shrink-0 animate-scroll first-of-type:pl-8">
              {testimonials.map((testimonial) => {
                return (
                  <div className="bg-gray-200/40 relative shrink-0 max-w-[80vw] w-[525px] text-center px-8 pb-10 pt-16 mb-8">
                    <img
                      className="absolute bottom-[calc(100%-40px)] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full"
                      src={testimonial.avatar}
                      alt="user avatar"
                    />

                    <h3 className="text-slate-800 text-lg font-bold mb-3 md:mb-5">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-600/70 leading-relaxed">
                      “{testimonial.message}”
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* mobile version  */}
        <div
          className="flex items-stretch space-x-8 first-of-type:ml-0 last-of-type:mr-0 shrink-0 mb-8 transition-all duration-300"
          ref={slideContainer}
        >
          {testimonials.map((testimonial) => {
            return (
              <div className="bg-gray-200/40 relative shrink-0 max-w-[calc(95vw-32px)] w-[800px] text-center px-8 pb-10 pt-16">
                <img
                  className="absolute bottom-[calc(100%-40px)] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full"
                  src={testimonial.avatar}
                  alt="user avatar"
                />

                <h3 className="text-slate-800 text-lg font-bold mb-3 md:mb-5">
                  {testimonial.name}
                </h3>
                <p className="text-slate-600/70 leading-relaxed">
                  “{testimonial.message}”
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center mb-10 md:invisible">
        {testimonials.map((testimonial, i) => {
          return (
            <div
              aria-label="select slide"
              role="button"
              onClick={() => {
                setActiveSlide(i);

                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  // pause interval (slide show) for 3s when user interacts
                  timeoutRef.current = setTimeout(() => {
                    intervalRef.current = setInterval(() => {
                      slide();
                    }, 5000);
                  }, 3000);
                }
              }}
              className="last-of-type:mr-0 h-3 w-3"
            >
              <div
                className="h-2 w-2 border border-primary rounded-full"
                style={{
                  backgroundColor: `${
                    activeSlide == i ? "#F3613C" : "transparent"
                  }`,
                }}
              />
            </div>
          );
        })}
      </div>

      <Button className="mb-8 md:mb-40 font-medium">Get Started</Button>
    </div>
  );
};

export default Slider;
