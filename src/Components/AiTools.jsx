import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { AiToolsData } from '../assets/tools';

const AiTools = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24 ">
      <div className="text-center">
        <h1 className="text-slate-700 text-[42px] font-semibold">Powerful AI Tools</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with AI.
        </p>

        <div className="flex flex-wrap mt-10 justify-center ">
          {AiToolsData.map((tool) => {
            const { id, title, description, Icon: iconName, bg, path } = tool;
            const LucideIcon = Icons[iconName] || Icons.HelpCircle;

            return (
              <div
                key={id ?? title}
                className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => path && navigate(path)}
              >
                <div
                  className="w-12 h-12 p-3 text-white rounded-xl inline-flex items-center justify-center"
                  style={{ background: `linear-gradient(to bottom, ${bg.from}, ${bg.to})` }}
                >
                  <LucideIcon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm max-w-[95%]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AiTools;