import { useState } from 'react';
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

interface NotesAppProps {
  onClose: () => void;
}

// ── 노트 내용 — 여기서 편집하세요 ────────────────────────────────
const noteTitle = "은재 생일";
const noteContent = `은재야 깜짝 놀랐지~
어떻게 기억에 남을 첫 생일 선물을 줄까 고민 많이 하다가 이렇게 준비했어 :)
우리가 같이 만나면서 보내는 첫 생일인 만큼,  오랫동안 정성 들여서 준비할 수 있는 선물을 만들고 싶었어.
비록 꽤 허접하지만 열심히 만들었으니까 흐린 눈 하고 봐죠…

21번째 생일 너무너무 축하해!! 
수천마리의 정자들과 경쟁해서 태어나줘서 정말 감사해ㅠㅠ

5월 18일이 나한테는 그냥 다른 날들과 같이 스쳐지나가는 날이였는데, 덕분에 한 해에 특별한 날이 하루 더 생겨서 너무 행복해! 
근데 우리가 함께있으면서 앞으로 또 특별한 날들이 많이 생겨갈거라고 생각하니까 정말 내 삶이 얼마나 더 풍요로워질지 벌써부터 기대돼 :)
정말 같이 있으면서 내 인생을 여러가지 색으로 채워가는 느낌이야.

정말 너를 만나면서, 누군가가 태어나줘서 감사하다는 느낌을 이번에 처음 느껴보는것 같아. 
너를 만나기 전엔 어떤 행복으로 살았는지 기억이 안 날 정도로, 이제는 네가 내 삶에 있는 게 너무 자연스럽고 당연해졌어.
그래서 우리가 함께하지 않는 미래는 아예 상상조 안돼.
무엇보다 이 마음을 너도 같은 크기로 느껴서 서로 공감하고 나눌수 있다는 게 정말 큰 축복 같아.

곧 있으면 전역인데, 그동안 군생활 하느라 너무 수고 많았어.
항상 주어진 자리에서 최선을 다하는 모습이 정말 멋있고 보기 좋아 :)
아마 주변 사람들도 너의 밝고 따뜻한 에너지 덕분에 힘을 많이 받았을 것 같아.
사실 나도 너의 그 밝은 에너지에 이끌렸는지도 몰라 ㅎㅎ
이렇게 멋있고 밝고 건강하게 자라줘서 너무 고맙고 대견해 :)

앞으로 살아가면서 힘든 일도, 예상치 못한 시행착오도 분명 있겠지만, 지금처럼 예쁘게 방긋방긋 웃으면서 다 잘 헤쳐나가길 기도할게.

나도 누군가를 이렇게 진심으로 축하하고,
한 사람의 행복을 누구보다 바라게 되는 마음을 알게 해줘서 고마워.
또 너는 그만큼 나한테 정말 소중한 사람이 되어줘서 고마워.

비록 오늘 직접 옆에서 축하해주지는 못하지만, 오늘만큼은 너만 온전히 사랑 많이 받고, 축하도 많이 받는 하루가 됐으면 좋겠어.

우리 20대의 시작을 함께할 수 있어서 너무 감사하고, 나중에 100대 초반(?)까지 서로 아껴주고 챙겨주면서 오래오래 함께하자~♡

진짜 많이많이많이 사랑해 ♡♡♡



-은재사랑이`;

