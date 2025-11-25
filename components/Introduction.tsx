import React from 'react';
import { ArrowRight, TrendingUp, Users, AlertCircle } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const Introduction: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          Research Visualization
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Jobless Growth through the lens of <span className="text-blue-600">Structural Transformation</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
          Between 1993 and 2012, India's GDP grew massively, but employment growth lagged behind. 
          This visualization unpacks Vinoj Abraham's research to explain <strong>why</strong> the elasticity of employment generation declined.
        </p>
        
        <button 
          onClick={onStart}
          className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
        >
          Explore the Analysis
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">The Paradox</h3>
          <p className="text-slate-600 text-sm">
            GDP per capita grew by ~147%, yet the employment rate actually <strong>dropped</strong> by 11%. How is this possible?
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
            <AlertCircle size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Unconventional Shift</h3>
          <p className="text-slate-600 text-sm">
            Usually, labor moves from farms to factories. In India, labor moved to <strong>Construction</strong> while services drove value.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Missing Women</h3>
          <p className="text-slate-600 text-sm">
            A massive withdrawal of women from the workforce (-14.2% effect) was a key driver of jobless growth.
          </p>
        </div>
      </div>
      
      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <strong>Definition: Structural Transformation</strong> refers to the reallocation of economic activity across three broad sectors (agriculture, manufacturing, and services) that accompanies the process of modern economic growth.
      </div>
    </div>
  );
};

export default Introduction;
