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

        <div className="mt-16 flex flex-wrap justify-center gap-8 px-4">
          {AiToolsData.map(({ id, title, description, Icon, bg, path }) => {
            const LucideIcon = Icons[Icon] ?? Icons.HelpCircle;

            return (
              <button
                key={id}
                type="button"
                className="p-6 text-left  rounded-lg shadow-lg  max-w-[25%]  transition-transform focus:outline-none "
                onClick={() => path && navigate(path)}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/15 p-3">
                  <LucideIcon size={30} color="blue" />
                </div>
                <h2 className="text-xl font-semibold font-sans mb-2 text-gray-600">{title}</h2>
                <p className="mt-10 font-light leading-relaxed text-medium">{description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AiTools;