export default function NotesApp({ onClose }: NotesAppProps) {
  const [showNote, setShowNote] = useState(false);

  return (
      <motion.div
        className="w-full h-full flex flex-col relative"
        style={{ background: '#000' }}
        drag={showNote ? false : "y"}
        dragConstraints={{ top: -300, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => { if (info.offset.y < -200) onClose(); }}
      >
      {/* ── STATUS BAR ── */}
      <div className="absolute top-[14px] left-0 right-0 px-5 flex justify-between items-center text-white z-10">
        <div className="text-[17px]" style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 440, transform: 'scaleY(0.9)', marginLeft: '20px' }}>
          09:06
        </div>
        <div className="flex gap-[6px] items-center" style={{ marginRight: '10px' }}>
          <IosSignal />
          <IosWifi />
          <IosBattery />
        </div>
      </div>

      {!showNote ? (
        /* ── 노트 목록 화면 ── */
        <>
          <div className="mt-[44px] px-4 pt-3 pb-2 flex items-center justify-between">
            <button onClick={onClose} className="flex items-center gap-1">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M8 2L2 8L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-white text-[16px] font-semibold" style={{ fontFamily: '-apple-system, sans-serif' }}>
              새로운 폴더
            </span>
            <div className="flex items-center gap-2">
              <div className="w-[36px] h-[36px] rounded-full bg-[#2C2C2E] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v10m0 0l-3-3m3 3l3-3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <rect x="4" y="14" width="16" height="7" rx="2" stroke="white" strokeWidth="1.8"/>
                </svg>
              </div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#2C2C2E] flex items-center justify-center">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2" cy="2" r="1.5" fill="white"/>
                  <circle cx="8" cy="2" r="1.5" fill="white"/>
                  <circle cx="14" cy="2" r="1.5" fill="white"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="px-4 pt-4 pb-2">
            <span className="text-white text-[20px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>오늘</span>
          </div>

          <div className="px-4">
            <button onClick={() => setShowNote(true)} className="w-full text-left active:opacity-70 transition-opacity">
              <div className="rounded-2xl px-4 py-3" style={{ background: '#1C1C1E' }}>
                <div className="text-white text-[16px] font-semibold mb-1" style={{ fontFamily: '-apple-system, sans-serif' }}>
                  {noteTitle}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-[13px]" style={{ fontFamily: '-apple-system, sans-serif' }}>23:20</span>
                  <span className="text-white/30 text-[13px]" style={{ fontFamily: '-apple-system, sans-serif' }}>
                    {noteContent.split('\n')[0]}
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="flex-1" />
          <div className="pb-2 flex items-center justify-center">
            <div className="w-36 h-[5px] bg-white/60 rounded-full" />
          </div>
        </>
      ) : (
        /* ── 노트 내용 화면 ── */
        <>
        <div className="mt-[44px] px-4 pt-3 pb-2 flex items-center justify-between">
          {/* 왼쪽: 돌아가기 화살표 */}
          <button onClick={() => setShowNote(false)} className="flex items-center gap-1">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="#FFD60A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        
          {/* 오른쪽: 공유 + 점3개 + 완료 모두 노란색 */}
          <div className="flex items-center gap-3">
            <button>
              <svg width="18" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v13M8 6l4-4 4 4" stroke="#FFD60A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" stroke="#FFD60A" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
            <button>
              <svg width="20" height="5" viewBox="0 0 20 5" fill="none">
                <circle cx="2.5" cy="2.5" r="2" fill="#FFD60A"/>
                <circle cx="10" cy="2.5" r="2" fill="#FFD60A"/>
                <circle cx="17.5" cy="2.5" r="2" fill="#FFD60A"/>
              </svg>
            </button>
            <button
              onClick={() => setShowNote(false)}
              className="text-[#FFD60A] text-[17px] font-semibold"
              style={{ fontFamily: '-apple-system, sans-serif' }}
            >
              완료
            </button>
          </div>
        </div>

          <div className="px-5 pt-4 pb-2">
            <h1 className="text-white text-[28px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>
              {noteTitle}
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pt-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            <p
              className="text-white text-[16px] leading-relaxed whitespace-pre-wrap"
              style={{ fontFamily: '-apple-system, sans-serif' }}
            >
              {noteContent}
            </p>
          </div>

          <div className="pb-2 pt-3 flex items-center justify-center">
            <div className="w-36 h-[5px] bg-white/60 rounded-full" />
          </div>
        </>
      )}
    </motion.div>
  );
}