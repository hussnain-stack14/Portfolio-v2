'use client';

import { useState } from 'react';
import Image from 'next/image';
import { profile, sidebarContacts } from '@/lib/data';
import Link from 'next/link';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full max-w-lg space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1d] p-4 shadow-2xl shadow-black/20 sm:space-y-6 sm:p-6 lg:max-w-xl lg:p-8 xl:max-w-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-start">
          <div className="rounded-t-xl ml-11 relative h-16 w-16 shrink-0 overflow-hidden ring-2 ring-cyan-500/40 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, 112px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-lg font-bold text-white sm:text-2xl lg:text-3xl">
              {profile.name}
            </h1>
            <span className="mt-1 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-300 sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.2em]">
              {profile.role}
            </span>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle details"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-200 sm:h-9 sm:w-9 lg:hidden"
        >
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-200 sm:h-4 sm:w-4 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className={`${open ? 'block' : 'hidden'} space-y-4 sm:space-y-6 lg:block`}>
        <div className="h-px w-full bg-white/10" />

        <div className="space-y-2 sm:space-y-3">
          {sidebarContacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-xs text-zinc-400 sm:px-4 sm:py-4 sm:text-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 sm:h-10 sm:w-10">
                  {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:text-[10px] sm:tracking-[0.2em]">
                    {item.label}
                  </p>
                  <p className="break-words font-medium text-zinc-200">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 sm:gap-3">
          {profile.socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-200 sm:h-11 sm:w-11"
              >
                {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}