import Image from 'next/image';

export default function TestimonialCard({ item }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-5">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-white">{item.name}</p>
          <p className="text-sm text-zinc-500">Client</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-400">"{item.quote}"</p>
      <div className="mt-4 h-2 rounded-full bg-zinc-800">
        <div className="h-2 w-3/4 rounded-full bg-cyan-500" />
      </div>
    </div>
  );
}