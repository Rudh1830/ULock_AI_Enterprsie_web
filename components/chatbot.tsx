"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-background border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <h3 className="font-medium">ULockAI Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                ✕
              </button>
            </div>
            <div className="flex-1 p-4 bg-secondary/20 overflow-y-auto">
              <div className="bg-secondary p-3 rounded-lg rounded-tl-none text-sm w-11/12 text-foreground">
                Hi! How can I help you with AI Security, Web Development, or our other services today?
              </div>
            </div>
            <div className="p-3 border-t border-border bg-background">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-3 py-2 bg-secondary rounded-lg text-sm outline-none focus:ring-1 ring-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
