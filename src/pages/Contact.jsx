import contactImage from "../assets/contact.jpg"; // notebook + pen image

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      
      <h1 className="font-heading text-5xl text-center mb-20">
        Get In Touch
      </h1>

      <div className="grid grid-cols-2 gap-24 items-start">
        
        {/* LEFT: FORM */}
        <form className="space-y-10">
          
          <div>
            <label className="block font-heading mb-3">Name</label>
            <input
              type="text"
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-heading mb-3">Email</label>
            <input
              type="email"
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-heading mb-3">Message</label>
            <textarea
              rows="5"
              className="w-full border border-frame bg-bg px-4 py-3 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="border border-text px-8 py-3 font-heading"
          >
            Send message
          </button>

          <p className="text-muted mt-10">
            Thank you for visiting.
          </p>
        </form>

        {/* RIGHT: IMAGE */}
        <div className="border border-frame p-6">
          <img
            src={contactImage}
            alt="Notebook and pen"
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
