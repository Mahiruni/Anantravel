'use client';

import { ArrowUpRight } from 'lucide-react';

export default function FooterCredit() {
  return (
    <div className="hisabtech-credit" aria-label="Website credit">
      <span>Website crafted by</span>
      <a href="https://hisabtechnologies.com" target="_blank" rel="noopener noreferrer">
        HisabTech
        <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </div>
  );
}
