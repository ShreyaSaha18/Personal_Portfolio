import { Sparkles, Cloud, Activity, Bot } from "lucide-react";

const certifications = [
  {
    icon: Sparkles,
    title: "Generative AI on AWS Essentials",
    issuer: "AWS Partner (Business)",
  },
  {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    icon: Activity,
    title: "Site Reliability Engineering (SRE)",
    issuer: "Certificate of Completion",
  },
  {
    icon: Bot,
    title: "Amazon CodeWhisperer: Getting Started",
    issuer: "Amazon Web Services",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certified &{" "}
            <span className="font-serif italic font-normal text-white">
              always learning.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Backing hands-on experience with cloud and AI credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <cert.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
