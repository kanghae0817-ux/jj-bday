import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import youtubeIconImg from '../../../images/youtube_music_2.jpg';
import SongBdImg from '../../../images/bd-song.jpeg';
import birthdaySong from '../../../songs/송은재 생일짠.mp3';
import strasbourg from '../../../images/strasbourg.jpeg';
import ipanema from '../../../images/ipanema.jpeg';
import love from '../../../images/love.jpeg';
import wave from '../../../images/wave.jpeg';
import warm from '../../../images/warm.jpeg';
import ui from '../../../images/u&i.jpeg';
import got_to_be_real from '../../../images/got-to-be-real.jpeg';
import mas_que from '../../../images/mas-que-nada.jpeg';

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

interface YouTubeMusicAppProps {
  onClose: () => void;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  color1: string;
  color2: string;
  audioUrl: string;
}

// ── 노래 목록 — title, artist, emoji, 그라디언트 색상 편집 가능 ──
const songs: Song[] = [
  { id: 1, title: 'What You Won\'t Do for Love', artist: 'Bobby Caldwell',           image: love,           color1: '#8B5CF6', color2: '#4C1D95', audioUrl: '' },
  { id: 2, title: 'Mas Que Nada',               artist: 'Sergio Mendes',             image: mas_que,        color1: '#EC4899', color2: '#9D174D', audioUrl: '' },
  { id: 3, title: 'Got to Be Real',             artist: 'Cheryl Lynn',               image: got_to_be_real, color1: '#F59E0B', color2: '#92400E', audioUrl: '' },
  { id: 4, title: 'Warm on a Cold Night',       artist: 'HONNE',                     image: warm,           color1: '#EF4444', color2: '#7F1D1D', audioUrl: '' },
  { id: 5, title: 'You & I',                    artist: 'Daebull & Rude Jude',       image: ui,             color1: '#F472B6', color2: '#831843', audioUrl: '' },
  { id: 6, title: 'The Girl from Ipanema',      artist: 'Stan Getz & João Gilberto', image: ipanema,        color1: '#3B82F6', color2: '#1E3A8A', audioUrl: '' },
  { id: 7, title: 'Strasbourg / St. Denis',     artist: 'Roy Hargrove',              image: strasbourg,     color1: '#10B981', color2: '#064E3B', audioUrl: '' },
  { id: 8, title: 'WAVE',                       artist: 'Tom Jobim',                 image: wave,           color1: '#6366F1', color2: '#312E81', audioUrl: '' },
  { id: 9, title: 'Birthday Song',             artist: 'Hae Kang',                  image: SongBdImg,      color1: '#F97316', color2: '#7C2D12', audioUrl: birthdaySong },
];

// ── 하단 탭 아이콘 ──────────────────────────────────────────────
function HomeTabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}
function SampleTabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <polygon points="5,3 19,12 5,21" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <line x1="5" y1="3" x2="5" y2="21" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="19" y1="3" x2="19" y2="21" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function ExploreTabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8"/>
      <line x1="12" y1="3" x2="12" y2="9" stroke="white" strokeWidth="1.8"/>
      <line x1="12" y1="15" x2="12" y2="21" stroke="white" strokeWidth="1.8"/>
      <line x1="3" y1="12" x2="9" y2="12" stroke="white" strokeWidth="1.8"/>
      <line x1="15" y1="12" x2="21" y2="12" stroke="white" strokeWidth="1.8"/>
    </svg>
  );
}
function LibraryTabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h4v16H4zM10 4h4v16h-4zM16 4l4 2v12l-4 2V4z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

