"use client"
import AnimatedBackground from "./components/AnimatedBackground";
import FlipClock from "./components/FlipClock";
import useClock from "./hooks/useClock";

export default function Home() {
  const { hour, minute, second } = useClock('Asia/Karachi');

  return (
    <div className="flex flex-grow flex-col items-center justify-center relative z-10 p-4 sm:p-8 md:p-12">
      <AnimatedBackground />
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700">
        <FlipClock value={hour} />
        <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold" style={{textShadow: '0 0 10px rgba(0, 180, 255, 0.7)'}}>:</div>
        <FlipClock value={minute} />
        <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold" style={{textShadow: '0 0 10px rgba(0, 180, 255, 0.7)'}}>:</div>
        <FlipClock value={second} />
      </div>
    </div>
  );
}