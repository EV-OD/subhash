
'use client';

import { Scale, Gavel, BookOpen, ScrollText, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      
      {/* 1. Abstract Background Grid - Represents Structure */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* 2. Rotating Geometric Shapes - Represents Complexity & Order */}
      <div className="absolute w-[500px] h-[500px] border border-border rounded-full animate-[spin_60s_linear_infinite] opacity-40"></div>
      <div className="absolute w-[400px] h-[400px] border border-border rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-40"></div>
      <div className="absolute w-[300px] h-[300px] border border-dashed border-border rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>

      {/* 3. Connecting Lines (The Network) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <line x1="50%" y1="50%" x2="20%" y2="20%" className="stroke-border stroke-1" />
        <line x1="50%" y1="50%" x2="80%" y2="20%" className="stroke-border stroke-1" />
        <line x1="50%" y1="50%" x2="20%" y2="80%" className="stroke-border stroke-1" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" className="stroke-border stroke-1" />
        
        {/* Pulsing dots on lines */}
        <circle cx="35%" cy="35%" r="2" className="fill-primary animate-pulse" />
        <circle cx="65%" cy="35%" r="2" className="fill-primary animate-pulse delay-700" />
        <circle cx="35%" cy="65%" r="2" className="fill-primary animate-pulse delay-1000" />
        <circle cx="65%" cy="65%" r="2" className="fill-primary animate-pulse delay-500" />
      </svg>

      {/* 4. The Central Core - "The Insight" */}
      <div className="relative z-20 w-48 h-48 bg-card rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-border animate-float-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-card to-muted opacity-50"></div>
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl animate-pulse-slow"></div>
        
        <Scale className="w-16 h-16 text-text-heading mb-2 relative z-10" />
        <div className="text-center relative z-10">
            <span className="block text-xs font-bold tracking-[0.2em] text-primary uppercase">Est. 2025</span>
            <span className="block text-lg font-serif font-bold text-text-heading">JUSTICE</span>
        </div>
      </div>

      {/* 5. Floating Nodes (The Pillars) */}
      
      {/* Top Left - Case Law */}
      <div className="absolute top-[15%] left-[15%] z-10 animate-float-delayed">
        <div className="bg-card p-3 rounded-xl shadow-lg border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
            <div className="p-2 bg-primary/10 rounded-lg">
                <Gavel className="w-5 h-5 text-primary" />
            </div>
            <div className="hidden md:block">
                <p className="text-xs font-bold text-text-heading">Case Law</p>
                <p className="text-[10px] text-text-description">Analysis & Precedents</p>
            </div>
        </div>
      </div>

      {/* Top Right - Research */}
      <div className="absolute top-[15%] right-[15%] z-10 animate-float-slow">
        <div className="bg-card p-3 rounded-xl shadow-lg border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="hidden md:block">
                <p className="text-xs font-bold text-text-heading">Research</p>
                <p className="text-[10px] text-text-description">Legal Scholarship</p>
            </div>
        </div>
      </div>

      {/* Bottom Left - History */}
      <div className="absolute bottom-[15%] left-[15%] z-10 animate-float-reverse">
        <div className="bg-card p-3 rounded-xl shadow-lg border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
            <div className="p-2 bg-amber-500/10 rounded-lg">
                <ScrollText className="w-5 h-5 text-amber-600" />
            </div>
            <div className="hidden md:block">
                <p className="text-xs font-bold text-text-heading">History</p>
                <p className="text-[10px] text-text-description">Legal Evolution</p>
            </div>
        </div>
      </div>

      {/* Bottom Right - Academia */}
      <div className="absolute bottom-[15%] right-[15%] z-10 animate-float-slow-reverse">
        <div className="bg-card p-3 rounded-xl shadow-lg border border-border flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="hidden md:block">
                <p className="text-xs font-bold text-text-heading">Academia</p>
                <p className="text-[10px] text-text-description">Scholarly Works</p>
            </div>
        </div>
      </div>

    </div>
  );
}
