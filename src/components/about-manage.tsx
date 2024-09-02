const AboutManage = () => {
  const perks = [
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
  ];

  return (
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
        {perks.map(({ badge, title, content }) => {
          return (
            <div className="max-w-screen-xl pl-4 w-full mb-20">
              <div className="md:mb-3 flex items-center bg-primary/10 md:bg-transparent rounded-l-full w-full mb-2">
                <div className="bg-primary rounded-full py-1.5 px-5 text-white font-bold">
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
  );
};

export default AboutManage;
