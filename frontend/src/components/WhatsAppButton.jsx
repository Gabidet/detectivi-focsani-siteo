import React from 'react';
import { companyInfo } from '../data/mockData';

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${companyInfo.whatsapp}?text=Bună%20ziua!%20Doresc%20mai%20multe%20informații%20despre%20serviciile%20de%20detectiv.`;

  return (
    <>
      {/* CSS for shake animation */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            10%, 30%, 50%, 70%, 90% { transform: rotate(-5deg); }
            20%, 40%, 60%, 80% { transform: rotate(5deg); }
          }
          
          @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          
          .whatsapp-button {
            animation: shake 2s ease-in-out infinite;
            animation-delay: 3s;
          }
          
          .whatsapp-button:hover {
            animation: none;
            transform: scale(1.1);
          }
          
          .pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          }
        `}
      </style>
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button fixed bottom-24 right-4 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
        aria-label="Contactează-ne pe WhatsApp"
      >
        {/* Pulse ring effect */}
        <span className="pulse-ring absolute w-full h-full bg-[#25D366] rounded-full opacity-75"></span>
        
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white relative z-10"
        >
          <path d="M16.004 0C7.168 0 0 7.168 0 16.004c0 2.824.736 5.584 2.136 8.016L0 32l8.256-2.096A15.94 15.94 0 0 0 16.004 32C24.84 32 32 24.84 32 16.004 32 7.168 24.84 0 16.004 0zm0 29.36a13.32 13.32 0 0 1-6.8-1.864l-.488-.288-5.056 1.328 1.352-4.936-.32-.504A13.28 13.28 0 0 1 2.64 16.004C2.64 8.624 8.624 2.64 16.004 2.64c7.376 0 13.36 5.984 13.36 13.364 0 7.376-5.984 13.356-13.36 13.356zm7.336-10.008c-.4-.2-2.376-1.168-2.744-1.304-.368-.132-.64-.2-.908.2-.268.4-1.044 1.304-1.28 1.576-.236.268-.472.304-.872.104-.4-.2-1.692-.624-3.224-1.988-1.192-1.064-1.996-2.376-2.232-2.776-.236-.4-.024-.616.18-.816.184-.18.4-.472.6-.708.2-.236.268-.4.4-.668.136-.268.068-.5-.032-.7-.104-.2-.908-2.188-1.244-2.996-.328-.784-.66-.68-.908-.692-.236-.008-.504-.012-.772-.012-.268 0-.704.1-1.072.5-.368.4-1.408 1.376-1.408 3.356 0 1.98 1.44 3.892 1.64 4.16.2.268 2.832 4.32 6.864 6.056.96.412 1.708.66 2.292.844.964.308 1.84.264 2.532.16.772-.116 2.376-.972 2.712-1.908.336-.94.336-1.744.236-1.912-.1-.168-.368-.268-.768-.468z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Scrie-ne pe WhatsApp
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
