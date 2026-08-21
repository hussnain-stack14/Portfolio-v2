import SectionHeading from '@/components/SectionHeading';
import { filters } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioSection({ activeFilter, onFilterChange, filteredProjects }) {
  return (
    <section className="space-y-6">
      <SectionHeading title="Portfolio" />
      <p className="max-w-2xl text-zinc-400">
        A collection of web applications, dashboards, and business websites I&apos;ve built including real client work for local businesses in Faisalabad.
      </p>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} onClick={() => onFilterChange(filter)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'bg-cyan-600 text-white' : 'bg-[#1a1a1d] text-zinc-400 hover:text-white'}`}>
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1d]">
            <div>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.category} project by Hussnain Ali`}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              
              <p className="mt-2 text-sm leading-6 text-zinc-400">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}