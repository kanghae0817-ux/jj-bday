import { useState, useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import birthdaySong from '../../../songs/송은재 생일짠.mp3';

interface BirthdayCakeAppProps {
  onClose: () => void;
}

export default function BirthdayCakeApp({ onClose }: BirthdayCakeAppProps) {
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);
  const [showCongrats, setShowCongrats] = useState(false);
  const birthdayAudioRef = useRef<HTMLAudioElement | null>(null);

  const allCandlesOut = candlesLit.every((lit) => !lit);

  useEffect(() => {
    if (allCandlesOut && !showCongrats) {
      setShowCongrats(true);

      // 생일 노래 재생
      const audio = new Audio(birthdaySong);
      birthdayAudioRef.current = audio;
      audio.play();

      // 컨페티
      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff69b4', '#ffd700', '#87ceeb', '#98fb98'] });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff69b4', '#ffd700', '#87ceeb', '#98fb98'] });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [allCandlesOut, showCongrats]);

  // 화면 나갈 때 노래 멈춤
  useEffect(() => {
    return () => {
      birthdayAudioRef.current?.pause();
    };
  }, []);

  const blowCandle = (index: number) => {
    if (candlesLit[index]) {
      const newCandles = [...candlesLit];
      newCandles[index] = false;
      setCandlesLit(newCandles);
    }
  };

  const resetCandles = () => {
    birthdayAudioRef.current?.pause();
    birthdayAudioRef.current = null;
    setCandlesLit([true, true, true, true, true]);
    setShowCongrats(false);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col">
      {/* Status Bar */}
      <div className="h-[50px]" />

      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <button onClick={() => { birthdayAudioRef.current?.pause(); onClose(); }} className="mr-2">
          <ChevronLeft className="w-6 h-6 text-pink-600" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {!showCongrats ? (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-8 text-center">
              생일 축하해! 🎂
            </h2>

            {/* Cake */}
            <div className="relative mb-8">
              {/* Candles */}
              <div className="flex gap-4 mb-4 justify-center">
                {candlesLit.map((lit, index) => (
                  <button
                    key={index}
                    onClick={() => blowCandle(index)}
                    disabled={!lit}
                    className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
                  >
                    {lit ? (
                      <>
                        <div className="relative">
                          <div className="w-3 h-8 bg-gradient-to-b from-yellow-200 to-orange-300 rounded-t-full animate-pulse" />
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full animate-bounce opacity-80" />
                        </div>
                        <div className="w-2 h-12 bg-red-400 rounded" />
                      </>
                    ) : (
                      <>
                        <div className="w-3 h-8 bg-gray-300 rounded-t-full opacity-50" />
                        <div className="w-2 h-12 bg-gray-400 rounded opacity-50" />
                      </>
                    )}
                  </button>
                ))}
              </div>

              {/* Cake Base */}
              <div className="w-72 h-32 bg-gradient-to-br from-pink-300 to-pink-400 rounded-t-[50%] shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-pink-400 to-pink-300" />
                <div className="absolute top-4 left-0 right-0 flex justify-around px-8">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full" />
                  <div className="w-6 h-6 bg-blue-300 rounded-full" />
                  <div className="w-6 h-6 bg-green-300 rounded-full" />
                  <div className="w-6 h-6 bg-purple-300 rounded-full" />
                </div>
              </div>

              {/* Cake Plate */}
              <div className="w-80 h-4 bg-gray-200 rounded-full shadow-lg -mt-1 -mx-4" />
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="text-8xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-3xl font-bold text-pink-600">
              21번째 생일 축하해!
            </h2>
            <p className="text-xl text-purple-600">
              너무너무 사랑해 💝
            </p>
            <button
              onClick={resetCandles}
              className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
            >
              다시 불기
            </button>
          </div>
        )}
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-36 h-1.5 bg-pink-400 rounded-full" />
      </div>
    </div>
  );
}