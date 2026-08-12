import { tabs } from '@/lib/data';

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav aria-label="Mobile" className="flex justify-between gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`flex flex-1 flex-col items-center rounded-xl px-2 py-2 text-[11px] font-semibold transition ${activeTab === tab.key ? 'bg-cyan-600 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
        >
          <span>{tab.mobileLabel}</span>
        </button>
      ))}
    </nav>
  );
}