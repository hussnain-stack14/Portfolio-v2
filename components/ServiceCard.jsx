export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="group flex flex-col-2 gap-6 rounded-2xl border border-white/10 bg-[#1a1a1d] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#1f1f23] hover:shadow-[0_0_25px_rgba(103,232,249,0.15)]">
      <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl  text-cyan-300 transition-all duration-300 ease-out group-hover:scale-110  group-hover:text-cyan-200">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-7 text-zinc-400">{description}</p>
      </div>
    </div>
  );
}