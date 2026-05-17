import { motion } from 'motion/react';

// ─── ICONOS iOS ────────────────────────────────────────────────
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

interface SafariAppProps {
  onClose: () => void;
}

const searchHistory = [
  '남자친구가 자꾸 펭귄이래요',
  '삥구이노 데 친퀘테레',
  '침 많이 흘리는 이유',
  '턱받이 남성 성인용',
  'COMPRO ORO',
  '코가 건조하면 시도때도 없이 코 파나요?',
  '남자친구가 자꾸 똥 안부만 물어봐요',
  '데미안 가라앉히는법',
  '겨드랑이 페티쉬가 있나요?',
  '남자친구 헛소리',
];

export default function SafariApp({ onClose }: SafariAppProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col relative"
      style={{ background: '#000' }}
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => {
        if (info.offset.y < -200) onClose();
      }}
    >
      {/* ── STATUS BAR ── */}
      <div className="absolute top-[14px] left-0 right-0 px-5 flex justify-between items-center text-white z-10">
        <div className="text-[17px]" style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 440, transform: 'scaleY(0.9)', marginLeft: '20px' }}>
          00:26
        </div>
        <div className="flex gap-[6px] items-center" style={{ marginRight: '10px' }}>
          <IosSignal />
          <IosWifi />
          <IosBattery />
        </div>
      </div>

      {/* ── 상단 X 버튼 ── */}
      <div className="mt-[44px] px-4 pt-3 pb-2 flex justify-end">
        <button
          onClick={onClose}
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
          style={{ background: 'rgba(60,60,60,0.8)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ── 최근 검색 헤더 ── */}
      <div className="px-4 pt-4 pb-2 flex justify-between items-center">
        <span className="text-white/60 text-[13px]" style={{ fontFamily: '-apple-system, sans-serif' }}>
          최근 검색
        </span>
        <span className="text-white/60 text-[13px]" style={{ fontFamily: '-apple-system, sans-serif' }}>
          모두 지우기
        </span>
      </div>

      {/* ── 검색 기록 리스트 ── */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        {searchHistory.map((item, i) => (
          <div key={i}>
            <div className="px-4 py-[13px] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* 서치 아이콘 */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.8" opacity="0.7"/>
                  <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
                </svg>
                <span
                  className="text-white text-[16px]"
                  style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 400 }}
                >
                  {item}
                </span>
              </div>
              {/* 화살표 아이콘 */}
              <div
                className="w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(60,60,60,0.8)' }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M11 3L3 11M3 3h8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                </svg>
              </div>
            </div>
            {/* 구분선 */}
            {i < searchHistory.length - 1 && (
              <div className="ml-[46px] mr-4 h-[0.5px]" style={{ background: 'rgba(255,255,255,0.12)' }} />
            )}
          </div>
        ))}
      </div>

      {/* ── 검색바 (하단) ── */}
      <div
        className="px-4 py-3 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#1C1C1E' }}
      >
        <div
          className="w-full px-4 py-3 rounded-[12px] flex items-center gap-2"
          style={{ background: 'rgba(60,60,60,0.6)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.8" opacity="0.5"/>
            <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
          </svg>
          <span
            className="text-white/40 text-[15px]"
            style={{ fontFamily: '-apple-system, sans-serif' }}
          >
            검색 또는 웹사이트 이름 입력
          </span>
        </div>
      </div>

      {/* HOME INDICATOR */}
      <div className="pb-2 flex items-center justify-center" style={{ background: '#1C1C1E' }}>
        <div className="w-36 h-[5px] bg-white/60 rounded-full" />
      </div>
    </motion.div>
  );
}