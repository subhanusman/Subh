import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string | null;
  title: string | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Top Bar with Title & Close */}
      <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-xs text-zinc-400 font-mono z-10 pointer-events-none">
        <div className="bg-black/60 px-3 py-1.5 rounded border border-zinc-800 backdrop-blur-sm pointer-events-auto">
          {title || 'High-Resolution Visual Inspection'}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 transition-all cursor-pointer pointer-events-auto shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-6xl max-h-[85vh] z-10 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={title || 'Visual Artwork'}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[85vh] object-contain rounded-lg border border-zinc-800 shadow-2xl select-none"
        />
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-500 font-mono pointer-events-none bg-black/60 px-3 py-1 rounded border border-zinc-800/80">
        Press ESC or click outside to dismiss
      </div>
    </div>
  );
};
