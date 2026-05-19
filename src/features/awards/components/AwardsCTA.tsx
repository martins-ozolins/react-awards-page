export function AwardsCTA() {
  return (
    <section
      className="relative min-h-[420px] lg:min-h-[480px] xl:min-h-[550px] 2xl:min-h-[650px] items-end flex bg-cover bg-center px-4 py-14 md:px-10 xl:px-14 rounded-t-4xl bg-gray-50"
      style={{ backgroundImage: "url('/wolfgang-team-meeting.avif')" }}
    >
      <div className="absolute inset-0 rounded-t-4xl bg-gradient-to-b from-black/20 to-black/70" />

      <div className="z-10 grid w-full gap-10 lg:grid-cols-[4fr_2fr] lg:items-end lg:border-t lg:border-white/40 lg:pt-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="text-xs font-bold tracking-widest uppercase text-white">
              Let's start a conversation
            </span>
          </div>

          <h2 className="text-brand-slime text-4xl md:text-6xl xl:text-7xl font-bold uppercase leading-none tracking-tight">
            What will world-leading look like for you?
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="text-white/80 text-base max-w-sm">
            Partner with a 6x Best Global Agency Winner that's as invested in
            your growth as you are.
          </p>

          <div className="flex items-center">
            <a
              href="https://www.wolfgangdigital.com/contact/"
              className="rounded-full border border-white bg-black/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/20"
            >
              Get in Touch
            </a>
            <img
              src="/cta-button-image.avif"
              alt=""
              aria-hidden="true"
              className="h-13 w-13 rounded-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
