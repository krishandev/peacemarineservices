import MarineWorkVideos from "./MarineWorkVideos";

export default function MarineWorkSection() {
  return (
    <section
      aria-labelledby="marine-work-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Marine Work
        </p>
        <h2
          id="marine-work-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          See PMS Marine Services in Action
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Watch selected PMS marine inspection and surveying work. Videos load
          only after you choose to play them.
        </p>
        <div className="mt-8">
          <MarineWorkVideos />
        </div>
      </div>
    </section>
  );
}
