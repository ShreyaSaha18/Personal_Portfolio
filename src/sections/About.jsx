import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Microservices",
    description:
      "Architected distributed Spring Boot microservices with event-driven communication, sustaining zero-downtime across 1M+ requests/day.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Cut API latency by 30–35% with Redis caching and SQL tuning. Validated at scale with JMeter load testing.",
  },
  {
    icon: Users,
    title: "Reliability",
    description:
      "Built fault-tolerant systems using Resilience4j and Spring Security RBAC — zero critical security incidents in production.",
  },
  {
    icon: Lightbulb,
    title: "Observability",
    description:
      "Implemented end-to-end Dynatrace monitoring, cutting mean time to resolution by 35% across distributed services.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineered for scale,
              <span className="font-serif italic font-normal text-white">
                {" "}
                built for production.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full Stack Developer with 4+ years of experience, focused
                heavily on backend engineering — designing distributed systems,
                microservices architecture, and high-throughput APIs using Java
                and Spring Boot at British Telecom and Cognizant.
              </p>
              <p>
                I've architected multistep workflow orchestration with Spring
                Cloud, built secure and fault-tolerant services with
                Resilience4j and Spring Security, and optimized systems
                processing over a million requests a day — reducing latency by
                up to 40% through caching strategies, query tuning, and
                continuous load testing.
              </p>
              <p>
                On the infrastructure side, I containerize with Docker,
                orchestrate on Kubernetes, and automate delivery through CI/CD
                pipelines using Jenkins and GitLab — ensuring every service
                ships reliably and scales gracefully.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I don't just write backend code — I design systems that hold up
                under pressure, recover from failure, and give teams full
                confidence in production."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
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
      </div>
    </section>
  );
};

export default About;
