import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none gap-4 py-5 min-h-[52px] group"
      >
        <h4 className="font-semibold text-sm sm:text-base text-stone-800 leading-snug group-hover:text-stone-900 transition-colors">
          {question}
        </h4>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
          isOpen ? 'bg-[#16A34A] text-white' : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'
        }`}>
          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-stone-500 leading-relaxed font-light text-sm sm:text-base pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
};
