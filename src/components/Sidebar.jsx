import React from 'react';
import { 
  LayoutDashboard, 
  Receipt, 
  PlusCircle, 
  Building2, 
  Mic, 
  Sparkles,
  TrendingUp,
  X
} from 'lucide-react';

export default function Sidebar({ currentTab, setCurrentTab, mobileOpen, setMobileOpen, onOpenVoiceQuick }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'expenses', label: 'All Expenses', icon: Receipt, badge: '8' },
    { id: 'add-expense', label: 'Add Expense', icon: PlusCircle, badge: 'Voice AI' },
    { id: 'properties', label: 'Properties', icon: Building2, badge: '4 units' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header with Royal Purple Accent */}
        <div className="p-6 border-b border-purple-100 flex items-center justify-between bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
              <Building2 className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white">PropEx</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-purple-400/20 text-purple-200 border border-purple-300/30 uppercase tracking-wider">
                  MVP
                </span>
              </div>
              <p className="text-xs text-purple-200/80 font-medium">Real Estate Expense Tracker</p>
            </div>
          </div>

          <button 
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 text-purple-200 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Voice CTA button */}
        <div className="p-4 border-b border-slate-100">
          <button
            onClick={() => {
              setCurrentTab('add-expense');
              if (onOpenVoiceQuick) onOpenVoiceQuick();
              setMobileOpen(false);
            }}
            className="w-full py-2.5 px-3.5 bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white font-semibold text-sm rounded-xl shadow-md shadow-purple-900/15 flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-[0.98] group"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mic className="w-3.5 h-3.5 text-white animate-pulse" />
            </div>
            <span>Voice-to-Note</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-200 ml-auto opacity-75" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left
                  ${isActive 
                    ? 'bg-purple-50 text-purple-900 font-semibold border border-purple-200/70 shadow-xs' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                    ${isActive ? 'bg-purple-700 text-white shadow-xs' : 'bg-slate-100 text-slate-500'}
                  `}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`
                    text-[11px] font-semibold px-2 py-0.5 rounded-full
                    ${isActive 
                      ? 'bg-purple-200/60 text-purple-900' 
                      : 'bg-slate-100 text-slate-500'}
                  `}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Real Estate Business Profile & Free Architecture Indicator */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="bg-purple-50/70 border border-purple-200/60 rounded-xl p-3 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-xs font-bold text-purple-950">100% Free Stack</span>
            </div>
            <p className="text-[11px] text-purple-800 leading-relaxed">
              Vercel Hobby + Supabase Free + Web Speech API (zero hosting fee).
            </p>
          </div>

          <div className="flex items-center gap-3 px-2 py-1.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-800 to-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
              RE
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">Estate Managing Director</p>
              <p className="text-[11px] text-slate-500 truncate">4 Active Properties</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
