/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface SectionHeaderProps {
  id?: string;
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  id,
  badge,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={`max-w-3xl mb-12 ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-mono font-medium tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
        {badge}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
