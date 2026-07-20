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
      <span className="utility-badge-blue mb-4">
        <span className="utility-dot"></span>
        {badge}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-heading tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-body font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
