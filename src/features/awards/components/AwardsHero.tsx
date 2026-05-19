export function AwardsHeroSection() {
  return (
    <section
      className="
        w-full bg-black 
        flex items-end justify-center
        rounded-b-4xl min-h-[40vh]
        lg:min-h-[60vh] lg:rounded-b-5xl
        px-4 md:px-10 xl:px-14
        pt-24 md:pt-28
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('/global-search-awards.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center 45%",
      }}
    >
      <div className="relative py-20">
        <h1
          className="
            text-white
            text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-10xl 2xl:text-11xl
             font-bold tracking-tight uppercase
          "
        >
          Our Awards
        </h1>
      </div>
    </section>
  );
}
