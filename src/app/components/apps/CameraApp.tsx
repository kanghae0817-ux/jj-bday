import { motion } from 'motion/react';
import camera_song from '../../../images/camera_song.jpeg';

interface CameraAppProps {
  onClose: () => void;
}

export default function CameraApp({ onClose }: CameraAppProps) {
  return (
    <motion.div
      className="w-full h-full"
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={0.2}
      dragPropagation={false}
      onDragEnd={(_, info) => {
        if (info.offset.y < -200) onClose();
      }}
      style={{ touchAction: 'none' }}
    >
      <img
        src={camera_song}
        alt="Camera"
        className="w-full h-full object-cover"
        draggable={false}
      />
    </motion.div>
  );
}