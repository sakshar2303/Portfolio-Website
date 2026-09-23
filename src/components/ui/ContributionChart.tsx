"use client";

import { useMemo, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionChartProps {
  contributions: ContributionDay[];
  total: number;
}

const LEVEL_COLORS = [
  "bg-[#161b22]",        // level 0 — empty
  "bg-emerald-900/70",   // level 1
  "bg-emerald-700/80",   // level 2
  "bg-emerald-500/90",   // level 3
  "bg-emerald-400",      // level 4
];

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

export default function ContributionChart({ contributions, total }: ContributionChartProps) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  // Organize contributions into weeks (columns) of 7 days (rows, Sun-Sat)
  const { weeks, monthHeaders } = useMemo(() => {
    if (!contributions.length) return { weeks: [], monthHeaders: [] };

    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // The first entry's day-of-week determines padding for the first column
    const firstDay = new Date(contributions[0].date + "T00:00:00").getDay();
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ date: "", count: -1, level: -1 }); // placeholder
    }

    for (const day of contributions) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    // Build month headers: find the first week where a new month starts
    const monthHeaders: { label: string; colStart: number }[] = [];
    let lastMonth = -1;
    for (let w = 0; w < weeks.length; w++) {
      for (const day of weeks[w]) {
        if (day.date) {
          const month = new Date(day.date + "T00:00:00").getMonth();
          if (month !== lastMonth) {
            monthHeaders.push({ label: MONTH_LABELS[month], colStart: w });
            lastMonth = month;
          }
          break;
        }
      }
    }

    return { weeks, monthHeaders };
  }, [contributions]);

  return (
    <div className="border border-[#222] bg-[#0a0a0a] p-5 md:p-6 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest uppercase text-gray-400">
            Contribution Activity
          </span>
        </div>
        <span className="font-mono text-xs text-gray-500">
          {total} contributions in the last year
        </span>
      </div>

      {/* Chart */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex flex-col gap-0 min-w-full">
          {/* Month labels */}
          <div className="flex ml-8 mb-1">
            {monthHeaders.map((mh, i) => {
              const nextCol = i < monthHeaders.length - 1 ? monthHeaders[i + 1].colStart : weeks.length;
              const span = nextCol - mh.colStart;
              return (
                <span
                  key={`${mh.label}-${mh.colStart}`}
                  className="text-[10px] font-mono text-gray-600"
                  style={{ width: `${span * 14}px`, minWidth: `${span * 14}px` }}
                >
                  {span >= 3 ? mh.label : ""}
                </span>
              );
            })}
          </div>

          {/* Grid rows (one per day-of-week) */}
          <div className="flex gap-0">
            {/* Day-of-week labels */}
            <div className="flex flex-col gap-[3px] mr-1 w-7 shrink-0">
              {DAY_LABELS.map((label, i) => (
                <span key={i} className="text-[9px] font-mono text-gray-600 h-[11px] leading-[11px]">
                  {label}
                </span>
              ))}
            </div>

            {/* Weeks grid */}
            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <div
                      key={`${wi}-${di}`}
                      className={`w-[11px] h-[11px] rounded-[2px] transition-all duration-150 ${
                        day.level === -1
                          ? "bg-transparent"
                          : `${LEVEL_COLORS[day.level]} hover:ring-1 hover:ring-gray-500 cursor-pointer`
                      }`}
                      onMouseEnter={(e) => {
                        if (day.level === -1) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const dateStr = day.date
                          ? new Date(day.date + "T00:00:00").toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "";
                        setTooltip({
                          text: day.count === 0
                            ? `No contributions on ${dateStr}`
                            : `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${dateStr}`,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-3">
        <span className="text-[10px] font-mono text-gray-600">Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${color}`} />
        ))}
        <span className="text-[10px] font-mono text-gray-600">More</span>
      </div>

      {/* Tooltip (rendered as fixed overlay) */}
      {tooltip && (
        <div
          className="fixed z-50 px-3 py-1.5 bg-[#1a1a1a] border border-[#333] text-[11px] font-mono text-gray-300 pointer-events-none whitespace-nowrap rounded"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
