import portrait from "../assets/deepak-portrait.jpg";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-2 gap-24 items-center">
        <div className="border border-frame p-6">
          <img src={portrait} alt="Deepak Joshi" />
        </div>

        <div>
          <h1 className="font-heading text-5xl tracking-widest leading-tight">
            DEEPAK <br /> JOSHI
          </h1>

          <p className="mt-4 text-muted uppercase tracking-wider text-sm">
            Poet · Author
          </p>

          <button className="mt-8 border border-text px-6 py-2 rounded">
            Get in touch
          </button>

          <p className="mt-8 text-muted max-w-md leading-relaxed">
            I am a speculative fiction poet, whose themes center
            around the relation between love and nature.
          </p>
        </div>
      </div>
    </section>
  );
}
