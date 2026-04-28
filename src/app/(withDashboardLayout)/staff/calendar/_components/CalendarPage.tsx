'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {ChevronLeft, ChevronRight, Plus, BookOpen} from 'lucide-react';
import {TooltipProvider} from '@/components/ui/tooltip';
import {AppointmentModal} from '@/components/calendar/appointment-modal';
import {CalendarGrid} from '@/components/calendar/calendar-grid';

export default function CalendarPage() {
  return (
    <TooltipProvider>
      <div className="flex flex-col h-full bg-background">
        {/* Calendar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-sm font-bold text-foreground min-w-20 text-center">
                April 2026
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="h-8 px-4 text-xs font-medium bg-muted/50">
              Today
            </Button>
          </div>

          <AppointmentModal
            trigger={
              <Button
                size="icon"
                className="h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                <Plus className="h-4 w-4" />
              </Button>
            }
            tooltip={
              <div className="flex items-center gap-2 bg-white text-slate-900 px-3 py-2 rounded-xl shadow-xl border border-slate-100 animate-in fade-in zoom-in duration-200">
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-bold">New booking</span>
              </div>
            }
          />
        </div>

        {/* Calendar Grid */}
        <CalendarGrid />
      </div>
    </TooltipProvider>
  );
}
