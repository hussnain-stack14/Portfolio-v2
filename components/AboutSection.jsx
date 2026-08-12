import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { clients, services, testimonials } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className="space-y-8">
      <div>
        <SectionHeading title="About Me" />
        <p className="max-w-max text-md leading-8 text-zinc-400">
          I'm a Full Stack Web Developer who turns ideas into practical, user-focused web solutions. I specialize in{" "}
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-200">
            MongoDB, Express.js, React, Node.js
          </span>{" "} 
          building responsive and scalable web applications.
 <br/>
 I focus on building{" "}
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-200">
           responsive interfaces, robust backend APIs, and scalable database solutions.
          </span>
          I enjoy turning real-world requirements into practical applications, solving technical challenges, and writing
          
          
          clean, maintainable code, with modern web technologies.{" "}
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-white">
          What I&apos;m Doing
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-white">Testimonials</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-white">Clients</h3>
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a1d] p-4">
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}