
import React from 'react';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const Conclusion: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in pb-10">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900">Key Insights & Conclusion</h2>
        <p className="text-slate-500 mt-2">Summary of Jobless Growth (1993-2012)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-100">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Research Verdict</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">
                <strong>Growth was predominantly "Jobless":</strong> Employment elasticity of output dropped to near zero. 
                Growth was driven by 81% efficiency gains (productivity) rather than labor accumulation.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">
                <strong>Structural Transformation happened, but unconventionally:</strong> 
                The "textbook" shift to manufacturing didn't happen. Instead, labor moved to 
                <strong> Construction</strong> (low productivity), while value moved to <strong>Services</strong> (high productivity).
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">
                <strong>The "Drag" Effect:</strong> The decline in the employment rate (people stopping work) reduced potential per capita value added by <strong>14.2%</strong>.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <h4 className="flex items-center text-amber-900 font-bold mb-2">
              <AlertTriangle className="mr-2" size={20} />
              The Gender Dimension is Critical
            </h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              The "Jobless" nature is largely a story of women withdrawing from the workforce. 
              While partially due to positive factors (education), the lack of suitable jobs for rural women 
              transitioning out of agriculture remains a major policy failure.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h4 className="text-blue-900 font-bold mb-2">
              Policy Implication
            </h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              To reignite employment growth, India needs to bridge the gap between low-skill construction work 
              and high-skill service work. A robust <strong>Manufacturing</strong> sector is the missing link that could 
              absorb women and unskilled labor while offering better productivity than construction.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Final Thought from V. Abraham</h3>
        <p className="italic text-lg max-w-3xl mx-auto mb-6">
          "The nature and quality of employment generated in the sectors in which employment was expanding... 
          Informal and vulnerable forms of employment in any sector, even if highly productive, 
          do not provide better work and life chances to the workers."
        </p>
        <div className="inline-flex items-center text-sm font-medium text-blue-400">
          <span>End of Analysis</span>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
