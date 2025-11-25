
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { LFPR_DATA, FEMALE_YOUTH_ACTIVITY } from '../constants';
import { GraduationCap, Home, Briefcase } from 'lucide-react';

const GenderGap: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in pb-10">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900">The Missing Workforce</h2>
        <p className="text-slate-500 mt-2">Why is the employment rate falling?</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* LFPR Trends Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Labor Force Participation Rate (LFPR) Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LFPR_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" tick={{fontSize: 12}} />
                <YAxis domain={[0, 70]} label={{ value: '%', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px' }}
                />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="Male" stroke="#94a3b8" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="Female" stroke="#ef4444" strokeWidth={3} dot={{r: 4}} activeDot={{r: 8}} />
                <Line type="monotone" dataKey="Total" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 mt-4 bg-red-50 p-3 rounded border border-red-100">
            <strong>Key Finding:</strong> Male LFPR remained stable (~55%), but Female LFPR collapsed from <strong>32.1% to 24.2%</strong>. This withdrawal is the main reason for the overall employment rate decline.
          </p>
        </div>

        {/* Explaining the Decline */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
           <h3 className="text-lg font-semibold mb-4">Why are women leaving?</h3>
           <div className="space-y-6">
             <div className="flex items-start space-x-4">
               <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                 <GraduationCap size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-slate-800">The Education Effect</h4>
                 <p className="text-sm text-slate-600">
                   More young women (15-25) are staying in school. Educational participation rose significantly.
                 </p>
               </div>
             </div>
             
             <div className="flex items-start space-x-4">
               <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                 <Home size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-slate-800">Income Effect & Status</h4>
                 <p className="text-sm text-slate-600">
                   As household incomes rise, women often withdraw from manual labor (agriculture/construction) due to social status or care duties, known as the <strong>"Income Effect"</strong>.
                 </p>
               </div>
             </div>

             <div className="flex items-start space-x-4">
               <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                 <Briefcase size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-slate-800">Lack of Suitable Jobs</h4>
                 <p className="text-sm text-slate-600">
                   The service sector boom created high-skill jobs. Women leaving agriculture lacked the skills for services and didn't want to move to construction.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Youth Activity Analysis */}
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900">Where did the young women go? (Rural, Age 16-25)</h3>
          <p className="text-slate-500 text-sm">Comparing activity status between 1993 and 2012</p>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={FEMALE_YOUTH_ACTIVITY} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} tick={{fontWeight: 'bold'}} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Legend />
              <Bar dataKey="Labour" fill="#ef4444" stackId="a" name="In Labour Market" />
              <Bar dataKey="Education" fill="#3b82f6" stackId="a" name="Education" />
              <Bar dataKey="Domestic" fill="#94a3b8" stackId="a" name="Domestic Duties" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="p-2">
            <div className="font-bold text-red-600">Labour Market</div>
            <div>Collapsed (46% → 17%)</div>
          </div>
          <div className="p-2">
            <div className="font-bold text-blue-600">Education</div>
            <div> surged (5% → 28%)</div>
          </div>
          <div className="p-2">
            <div className="font-bold text-slate-500">Domestic Duties</div>
            <div>Increased (48% → 54%)</div>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl">
        <h4 className="font-bold text-indigo-900 mb-2">Simulation Insight</h4>
        <p className="text-indigo-800 text-sm">
          The paper simulates a scenario: If the Female WPR (Worker Population Ratio) had remained at 1993 levels instead of dropping, 
          GDP growth would have been <strong>281%</strong> instead of the actual 241%. The withdrawal of women cost the economy significant potential growth.
        </p>
      </div>
    </div>
  );
};

export default GenderGap;
