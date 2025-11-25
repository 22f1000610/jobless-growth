import React, { useState } from 'react';
import { Section } from './types';
import { 
  BookOpen, 
  BarChart2, 
  PieChart, 
  ArrowRightLeft, 
  Users, 
  Lightbulb,
  Menu,
  X
} from 'lucide-react';
import Introduction from './components/Introduction';
import MacroOverview from './components/MacroOverview';
import Decomposition from './components/Decomposition';
import SectoralShifts from './components/SectoralShifts';
import GenderGap from './components/GenderGap';
import Conclusion from './components/Conclusion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRODUCTION);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Section.INTRODUCTION, label: 'Overview', icon: <BookOpen size={20} /> },
    { id: Section.MACRO_OVERVIEW, label: 'The Growth Paradox', icon: <BarChart2 size={20} /> },
    { id: Section.DECOMPOSITION, label: 'Decomposition', icon: <PieChart size={20} /> },
    { id: Section.SECTORAL_SHIFTS, label: 'Sectoral Shifts', icon: <ArrowRightLeft size={20} /> },
    { id: Section.GENDER_GAP, label: 'The Missing Workforce', icon: <Users size={20} /> },
    { id: Section.CONCLUSION, label: 'Key Insights', icon: <Lightbulb size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case Section.INTRODUCTION: return <Introduction onStart={() => setActiveSection(Section.MACRO_OVERVIEW)} />;
      case Section.MACRO_OVERVIEW: return <MacroOverview />;
      case Section.DECOMPOSITION: return <Decomposition />;
      case Section.SECTORAL_SHIFTS: return <SectoralShifts />;
      case Section.GENDER_GAP: return <GenderGap />;
      case Section.CONCLUSION: return <Conclusion />;
      default: return <Introduction onStart={() => setActiveSection(Section.MACRO_OVERVIEW)} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-100">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Growth Lens
          </h1>
          <p className="text-xs text-slate-500 mt-1">Based on V. Abraham (2019)</p>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-slate-100 bg-slate-50">
          <div className="text-xs text-slate-500">
            <p className="font-semibold">Paper Source:</p>
            <p className="italic">"Jobless growth through the lens of structural transformation"</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