export default function YouTubeMusicApp({ onClose }: YouTubeMusicAppProps) {
  const [playingSong, setPlayingSong] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSongClick = (songId: number) => {
    const song = songs.find(s => s.id === songId);
    if (playingSong === songId) {
      audioRef.current?.pause();
      setPlayingSong(null);
    } else {
      if (song?.audioUrl && audioRef.current) {
        audioRef.current.src = song.audioUrl;
        audioRef.current.play();
      }
      setPlayingSong(songId);
    }
  };

  const tabs = [
    { label: '홈',    icon: <HomeTabIcon /> },
    { label: '샘플',  icon: <SampleTabIcon /> },
    { label: '둘러보기', icon: <ExploreTabIcon /> },
    { label: '보관함', icon: <LibraryTabIcon /> },
  ];

  return (
    <motion.div
      className="w-full h-full flex flex-col"
      style={{ background: '#0A0A0A' }}
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
          09:06
        </div>
        <div className="flex gap-[6px] items-center" style={{ marginRight: '10px' }}>
          <IosSignal />
          <IosWifi />
          <IosBattery />
        </div>
      </div>

      {/* ── HEADER: 유튜브 뮤직 로고 + 아이콘들 ── */}
      <div className="px-4 py-3 mt-[44px] flex justify-between items-center">
        {/* 왼쪽: 유튜브 뮤직 로고 */}
        <div className="flex items-center gap-2">
          <img src={youtubeIconImg} alt="YT Music" className="w-[32px] h-[32px] rounded-[8px]"/>
          <span className="text-white text-[18px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>
            Music
          </span>
        </div>

        {/* 오른쪽: 알림, 서치, 프로필 */}
        <div className="flex items-center gap-4">
          {/* 알림 버튼 */}
          <div className="relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            {/* 빨간 뱃지 */}
            <div className="absolute -top-1 -right-1 w-[14px] h-[14px] bg-[#FF0000] rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">2</span>
            </div>
          </div>
          {/* 서치 버튼 */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.8"/>
            <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          {/* 프로필 버튼 */}
          <div className="w-[30px] h-[30px] rounded-full bg-[#4A4A4A] flex items-center justify-center">
            <span className="text-white text-[13px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>E</span>
          </div>
        </div>
      </div>

      {/* ── 카테고리 태그 ── */}
      <div className="px-4 pb-3 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {['팟캐스트', '휴식', '잠잘 때', '로맨스', '슬픔', '에너지'].map((tag, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-4 py-1.5 rounded-full border border-white/30 text-white text-[12px]"
            style={{ fontFamily: '-apple-system, sans-serif', background: 'rgba(255,255,255,0.08)' }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* ── 스크롤 콘텐츠 ── */}
      <div className="flex-1 overflow-y-auto px-4" style={{ scrollbarWidth: 'none' }}>

        {/* EUNJAE SONG 빠른 선곡 헤더 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-[36px] h-[36px] rounded-full bg-[#4A4A4A] flex items-center justify-center">
              <span className="text-white text-[14px] font-bold">E</span>
            </div>
            <div>
              <div className="text-white/60 text-[11px]" style={{ fontFamily: '-apple-system, sans-serif' }}>EUNJAE SONG</div>
              <div className="text-white text-[17px] font-bold" style={{ fontFamily: '-apple-system, sans-serif' }}>빠른 선곡</div>
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* ── 3x3 그리드 ── */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => handleSongClick(song.id)}
              className="flex flex-col gap-1 active:scale-95 transition-transform text-left"
            >
              <div
                className="w-full aspect-square rounded-lg flex items-center justify-center text-3xl relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${song.color1}, ${song.color2})` }}
              >
                <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
                {/* 재생 중 오버레이 */}
                {playingSong === song.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                    <div className="flex gap-[3px] items-end h-[18px]">
                      {[1,2,3].map((b) => (
                        <div
                          key={b}
                          className="w-[3px] bg-white rounded-full"
                          style={{
                            height: `${[10, 18, 13][b-1]}px`,
                            animation: `bounce${b} 0.6s infinite alternate`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="text-white text-[10px] font-medium truncate" style={{ fontFamily: '-apple-system, sans-serif' }}>
                {song.title}
              </div>
              <div className="text-white/50 text-[9px] truncate" style={{ fontFamily: '-apple-system, sans-serif' }}>
                {song.artist}
              </div>
            </button>
          ))}
        </div>
      </div>

      <audio ref={audioRef} />

      {/* ── 하단 탭 바 ── */}
      <div
        className="flex justify-around items-center pt-3 pb-6 px-2 border-t border-white/10"
        style={{ background: '#111' }}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="flex flex-col items-center gap-1"
          >
            <div style={{ opacity: activeTab === i ? 1 : 0.45 }}>
              {tab.icon}
            </div>
            <span
              className="text-[10px]"
              style={{
                fontFamily: '-apple-system, sans-serif',
                color: activeTab === i ? 'white' : 'rgba(255,255,255,0.45)',
              }}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes bounce1 { from { height: 6px } to { height: 14px } }
        @keyframes bounce2 { from { height: 14px } to { height: 6px } }
        @keyframes bounce3 { from { height: 8px } to { height: 16px } }
      `}</style>
    </motion.div>
  );
}