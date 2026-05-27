import React from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export const AIChatWidget = ({ isChatOpen, setIsChatOpen, chatMessages, chatInput, setChatInput, isChatLoading, chatEndRef, handleSendChat }) => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    <div
      className={`bg-[#04100b] border border-[#e2b764]/30 rounded-2xl shadow-2xl mb-4 w-[90vw] sm:w-[360px] overflow-hidden transition-all duration-300 origin-bottom-right ${
        isChatOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#0a2517] p-4 flex justify-between items-center border-b border-[#e2b764]/20">
        <div className="flex items-center gap-3 text-white">
          <div className="relative">
            <Bot size={24} className="text-[#e2b764]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0a2517]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial font-bold text-base leading-none">Asesora Naturale</span>
            <span className="text-[10px] text-white/60 tracking-wider">EN LÍNEA</span>
          </div>
        </div>
        <button onClick={() => setIsChatOpen(false)} className="text-white/60 hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#fcfbf9]">
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`flex gap-2 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#0a2517] text-[#e2b764]' : 'bg-[#e2b764] text-[#04100b] shadow-md'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'bg-[#0a2517] text-white rounded-tr-sm' : 'bg-white border border-gray-100 text-[#04100b] rounded-tl-sm shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isChatLoading && (
          <div className="flex gap-2 max-w-[90%]">
            <div className="w-8 h-8 rounded-full bg-[#e2b764] text-[#04100b] flex items-center justify-center shrink-0 shadow-md">
              <Bot size={16} />
            </div>
            <div className="p-3 rounded-2xl text-sm bg-white border border-gray-100 text-[#04100b] rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[46px]">
              <div className="w-1.5 h-1.5 bg-[#04100b]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-[#04100b]/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-[#04100b]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSendChat} className="p-3 bg-white border-t border-gray-200 flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Escribe tu duda aquí..."
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-[#04100b] focus:outline-none focus:ring-1 focus:ring-[#e2b764]"
        />
        <button
          type="submit"
          disabled={isChatLoading || !chatInput.trim()}
          className="bg-[#0a2517] text-[#e2b764] w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#1a5c36] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
        >
          <Send size={18} className="ml-1" />
        </button>
      </form>
    </div>

    <button
      onClick={() => setIsChatOpen(!isChatOpen)}
      className="w-16 h-16 bg-[#e2b764] text-[#04100b] rounded-full shadow-[0_0_20px_rgba(226,183,100,0.5)] flex items-center justify-center hover:scale-105 transition-transform btn-shine relative pointer-events-auto"
    >
      {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
      {!isChatOpen && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#04100b] animate-pulse"></span>
      )}
    </button>
  </div>
);
