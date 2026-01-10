import { useState } from "react";
import contactImage from "../assets/contact.jpg";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "8f8e8f11-be68-4a30-b715-a3adbd7057f4");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-24">

      {/* ================= HEADER ================= */}
      <header className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="font-heading text-4xl md:text-5xl mb-6">
          Let’s Connect
        </h1>

        <p className="text-muted leading-relaxed">
          I’m open to collaborations, publications, interviews,
          creative projects, and thoughtful conversations.
          If my writing resonates with you, feel free to reach out.
        </p>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* ===== FORM ===== */}
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">

          <div>
            <label className="block font-heading mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none focus:border-text"
            />
          </div>

          <div>
            <label className="block font-heading mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none focus:border-text"
            />
          </div>

          <div>
            <label className="block font-heading mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here…"
              className="w-full border border-frame bg-bg px-4 py-3 resize-none focus:outline-none focus:border-text"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="border border-text px-8 py-3 font-heading text-sm tracking-wider hover:bg-frame/30 transition disabled:opacity-50"
          >
            {loading ? "Sending…" : "Send message"}
          </button>

          {/* ===== STATUS ===== */}
          {status === "success" && (
            <p className="text-green-700 text-sm pt-4">
              Your message has been sent successfully.  
              I’ll get back to you soon ✨
            </p>
          )}

          {status === "error" && (
            <p className="text-red-700 text-sm pt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-muted text-sm pt-6">
            Thank you for taking the time to write.
          </p>
        </form>

        {/* ===== IMAGE + NOTE ===== */}
        <div className="space-y-8">
          <div className="border border-frame p-4 md:p-6">
            <img
              src={contactImage}
              alt="Writing desk with notebook and pen"
              className="w-full h-[280px] md:h-[420px] object-cover"
            />
          </div>

          <p className="text-muted text-sm leading-relaxed">
            I usually reply within a few days.  
            For publication or collaboration-related queries,
            please mention the subject clearly.
          </p>
        </div>

      </div>
    </section>
  );
}
