import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts';
import { SECTORAL_DATA } from '../constants';

const SectoralShifts: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900">Sectoral Shifts</h2>
        <p className="text-slate-500 mt-2">Where did the workers go vs. where was the value created?</p>
      </div>

      {/* Main Analysis Chart */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Employment Growth vs. Productivity Growth (1993-2012)</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SECTORAL_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="sector" 
                angle={-45} 
                textAnchor="end" 
                height={70} 
                tick={{fontSize: 12}}
              />
              <YAxis label={{ value: '% Growth', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                cursor={{fill: '#f1f5f9'}}
                contentStyle={{ borderRadius: '8px' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar name="Employment Growth %" dataKey="employmentGrowth" fill="#8884d8" radius={[4, 4, 0, 0]} />
              <Bar name="Productivity Growth %" dataKey="productivityGrowth" fill="#82ca9d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-slate-500 text-center mt-2">
          Note: Construction (Purple) has massive employment growth but near-zero productivity growth.
        </div>
      </div>

      {/* Key Insights Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
          <h4 className="font-bold text-lg mb-2 text-slate-800">The Construction Boom</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Construction accounted for <strong>33.5%</strong> of the total net increment in employment. 
            It acted as a "Refuge Sector"—absorbing unskilled labor leaving agriculture. 
            However, it had the lowest productivity growth (almost 0%).
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
          <h4 className="font-bold text-lg mb-2 text-slate-800">Service Sector Dominance</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Services (Finance, Business, Transport) saw massive productivity gains (~140-190%). 
            While they created jobs, they were skill-intensive, limiting their ability to absorb the surplus labor from agriculture.
          </p>
        </div>
      </div>

      {/* The Structural Transformation Argument */}
      <div className="bg-slate-800 text-slate-50 p-6 rounded-xl">
        <h3 className="font-bold text-lg mb-3">An Unconventional Transformation</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-slate-300 mb-2 uppercase tracking-wide">Textbook Model (Lewis/Kuznets)</p>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-slate-700 rounded">Agriculture</span>
              <span>→</span>
              <span className="px-3 py-1 bg-green-600 rounded font-semibold">Manufacturing</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">Labor moves to high-productivity manufacturing.</p>
          </div>
          <div>
            <p className="text-sm text-slate-300 mb-2 uppercase tracking-wide">India's Reality (1993-2012)</p>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-slate-700 rounded">Agriculture</span>
              <span>→</span>
              <span className="px-3 py-1 bg-purple-600 rounded font-semibold">Construction</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">Labor moves to low-productivity construction ("Premature Deindustrialization").</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectoralShifts;
