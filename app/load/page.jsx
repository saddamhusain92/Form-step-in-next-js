'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LoadingPage() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 2000);
    const timer2 = setTimeout(() => setStep(3), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 2000);
    const timer2 = setTimeout(() => setStep(3), 4000);
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <main>
            <header className="w-full h-[7rem] bg-[#414042] px-3 py-5">
        <p className="logo font-extrabold text-white text-3xl"> Groroot . </p>
        <p className="text-white">This hair test is co-created with experts</p>
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="mb-8">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-[#9BBA70] rounded-full border-t-transparent"
        />
      </div>
      
      <h2 className="text-xl font-semibold mb-6">Customising your plan...</h2>
      
      <div className="space-y-4 w-64">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-[#9BBA70] flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
          <span className="ml-3">Assessing your response</span>
        </div>
        
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full ${step >= 2 ? 'bg-[#9BBA70]' : 'border-2 border-gray-300'} flex items-center justify-center`}>
            {step >= 2 ? (
              <span className="text-white text-sm">✓</span>
            ) : (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            )}
          </div>
          <span className="ml-3">Analyzing hair loss</span>
        </div>
        
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full ${step >= 3 ? 'bg-[#9BBA70]' : 'border-2 border-gray-300'} flex items-center justify-center`}>
            {step >= 3 ? (
              <span className="text-white text-sm">✓</span>
            ) : (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            )}
          </div>
          <span className="ml-3">Building recommendations</span>
        </div>
      </div>
    </div>
    </main>
    

  )
}