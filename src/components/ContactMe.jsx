import { Mail, Linkedin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  const [state, handleSubmit] = useForm("xrbkjgwd");

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-[100px] py-12 sm:py-16 lg:py-20 bg-white" id="contact">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2">
          {state.succeeded ? (
            <p className="text-lg sm:text-xl font-medium text-green-600 font-spacegrotesk">
              ✅ Thanks for reaching out! I’ll get back to you soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 font-spacegrotesk text-[15px] sm:text-[16px] text-black"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1">How can I help?*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Something special"
                  className="border border-zinc-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#B9FF66] hover:text-black transition font-medium"
                >
                  {state.submitting ? "Sending..." : "Get In Touch"}
                </button>

                <a
                  href="https://www.linkedin.com/in/fayeza-zobair-8a739621a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] flex items-center justify-center border border-black rounded-md hover:bg-black hover:text-white transition"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="mailto:fayeza.zobair@gmail.com"
                  className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] flex items-center justify-center border border-black rounded-md hover:bg-black hover:text-white transition"
                >
                  <Mail size={20} />
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold font-sora leading-tight">
            Let’s <span className="bg-[#B9FF66] text-black px-2 rounded-sm">talk</span>
          </h2>

          <p className="text-[16px] sm:text-[18px] font-normal text-zinc-800 font-spacegrotesk max-w-xl">
            Curious mind? Fellow designer? Recruiter?  
            I’m always open to connect over design, development, or a shared love for clean layouts and good coffee ☕.
          </p>

          <div className="bg-zinc-100 w-full rounded-xl p-5 sm:p-6 shadow-sm space-y-4 font-spacegrotesk text-[15px] sm:text-[16px] text-black">
            <div className="flex flex-col">
              <span className="text-zinc-500 uppercase text-xs tracking-wide">Email</span>
              <span>fayeza.zobair@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-500 uppercase text-xs tracking-wide">Phone</span>
              <span>+91 73105 66559</span>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-500 uppercase text-xs tracking-wide">Location</span>
              <span>Based in India, working worldwide 🌍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
