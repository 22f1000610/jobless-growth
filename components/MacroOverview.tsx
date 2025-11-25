import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { MACRO_GROWTH_DATA } from '../constants';

const MacroOverview: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900">The Growth Paradox</h2>
        <p className="text-slate-500 mt-2">1993-94 to 2011-12</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Total Growth Percentage</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MACRO_GROWTH_DATA} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                <XAxis type="number" unit="%" />
                <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {MACRO_GROWTH_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            <strong>Observation:</strong> GDP Value Added grew by nearly <strong>242%</strong>, but Total Employment only grew by <strong>33%</strong>. This divergence defines "Jobless Growth".
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <h3 className="text-blue-900 font-semibold mb-2">Declining Elasticity</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              In the 1980s, India had an employment elasticity of ~0.41 (every 1% GDP growth led to 0.41% job growth). 
              By 2004-2010, this dropped to almost <strong>nil</strong>.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
             <h3 className="text-lg font-semibold mb-4">The Productivity Factor</h3>
             <p className="text-slate-600 mb-4">
               The gap between the blue bar (GDP) and the red bar (Employment) in the chart is largely explained by the light blue bar: <strong>Output Per Worker</strong>.
             </p>
             <p className="text-slate-600">
               Essentially, the economy didn't need as many new workers because the existing jobs became significantly more efficient (capital deepening and technology).
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroOverview;
