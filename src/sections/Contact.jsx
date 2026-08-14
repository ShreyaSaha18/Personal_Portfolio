import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

// Inbox that receives contact-form submissions.
const OWNER_EMAIL = "shreya20211@gmail.com";

// Web3Forms delivers submissions to the address this key is registered to.
// Access keys are public by design — they are safe to ship in client code.
const WEB3FORMS_ACCESS_KEY = "98d094d9-11e9-4b8c-9d3d-b7a58de8463f";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: OWNER_EMAIL,
    href: `mailto:${OWNER_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9875670007",
    href: "tel:+919875670007",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sectionRef, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  // Brief post-success state: the plane flies off, then the button reads "Sent!".
  const [justSent, setJustSent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const mailtoHref = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${formData.name.trim() || "your site"}`
  )}&body=${encodeURIComponent(
    `${formData.message.trim()}\n\n—\n${formData.name.trim()}\n${formData.email.trim()}`
  )}`;

  useEffect(() => {
    if (!justSent) return;
    const timer = setTimeout(() => setJustSent(false), 3000);
    return () => clearTimeout(timer);
  }, [justSent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in your name, email and message.",
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio enquiry from ${name}`,
          from_name: "Portfolio Contact Form",
          name,
          email,
          message,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Submission failed.");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setJustSent(true);
    } catch (err) {
      // Keep provider detail in the console; give the visitor a way through.
      console.error("Web3Forms error:", err);
      setSubmitStatus({
        type: "error",
        showFallback: true,
        message:
          "Something went wrong while sending. You can email me directly instead — your message is saved below.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  // Entrance animations only start once the section is actually on screen.
  const reveal = (delay = "") =>
    inView ? `animate-fade-in ${delay}` : "reveal-hidden";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      {/* Aurora backdrop — purely decorative, hidden from assistive tech. */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl animate-aurora-a" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 blur-3xl animate-aurora-b" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 bg-primary/[0.04] blur-3xl animate-aurora-c" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`block text-secondary-foreground text-sm font-medium tracking-wider uppercase ${reveal()}`}
          >
            Get In Touch
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground ${reveal(
              "animation-delay-100"
            )}`}
          >
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className={`text-muted-foreground ${reveal("animation-delay-200")}`}>
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className={`glass p-8 rounded-3xl border border-primary/30 ${reveal(
              "animation-delay-300"
            )}`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              {/* Relative wrapper so the launched plane can escape the
                  button's overflow-hidden clip. */}
              <div className="relative">
                <Button
                  className="w-full group"
                  type="submit"
                  size="lg"
                  disabled={isLoading || justSent}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : justSent ? (
                    <>
                      Sent!
                      <CheckCircle className="w-5 h-5 animate-rise-in" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>

                {justSent && (
                  <Send
                    aria-hidden="true"
                    className="w-5 h-5 text-primary absolute left-1/2 top-1/2 -mt-2.5 animate-plane-launch pointer-events-none"
                  />
                )}
              </div>

              {submitStatus.type && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 animate-rise-in
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm">{submitStatus.message}</p>
                    {submitStatus.showFallback && (
                      <a
                        href={mailtoHref}
                        className="text-sm font-medium underline underline-offset-4 hover:no-underline break-all"
                      >
                        Email {OWNER_EMAIL} directly
                      </a>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 ${reveal("animation-delay-400")}`}>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={i}
                      {...(item.href ? { href: item.href } : {})}
                      className={`flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-all duration-300 group ${
                        item.href ? "hover:translate-x-1" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
