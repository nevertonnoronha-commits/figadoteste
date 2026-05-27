import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200/60 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none gap-4 py-5 min-h-[52px] group"
      >
        <h4 className="font-semibold text-sm sm:text-base text-[#1C1917] leading-snug group-hover:text-[#2E4036] transition-colors">
          {question}
        </h4>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
          isOpen ? 'bg-[#2E4036] text-white' : 'bg-[#E8E6DF] text-[#6B7260] group-hover:bg-[#E0DDD5]'
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
        <p className="text-[#6B7260] leading-relaxed font-light text-sm sm:text-base pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
};
