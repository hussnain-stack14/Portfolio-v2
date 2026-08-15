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
          I'm a Full Stack Web Developer specializing in modern web applications with{" "}
          <span className=" bg-[#0e0e10] border-none rounded-full border mr-1 text-cyan-200">
            Next.js, Express.js, Node.js and MongoDB
          </span>{" "} 
          
 . I focus on building{" "}
          <span className="bg-[#0e0e10] border-none rounded-full border mr-1 text-cyan-200">
           responsive interfaces, reliable APIs, and practical solutions
          </span>
          that solve real business problems.
          
          
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