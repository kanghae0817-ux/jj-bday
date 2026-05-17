import { useState } from 'react';
import { motion } from 'motion/react';
import nuh from '../../../songs/nuh.mp4';
import bamtol from '../../../images/bamtol.jpeg'
import songaji from '../../../images/songaji.jpeg'
import kot from '../../../images/kot.jpeg'
import demian from '../../../images/demian.jpeg'
import hyo from '../../../images/hyo.jpeg'
import half from '../../../images/0.5x.jpeg'

function IosSignal() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
      <rect x="0"  y="8.5" width="2.5" height="3.5" rx="0.5" opacity="0.35"/>
      <rect x="4"  y="6"   width="2.5" height="6"   rx="0.5" opacity="0.35"/>
      <rect x="8"  y="3"   width="2.5" height="9"   rx="0.5"/>
      <rect x="12" y="0"   width="2.5" height="12"  rx="0.5"/>
    </svg>
  );
}
function IosWifi() {
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
      <circle cx="7.5" cy="10.5" r="1.4" fill="white"/>
      <path d="M4.8 7.8C5.6 7 6.5 6.6 7.5 6.6s1.9.4 2.7 1.2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2.2 5.2C3.7 3.7 5.5 2.9 7.5 2.9s3.8.8 5.3 2.3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IosBattery() {
  return (
    <svg width="25" height="15" viewBox="0 0 25 12" fill="none">
      <rect x="0.5" y="1" width="23" height="11" rx="2.5" stroke="white" strokeOpacity="0.4" strokeWidth="1"/>
      <rect x="2" y="2.5" width="5" height="8" rx="1.5" fill="#FF3B30"/>
      <path d="M22.5 4.5v3a1.5 1.5 0 0 0 0-3z" fill="white" fillOpacity="0.45"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="16" viewBox="0 0 24 24" fill="white" opacity="0.35">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

interface PhotosAppProps {
  onClose: () => void;
}

const albums = [
  { name: '밤톨머리', count: 20, img: bamtol },
  { name: '갓 태어난 송아지', count: 1, img: songaji },
  { name: '은재가 준 꽃', count: 35, img: kot },
  { name: '데미안 개봉박두 전', count: 27, img: demian },
  { name: '은재 혓바닥', count: 153, img: hyo },
  { name: '0.5x', count: 82, img: half },
]

export default function PhotosApp({ onClose }: PhotosAppProps) {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <motion.div
      className="w-full h-full flex flex-col relative"
      style={{ background: '#000' }}
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => { if (info.offset.y < -200) onClose(); }}
    >
      {/* STATUS BAR */}
      <div className="absolute top-[14px] left-0 right-0 px-5 flex justify-between items-center text-white z-10">
        <div className="text-[17px]" style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 600, marginLeft: '20px' }}>
          09:06
        </div>
        <div className="flex gap-[6px] items-center" style={{ marginRight: '10px' }}>
          <IosSignal /><IosWifi /><IosBattery />
        </div>
      </div>

      {!showHidden ? (
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>

          {/* HEADER */}
          <div className="pt-[54px] px-4 pb-2 flex justify-between items-center">
            <h1 className="text-[34px] font-black text-white" style={{ fontFamily: '-apple-system, sans-serif' }}>
              사진
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-[6px] px-3 py-[7px] rounded-full" style={{ background: '#2C2C2E' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/>
                </svg>
                <span className="text-white text-[13px] font-medium" style={{ fontFamily: '-apple-system, sans-serif' }}>찾기</span>
              </div>
              <div className="relative">
                <div className="w-[36px] h-[36px] rounded-full bg-[#FF6B8A] flex items-center justify-center">
                  <span className="text-white text-[14px] font-bold">DS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-[14px] h-[14px] bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">!</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── UTILITIES ── */}
          <div className="px-4 mt-7">
            <button className="flex items-center gap-[2px] mb-3">
              <span className="text-white text-[22px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>기타</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="rounded-[12px] overflow-hidden" style={{ background: '#1C1C1E' }}>
              {/* Favorites */}
              <div className="flex items-center justify-between px-4" style={{ height: '50px' }}>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-white text-[16px]" style={{ fontFamily: '-apple-system, sans-serif' }}>즐겨찾기</span>
                </div>
                <span className="text-white/40 text-[15px]" style={{ fontFamily: '-apple-system, sans-serif' }}>5,632</span>
              </div>

              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.1)', marginLeft: '52px' }} />

              {/* Hidden */}
              <button
                onClick={() => setShowHidden(true)}
                className="w-full flex items-center justify-between px-4 active:opacity-60"
                style={{ height: '50px' }}
              >
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                  <span className="text-white text-[16px]" style={{ fontFamily: '-apple-system, sans-serif' }}>가려진 항목</span>
                </div>
                <LockIcon />
              </button>

              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.1)', marginLeft: '52px' }} />

              {/* Recently Deleted */}
              <div className="flex items-center justify-between px-4" style={{ height: '50px' }}>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                  </svg>
                  <span className="text-white text-[16px]" style={{ fontFamily: '-apple-system, sans-serif' }}>최근 삭제된 항목</span>
                </div>
                <LockIcon />
              </div>

              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.1)', marginLeft: '52px' }} />

              {/* Duplicates */}
              <div className="flex items-center justify-between px-4" style={{ height: '50px' }}>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <span className="text-white text-[16px]" style={{ fontFamily: '-apple-system, sans-serif' }}>중복된 항목</span>
                </div>
                <span className="text-white/40 text-[15px]" style={{ fontFamily: '-apple-system, sans-serif' }}>3,187</span>
              </div>
            </div>
          </div>

          {/* ── ALBUMS ── */}
          <div className="mt-8">
            <div className="px-4 mb-3">
              <button className="flex items-center gap-[2px]">
                <span className="text-white text-[22px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>앨범</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* 3 rows x 2 cols, horizontal scroll
                onPointerDown stopPropagation prevents motion drag-y from stealing the touch */}
            <div
              className="overflow-x-auto"
              style={{ scrollbarWidth: 'none', paddingLeft: '16px' }}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: 'repeat(3, 72px)',
                  gridAutoFlow: 'column',
                  gridAutoColumns: 'calc(21vw - 8px)',
                  gap: '10px',
                  width: 'max-content',
                  paddingRight: '16px',
                  paddingBottom: '4px',
                }}
              >
                {albums.map((album, i) => (
                  <div
                    key={i}
                    className="flex items-center rounded-[12px] overflow-hidden active:opacity-70"
                    style={{ background: '#1C1C1E', height: '72px' }}
                  >
                    {/* Thumbnail square */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center text-[30px]"
                      style={{ width: '72px', height: '72px', background: '#2C2C2E' }}
                    >
                      {/* swap for: <img src={...} className="w-full h-full object-cover" /> */}
                      <img src={album.img} className="w-full h-full object-cover" />
                    </div>
                    {/* Label */}
                    <div className="flex flex-col min-w-0 px-3">
                      <span
                        className="text-white text-[10px] font-medium truncate"
                        style={{ fontFamily: '-apple-system, sans-serif' }}
                      >
                        {album.name}
                      </span>
                      <span
                        className="text-white/40 text-[13px]"
                        style={{ fontFamily: '-apple-system, sans-serif' }}
                      >
                        {album.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* HIDDEN VIEW */
        <div className="flex-1 bg-black flex flex-col items-center justify-center relative">
          <button
            onClick={() => setShowHidden(false)}
            className="absolute top-16 left-4 flex items-center gap-1 z-10"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white text-[16px]" style={{ fontFamily: '-apple-system, sans-serif' }}>앨범</span>
          </button>
          <video className="w-full" style={{ aspectRatio: '9/16' }} controls autoPlay loop playsInline>
            <source src={nuh} type="video/mp4" />
          </video>
        </div>
      )}

    </motion.div>
  );
}
