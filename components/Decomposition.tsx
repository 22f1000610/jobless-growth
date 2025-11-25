import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { DECOMPOSITION_DATA } from '../constants';

const Decomposition: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900">Decomposing Growth</h2>
        <p className="text-slate-500 mt-2">What actually drove the increase in Per Capita Value Added?</p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h3 className="text-lg font-semibold">Sources of Growth Contribution (%)</h3>
            <p className="text-sm text-slate-500">Based on the Job Generation and Growth Decomposition (JOGG) tool</p>
          </div>
        </div>
        
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DECOMPOSITION_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 12}} interval={0} />
              <YAxis label={{ value: '% Contribution', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                cursor={{fill: '#f1f5f9'}}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100">
                        <p className="font-bold text-slate-900">{data.name}</p>
                        <p className="text-lg font-mono my-1" style={{color: data.fill}}>
                          {data.value > 0 ? '+' : ''}{data.value}%
                        </p>
                        <p className="text-xs text-slate-500 max-w-[200px]">{data.description}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {DECOMPOSITION_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <h4 className="font-semibold text-green-800 mb-2">Efficiency Dominated</h4>
            <p className="text-sm text-green-800">
              <strong>81%</strong> of the total change came from Labour Productivity (within-sector efficiency). This means sectors became better at producing value without necessarily adding more people.
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
            <h4 className="font-semibold text-red-800 mb-2">The Drag Factor</h4>
            <p className="text-sm text-red-800">
              The <strong>Employment Rate</strong> had a negative effect of <strong>-14.2%</strong>. If the employment rate had remained stable (at 1993 levels), per capita value added would have been ~14% higher.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decomposition;
