import portrait from "../assets/deepak-portrait.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* IMAGE */}
        <div className="border border-frame p-6">
          <img
            src={portrait}
            alt="Deepak Joshi"
            className="w-full object-cover grayscale"
          />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="font-heading text-5xl tracking-widest leading-tight">
            DEEPAK <br /> JOSHI
          </h1>

          <p className="mt-4 text-muted uppercase tracking-wider text-sm">
            Poet · Author
          </p>

          {/* 👇 CONNECTED BUTTON */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-8 border border-text px-6 py-2 rounded hover:bg-frame/30 transition"
          >
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
