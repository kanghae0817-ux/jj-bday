import { AppType } from "../App";
import myWallpaper from '../../images/home_screen_background.jfif';
import cameraIconImg from '../../images/camera_icon.jpeg';
import galleryIconImg from '../../images/gallery_icon.jpeg';
import notesIconImg from '../../images/notes_icon.jpeg';
import safariIconImg from '../../images/safari_icon.jpeg';
import youtubeIconImg from '../../images/youtube_music_2.jpg';
import robloxIconImg from '../../images/roblox_icon.jpg';

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

// ─── Sol iOS (igual que el de tu foto, amarillo con rayos) ─────
function SunIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 18 + 12 * Math.cos(rad);
        const y1 = 18 + 12 * Math.sin(rad);
        const x2 = 18 + 16 * Math.cos(rad);
        const y2 = 18 + 16 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD60A" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      <circle cx="18" cy="18" r="8" fill="#FFD60A"/>
    </svg>
  );
}

function CalendarWidgetIcon() {
  return (
    <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center" style={{ background: 'rgba(150,120,255,0.9)' }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        {/* Rectángulo calendario */}
        <rect x="0.5" y="1.5" width="11" height="10" rx="2" stroke="rgba(60,30,120,0.9)" strokeWidth="1.2"/>
        {/* Línea separadora */}
        <line x1="0.5" y1="4.5" x2="11.5" y2="4.5" stroke="rgba(60,30,120,0.9)" strokeWidth="1.2"/>
        {/* Patillas */}
        <rect x="3.5" y="0.5" width="1.2" height="2.5" rx="0.5" fill="rgba(60,30,120,0.9)"/>
        <rect x="7.3" y="0.5" width="1.2" height="2.5" rx="0.5" fill="rgba(60,30,120,0.9)"/>
        {/* Puntitos dentro */}
        <circle cx="3" cy="7.5" r="0.8" fill="rgba(60,30,120,0.9)"/>
        <circle cx="6" cy="7.5" r="0.8" fill="rgba(60,30,120,0.9)"/>
        <circle cx="9" cy="7.5" r="0.8" fill="rgba(60,30,120,0.9)"/>
        <circle cx="3" cy="9.8" r="0.8" fill="rgba(60,30,120,0.9)"/>
        <circle cx="6" cy="9.8" r="0.8" fill="rgba(60,30,120,0.9)"/>
      </svg>
    </div>
  );
}

// ─── App Icons ─────────────────────────────────────────────────
function PhotosIcon() {
  return <img src={galleryIconImg} className="w-[60px] h-[60px] rounded-[13px]" />;
}
function CameraIcon() {
  return <img src={cameraIconImg} className="w-[60px] h-[60px] rounded-[13px]" />;
}
function YTMusicIcon() {
  return <img src={youtubeIconImg} className="w-[60px] h-[60px] rounded-[13px]" />;
}
function SafariIcon() {
  return <img src={safariIconImg} className="w-[60px] h-[60px] rounded-[13px]" />;
}
function RobloxIcon() {
  return <img src={robloxIconImg} className="w-[60px] h-[60px] rounded-[13px]" />;
}
function NotesIcon() {
  return <img src={notesIconImg} className="w-[60px] h-[60px] rounded-[13px]" />;
}
function BirthdayIcon() {
  return (
    <svg viewBox="0 0 60 60" width="60" height="60">
      <rect width="60" height="60" rx="13" fill="#FF6B9D"/>
      {/* Velas */}
      <rect x="20" y="18" width="4" height="10" rx="2" fill="white" opacity="0.9"/>
      <rect x="28" y="14" width="4" height="14" rx="2" fill="white" opacity="0.9"/>
      <rect x="36" y="18" width="4" height="10" rx="2" fill="white" opacity="0.9"/>
      {/* Llamas */}
      <ellipse cx="22" cy="16" rx="2" ry="3" fill="#FFD60A"/>
      <ellipse cx="30" cy="12" rx="2" ry="3" fill="#FFD60A"/>
      <ellipse cx="38" cy="16" rx="2" ry="3" fill="#FFD60A"/>
      {/* Tarta base */}
      <rect x="12" y="28" width="36" height="20" rx="4" fill="white" opacity="0.95"/>
      {/* Capa crema */}
      <rect x="12" y="28" width="36" height="7" rx="4" fill="#FFB3D1"/>
      {/* Decoración puntitos */}
      <circle cx="22" cy="38" r="2" fill="#FF6B9D"/>
      <circle cx="30" cy="38" r="2" fill="#FF6B9D"/>
      <circle cx="38" cy="38" r="2" fill="#FF6B9D"/>
    </svg>
  );
}

interface HomeScreenProps {
  onOpenApp: (app: AppType) => void;
}

