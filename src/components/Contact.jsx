import { FiMail } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto container-px">
        <SectionTitle
          title="Contact"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />

        <form
          className="mt-8 glass glass-hover p-5 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);

            const subject = encodeURIComponent(
              `Portfolio inquiry from ${data.get("name")}`
            );

            const body = encodeURIComponent(
              `Message: ${data.get("message")}\n\nFrom: ${data.get(
                "name"
              )} (${data.get("email")})`
            );

            // ✅ send to your email
            window.location.href = `mailto:chiragrawal2468@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-300">Name</label>
              <input
                name="name"
                required
                placeholder="Enter your name"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-neutral-300">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Send your message"
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="btn btn-primary">
              <FiMail /> Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
