import { Target, ShieldCheck, Sparkles, Users } from "lucide-react";

const strengths = [
  {
    icon: Target,
    title: "End-to-End Ownership",
    description:
      "I take features from requirement and design through implementation, deployment, and go-live — owning outcomes, not just tickets.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Delivered secure, compliance-critical systems for banking and telecom clients — JWT authentication, Spring Security RBAC, and audit-ready workflows.",
  },
  {
    icon: Sparkles,
    title: "AI-Augmented Engineering",
    description:
      "I ship faster with AI dev tools like GitHub Copilot and Amazon Q, and build LLM-powered products on the side — pairing solid engineering with modern AI.",
  },
  {
    icon: Users,
    title: "Cross-Functional Delivery",
    description:
      "I translate business needs into architecture and collaborate across backend, frontend, and QA in Agile teams to align on the most effective solution.",
  },
];

export const Testimonials = () => {
  return (
    <section id="strengths" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Bring
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            More than code —{" "}
            <span className="font-serif italic font-normal text-white">
              value to your team.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            The strengths I bring to a product team, shaped by four years
            delivering backend systems for enterprise clients.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
