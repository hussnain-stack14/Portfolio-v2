export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="flex flex-col-2 rounded-2xl border border-white/10 bg-[#1a1a1d] p-5 gap-6">
      <div className="mb-4 flex  items-center justify-center rounded-xl  text-cyan-300">{icon}</div>
     <div>
       <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-zinc-400">{description}</p>
     </div>
    </div>
  );
}