export default function HomeScreen({ onOpenApp }: HomeScreenProps) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${myWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* ── STATUS BAR ─────────────────────────────────────────────
          1. El circulito amarillo está en el centro del iPhone real
             (Dynamic Island) — aquí lo simulamos con un punto
             posicionado exactamente en el centro, un poco más a la izq
          ───────────────────────────────────────────────────────── */}
      {/* Punto amarillo — left-[46%] lo mueve a la izq, ajusta si necesitas */}
      <div
        className="absolute w-[10px] h-[10px] rounded-full bg-[#FFD60A] z-20"
        style={{ top: '16px', left: '46%' }}
      />

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

      {/* ── WIDGETS ─────────────────────────────────────────────── */}
      <div className="absolute top-[75px] left-0 right-0 px-6 flex gap-6">

        {/* ── 2. WIDGET CALENDARIO estilo iOS ──────────────────────
            Fondo negro, cabecera con icono de calendario iOS real
            ──────────────────────────────────────────────────────── */}
        <div className="flex-1 bg-[#1C1C1E] rounded-3xl p-4 flex flex-col justify-start gap-2" style={{ minHeight: '150px' }}>
          <div className="text-[#FF3B30] text-[10.5px] mt-[-3px]" style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 400 }}>
            월요일
          </div>
          <div className="text-white text-[35px] font-light leading-none mt-[-10px]" style={{ fontFamily: '-apple-system, sans-serif',  transform: "scaleY(0.9)" }}>
            18
          </div>
          {/* Evento con icono calendario iOS dentro del pill morado */}
          <div className="rounded-full px-0 py-[0px] pr-3 flex items-center gap-0.5 mt-[1px]" style={{ background: 'rgba(80, 60, 160, 0.3)' }}>
            <CalendarWidgetIcon />
            <span style={{ fontFamily: '-apple-system, sans-serif', fontSize: '12px', fontWeight: 450, color: 'rgba(180, 160, 255, 0.95)' }}>
              은재 생일!!
            </span>
          </div>
        </div>

        {/* ── 3. WIDGET TIEMPO — degradado azul oscuro → azul claro ──
            Sol igual al de tu foto (amarillo con rayos)
            ──────────────────────────────────────────────────────── */}
        <div
          className="flex-1 rounded-3xl pt-4 px-4 pb-3 flex flex-col justify-between"
          style={{
            minHeight: '150px',
            // Degradado: azul oscuro arriba → azul cielo claro abajo
            background: 'linear-gradient(180deg, #1A4F8A 0%, #2C6FAC 40%, #5BA8D4 80%, #87CEEB 100%)',
          }}
        >
          <div className="text-white text-[13px] font-medium mt-[-3px]" style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 400 }}>
            강해마음
          </div>
          <div className="text-white text-[40px] font-light leading-none mt-[-14px]" style={{ fontFamily: '-apple-system, sans-serif', transform: "scaleY(0.9)" }}>
            24°
          </div>
          <div>
            {/* Sol igual al de tu foto */}
            <SunIcon size={18} />
            <div className="text-white/90 text-[11.5px]" style={{ fontFamily: '-apple-system, sans-serif', textShadow: '0px 1px 3px rgba(0,0,0,0.2)', transform: "scaleY(0.98)"}}>
              JONNA 맑음
            </div>
            <div className="text-white/90 text-[11.5px]" style={{ fontFamily: '-apple-system, sans-serif', textShadow: '0px 1px 3px rgba(0,0,0,0.2)', transform: "scaleY(0.98)" }}>
              최고:1000° 최저:999°
            </div>
          </div>
        </div>
      </div>

      {/* Etiquetas debajo de los widgets */}
      <div className="absolute left-0 right-0 px-4 flex gap-3" style={{ top: '228px' }}>
        <div className="flex-1 text-center text-white/70 text-[11px]" style={{ fontFamily: '-apple-system, sans-serif' }}>캘린더</div>
        <div className="flex-1 text-center text-white/70 text-[11px]" style={{ fontFamily: '-apple-system, sans-serif' }}>날씨</div>
      </div>

      {/* ── APP GRID ───────────────────────────────────────────── */}
      <div className="absolute left-0 right-0 px-4 grid grid-cols-4 gap-y-5 gap-x-2" style={{ top: '265px' }}>
        <AppIcon icon={<PhotosIcon />}   label="사진"          onClick={() => onOpenApp("photos")} />
        <AppIcon icon={<CameraIcon />}   label="카메라"        onClick={() => onOpenApp("camera")} />
        <AppIcon icon={<YTMusicIcon />}  label="YouTube Music" onClick={() => onOpenApp("youtube")} />
        <AppIcon icon={<SafariIcon />}   label="Safari"        onClick={() => onOpenApp("safari")} />
        <AppIcon icon={<RobloxIcon />}   label="Roblox"        onClick={() => onOpenApp("roblox")} />
        <AppIcon icon={<NotesIcon />}    label="메모"           onClick={() => onOpenApp("notes")} />
        <AppIcon icon={<BirthdayIcon />} label="은재생일"  onClick={() => onOpenApp("cake")} />
      </div>
    </div>
  );
}

interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  labelOffset?: number;
}

function AppIcon({ icon, label, onClick, labelOffset = 0 }: AppIconProps) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-[5px] active:scale-95 transition-transform">
      <div className="w-[58px] h-[58px] rounded-[13px] overflow-hidden shadow-md">
        {icon}
      </div>
      <span
        className="text-white text-[11px] text-center leading-tight drop-shadow whitespace-nowrap w-[70px]"
        style={{ fontFamily: '-apple-system, sans-serif', fontWeight: 300, marginLeft: `${labelOffset}px` }}
      >
        {label}
      </span>
    </button>
  );
}