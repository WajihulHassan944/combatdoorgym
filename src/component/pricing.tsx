export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Turn Any Doorway Into a Training Zone",
      price: "$19",
      description:
        "Most people overlook how much potential a simple doorway has. With the COMBAT DOOR GYM, that overlooked space becomes your personal strength and conditioning zone. You don’t need to dedicate an entire room to fitness anymore. Just pick a door, install the system, and you’ve got a fight-ready setup in minutes. It’s a clever, low-footprint solution for high-performance training.",
      buttonText: "JOIN NOW",
      classes: "*Monthly 20 Classes",
      bgImage: "url('/images/home-pricing-table-1.jpg')",
    },
    {
      title: "No Bolts, No Damage, No Fuss",
      price: "$59",
      description:
        "The idea of drilling into your walls or setting up something permanent is a big turn-off for renters and apartment dwellers. This system avoids all that. It securely mounts without leaving marks, holes, or lasting damage. That means you can use it at home, take it to a friend’s place, or even set it up in a hotel room. It offers the kind of freedom most gym equipment can't.",
      buttonText: "JOIN NOW",
      classes: "*Monthly 20 Classes",
      bgImage: "url('/images/home-pricing-table-1.jpg')",
    },
    {
      title: "All the Gear You Need in One Place",
      price: "$100",
      description:
        "You don’t have to piece together different equipment or figure out how to attach things with zip ties. The COMBAT DOOR GYM has dedicated spots for heavy bags, resistance bands, and other gear. It’s organized, balanced, and secure. You won’t be chasing bands across the floor or worrying about a bag falling mid-combo. Everything stays where it should, so you can focus on your workout.",
      buttonText: "JOIN NOW",
      classes: "*Monthly 20 Classes",
      bgImage: "url('/images/home-pricing-table-1.jpg')",
    },
    {
      title: "Compact But Complete",
      price: "$100",
      description:
        "It might be doorway-sized, but the training possibilities are endless. You can hit upper body, lower body, core, cardio, and even recovery drills without needing a barbell or big machines. This is functional, fighter-approved equipment built to make you faster, stronger, and more agile without cluttering your space.",
      buttonText: "JOIN NOW",
      classes: "*Monthly 20 Classes",
      bgImage: "url('/images/home-pricing-table-1.jpg')",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#232526] to-[#1e1e1e] text-white py-16 relative">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#87c232] via-transparent to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            A Real Fight Camp 
            <span className="text-[#87c232]"> Setup—Minus the Commute</span>
          </h2>
          <p className="text-gray-300 mb-4 md:mb-8 text-sm md:text-base">
            Here’s the deal. You don’t need a full-blown garage gym to train
            like a pro. The COMBAT DOOR GYM turns any standard doorway into a
            compact home gym that feels like a mini fight camp. No need to
            bolt things into your walls. No need to drag around bulky weights
            or clear out your entire living room. Just hook it up, clip on
            what you need—heavy bags, resistance bands, or training gear—and
            get started.
          </p>
          <p className="text-gray-300 mb-0 md:mb-8 text-sm md:text-base">
            This setup isn’t just for boxers or MMA fighters. It’s for anyone
            craving a smarter way to train hard at home. Think strength work,
            cardio, conditioning, kickboxing, and functional movement.
            Everything you’d expect from top-tier home exercise equipment,
            without the price tag or space suck.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="group relative border border-[#87c232] p-6 md:p-10 rounded-2xl bg-[#232526] shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: plan.bgImage }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                    {plan.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {plan.description}
                  </p>
                </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
