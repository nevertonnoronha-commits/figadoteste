import React from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export const AIChatWidget = ({ isChatOpen, setIsChatOpen, chatMessages, chatInput, setChatInput, isChatLoading, chatEndRef, handleSendChat }) => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    <div
      className={`bg-[#1E2E26] border border-[#CC5833]/25 rounded-2xl shadow-2xl mb-4 w-[90vw] sm:w-[360px] overflow-hidden transition-all duration-300 origin-bottom-right ${
        isChatOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#2E4036] p-4 flex justify-between items-center border-b border-[#CC5833]/15">
        <div className="flex items-center gap-3 text-white">
          <div className="relative">
            <Bot size={24} className="text-[#CC5833]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#4A7C59] rounded-full border border-[#2E4036]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial font-bold text-base leading-none italic">Asesora Naturale</span>
            <span className="font-mono-data text-[10px] text-white/50 tracking-wider">EN LÍNEA</span>
          </div>
        </div>
        <button onClick={() => setIsChatOpen(false)} className="text-white/50 hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#F2F0E9]">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`flex gap-2 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#2E4036] text-[#CC5833]' : 'bg-[#CC5833] text-white shadow-md'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'bg-[#2E4036] text-white rounded-tr-sm' : 'bg-white border border-stone-200/50 text-[#1C1917] rounded-tl-sm shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isChatLoading && (
          <div className="flex gap-2 max-w-[90%]">
            <div className="w-8 h-8 rounded-full bg-[#CC5833] text-white flex items-center justify-center shrink-0 shadow-md">
              <Bot size={16} />
            </div>
            <div className="p-3 rounded-2xl text-sm bg-white border border-stone-200/50 text-[#1C1917] rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[46px]">
              <div className="w-1.5 h-1.5 bg-[#6B7260]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-[#6B7260]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-[#6B7260]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSendChat} className="p-3 bg-white border-t border-stone-200/60 flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Escribe tu duda aquí..."
          className="flex-1 bg-[#F2F0E9] border border-stone-200/60 rounded-xl px-4 py-2 text-sm text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#CC5833]/40"
        />
        <button
          type="submit"
          disabled={isChatLoading || !chatInput.trim()}
          className="bg-[#2E4036] text-[#CC5833] w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#3D5548] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
        >
          <Send size={18} className="ml-1" />
        </button>
      </form>
    </div>

    <button
      onClick={() => setIsChatOpen(!isChatOpen)}
      className="w-16 h-16 bg-[#CC5833] text-white rounded-full shadow-[0_0_20px_rgba(204,88,51,0.45)] flex items-center justify-center hover:scale-105 transition-transform btn-shine relative pointer-events-auto"
    >
      {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
      {!isChatOpen && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#4A7C59] rounded-full border-2 border-white animate-pulse"></span>
      )}
    </button>
  </div>
);
