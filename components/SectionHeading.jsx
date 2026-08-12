export default function SectionHeading({ title }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="mt-3 h-1.5 w-24 rounded-full bg-cyan-500" />
    </div>
  );
}