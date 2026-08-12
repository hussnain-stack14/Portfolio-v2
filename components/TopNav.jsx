import { tabs } from '@/lib/data';

export default function TopNav({ activeTab, onTabChange }) {
  return (
    <nav aria-label="Primary" className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === tab.key ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}