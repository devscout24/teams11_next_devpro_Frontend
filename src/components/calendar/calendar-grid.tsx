'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CALENDAR_DAYS, TIME_SLOTS, CALENDAR_EVENTS } from '@/constants/calendar';

export function CalendarGrid() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-[800px] h-full flex flex-col">
        {/* Days Header */}
        <div className="grid grid-cols-[80px_1fr] border-b sticky top-0 bg-background z-20">
          <div className="border-r" />
          <div className="grid grid-cols-7">
            {CALENDAR_DAYS.map((day, i) => (
              <div key={i} className="py-3 flex flex-col items-center gap-1 border-r last:border-r-0">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{day.name}</span>
                <div className={cn(
                  "w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition-colors",
                  day.current ? "bg-primary text-primary-foreground" : "text-foreground"
                )}>
                  {day.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Grid */}
        <div className="flex-1 relative">
          <div className="grid grid-cols-[80px_1fr]">
            {/* Time Labels */}
            <div className="flex flex-col">
              {TIME_SLOTS.map((time, i) => (
                <div key={i} className="h-20 border-r border-b px-3 py-1">
                  <span className="text-[10px] font-bold text-muted-foreground">{time}</span>
                </div>
              ))}
            </div>

            {/* Grid Lines and Events */}
            <div className="relative grid grid-cols-7 divide-x divide-border">
              {Array.from({ length: 7 }).map((_, colIndex) => (
                <div key={colIndex} className="relative h-full flex flex-col">
                  {TIME_SLOTS.map((_, rowIndex) => (
                    <div key={rowIndex} className="h-20 border-b border-border/50" />
                  ))}
                  
                  {/* Events for this day */}
                  {CALENDAR_EVENTS
                    .filter(e => e.day === CALENDAR_DAYS[colIndex].date)
                    .map(event => (
                      <div
                        key={event.id}
                        className="absolute left-1 right-1 rounded-lg bg-emerald-500 text-white p-2 shadow-sm border border-emerald-600/20 z-10 hover:brightness-95 transition-all cursor-pointer overflow-hidden"
                        style={{
                          top: `${(event.rowStart - 1) * 80 + 4}px`,
                          height: `${event.rowSpan * 72}px`,
                        }}
                      >
                        <p className="text-[10px] font-bold leading-tight truncate">{event.name}</p>
                        <p className="text-[9px] font-medium opacity-90 truncate mt-0.5">{event.service}</p>
                        <div className="flex items-center gap-1 mt-1 opacity-80">
                          <Clock className="w-2.5 h-2.5" />
                          <span className="text-[8px] font-medium whitespace-nowrap">{event.time}</span>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
