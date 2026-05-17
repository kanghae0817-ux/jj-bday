import { useState } from 'react';
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';
import PhotosApp from './components/apps/PhotosApp';
import CameraApp from './components/apps/CameraApp';
import NotesApp from './components/apps/NotesApp';
import YouTubeMusicApp from './components/apps/YouTubeMusicApp';
import SafariApp from './components/apps/SafariApp';
import RobloxApp from './components/apps/RobloxApp';
import BirthdayCakeApp from './components/apps/BirthdayCakeApp';

export type AppType = 'home' | 'photos' | 'camera' | 'notes' | 'youtube' | 'safari' | 'roblox' | 'netflix' | 'cake';

export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [currentApp, setCurrentApp] = useState<AppType>('home');

  const openApp = (app: AppType) => {
    setCurrentApp(app);
  };

  const goHome = () => {
    setCurrentApp('home');
  };

  return (
    <div className="size-full flex items-center justify-center bg-black">
      {/* iPhone Container */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[60px] border-[14px] border-black shadow-2xl overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[20px] z-50" />

        {/* Screen Content */}
        <div className="relative w-full h-full bg-white overflow-hidden">
          {isLocked ? (
            <LockScreen onUnlock={() => setIsLocked(false)} />
          ) : currentApp === 'home' ? (
            <HomeScreen onOpenApp={openApp} />
          ) : currentApp === 'photos' ? (
            <PhotosApp onClose={goHome} />
          ) : currentApp === 'camera' ? (
            <CameraApp onClose={goHome} />
          ) : currentApp === 'notes' ? (
            <NotesApp onClose={goHome} />
          ) : currentApp === 'youtube' ? (
            <YouTubeMusicApp onClose={goHome} />
          ) : currentApp === 'safari' ? (
            <SafariApp onClose={goHome} />
          ) : currentApp === 'roblox' ? (
            <RobloxApp onClose={goHome} />
          ) : currentApp === 'cake' ? (
            <BirthdayCakeApp onClose={goHome} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
