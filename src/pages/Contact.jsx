// src/pages/Contact.jsx
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
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl text-center mb-16 md:mb-20">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
          <div>
            <label className="block font-heading mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none focus:border-text"
            />
          </div>

          <div>
            <label className="block font-heading mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none focus:border-text"
            />
          </div>

          <div>
            <label className="block font-heading mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-frame bg-bg px-4 py-3 resize-none focus:outline-none focus:border-text"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="border border-text px-8 py-3 font-heading text-sm hover:bg-frame/30 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="text-green-600 text-sm pt-4">
              Message sent successfully ✨
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm pt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-muted text-sm pt-6">
            Thank you for visiting.
          </p>
        </form>

        {/* IMAGE */}
        <div className="border border-frame p-4 md:p-6">
          <img
            src={contactImage}
            alt="Notebook and pen"
            className="w-full h-[280px] md:h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
