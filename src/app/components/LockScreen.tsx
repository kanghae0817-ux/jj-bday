import { useState } from "react";
import { motion } from "motion/react";
import myWallpaper from "../../images/lock_screen_background.jfif";

// ─── ICONOS iOS ────────────────────────────────────────────────
function IosSignal() {
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="white"
    >
      <rect
        x="0"
        y="8.5"
        width="2.5"
        height="3.5"
        rx="0.5"
        opacity="0.35"
      />
      <rect
        x="4"
        y="6"
        width="2.5"
        height="6"
        rx="0.5"
        opacity="0.35"
      />
      <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
      <rect x="12" y="0" width="2.5" height="12" rx="0.5" />
    </svg>
  );
}
function IosWifi() {
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
      <circle cx="7.5" cy="10.5" r="1.4" fill="white" />
      <path
        d="M4.8 7.8C5.6 7 6.5 6.6 7.5 6.6s1.9.4 2.7 1.2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.2 5.2C3.7 3.7 5.5 2.9 7.5 2.9s3.8.8 5.3 2.3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IosBattery() {
  return (
    <svg width="25" height="15" viewBox="0 0 25 12" fill="none">
      <rect
        x="0.5"
        y="1"
        width="23"
        height="11"
        rx="2.5"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <rect
        x="2"
        y="2.5"
        width="5"
        height="8"
        rx="1.5"
        fill="
#FF3B30"
      />
      <path
        d="M22.5 4.5v3a1.5 1.5 0 0 0 0-3z"
        fill="white"
        fillOpacity="0.45"
      />
    </svg>
  );
}

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({
  onUnlock,
}: LockScreenProps) {
  const [dragY, setDragY] = useState(0);

  return (
    <motion.div
      className="relative w-full h-full"
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={0.2}
      onDrag={(_, info) => {
        setDragY(info.offset.y);
      }}
      onDragEnd={(_, info) => {
        if (info.offset.y < -200) onUnlock();
      }}
      style={{
        // ── 1. FONDO DE PANTALLA ──────────────────────────────────
        // Para usar tu foto, importa arriba del archivo:
        //   import myWallpaper from '../../images/lock_screen_background.jpg'
        // Y reemplaza la línea backgroundImage con:
        //   backgroundImage: `url(${myWallpaper})`,
        backgroundImage: `url(${myWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── 2. STATUS BAR ── top-[14px]: sube/baja toda la barra */}
      <div className="absolute top-[14px] left-0 right-0 px-5 flex justify-between items-center text-white z-10">
        <div
          className="text-[15px] font-semibold"
          style={{ fontFamily: "-apple-system, sans-serif" }}
        >
          {/* ← edita el operador, o bórralo si no lo quieres */}
        </div>
        {/* marginRight mueve los iconos a la izq */}
        <div
          className="flex gap-[6px] items-center"
          style={{ marginRight: "10px" }}
        >
          <IosSignal />
          <IosWifi />
          <IosBattery />
        </div>
      </div>

      {/* ── 3 & 4. FECHA Y HORA ───────────────────────────────────
          top-[70px]: sube/baja el bloque entero
          ───────────────────────────────────────────────────────── */}
      <div className="absolute top-[70px] left-0 right-0 text-center text-white z-10">
        {/* 3. FECHA EN COREANO — edita solo este texto */}
        <div
          className="text-[18px] font-medium mb-0"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            fontWeight: 330,
            letterSpacing: "0.01em",
            transform: "scaleY(0.95)",
          }}
        >
          5월 18일 월요일
        </div>

        {/* 4. HORA — edita el texto */}
        <div
          className="text-[96px] leading-none"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            fontWeight: 450,
            letterSpacing: "-4px",
            transform: "scaleY(0.9)",
            marginTop: "-4px",
          }}
        >
          09:06
        </div>
      </div>

      {/* ── 5, 6 & 7. WIDGETS EN FILA ────────────────────────────
          top-[270px]: sube/baja los widgets
          flex-row: todos en fila horizontal
          ───────────────────────────────────────────────────────── */}
      <div className="absolute top-[200px] left-0 right-0 px-4 flex flex-row gap-3 items-center z-10">
        {/* ── 6. WIDGET VERSÍCULO ────────────────────────────────
            Edita "Psalm 20:4" y el texto del versículo
            ──────────────────────────────────────────────────── */}
        <div className="flex-1 rounded-2xl px-3 py-3 border">
          <div
            className="text-white text-[13px] mb-[2px]"
            style={{
              fontFamily: "-apple-system, sans-serif",
              fontWeight: 430,
              transform: "scaleY(0.9)",
              letterSpacing: "0.5px",
            }}
          >
            Psalm 20:4
          </div>
          <div className="w-8 h-[1.5px] bg-white/50 mb-[4px]" />
          <div
            className="text-white/85 leading-tight"
            style={{
              fontFamily: "-apple-system, sans-serif",
              fontSize: "8px",
              fontWeight: 400,
              transform: "scaleY(0.85)",
            }}
          >
            May He give you the desire of your heart and make
            all your plans succeed.
          </div>
        </div>

        {/* ── 7. CÍRCULO SEÚL ───────────────────────────────────
            Edita "서울" y "16:06"
            ml-2: margen izquierdo
            ──────────────────────────────────────────────────── */}
        <div className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center ml-2">
          <div
            className="text-white/45 text-[8px]"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            서울
          </div>
          <div
            className="text-white text-[13px] font-light leading-tight"
            style={{
              fontFamily: "-apple-system, sans-serif",
              transform: "scaleY(0.9)",
            }}
          >
            16:06
          </div>
        </div>

        {/* ── 7. CÍRCULO MADRID ─────────────────────────────────
            Edita "마드리드" y "09:06"
            left: '-12px' mueve SOLO este círculo a la izquierda
            sin afectar a los otros widgets
            ──────────────────────────────────────────────────── */}
        <div
          className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center ml-6"
          style={{ position: "relative", left: "-12px" }}
        >
          <div
            className="text-white/45 text-[8px]"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            마드리드
          </div>
          <div
            className="text-white text-[13px] font-light leading-tight"
            style={{
              fontFamily: "-apple-system, sans-serif",
              transform: "scaleY(0.9)",
            }}
          >
            09:06
          </div>
        </div>
      </div>

      {/* HOME INDICATOR */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-[5px] bg-white/80 rounded-full z-10" />
    </motion.div>
  );
}