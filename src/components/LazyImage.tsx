import React, { useState, memo } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.tsx'
import { Loader } from 'lucide-react';

interface LazyImageProps {
  src: string;
  className?: string;
}

const imageMap: Record<string, () => Promise<{ default: string }>> = {
  'wp-loyalty-img1': () => import('../assets/images/wp-loyalty-img1.webp'),
  'rtcampimg1': () => import('../assets/images/rtcampimg1.webp'),
  'wp2': () => import('../assets/images/wp2.webp'),
  'wp1': () => import('../assets/images/wp1.webp'),
  'wp3': () => import('../assets/images/wp3.webp'),
  'rtcampimg2': () => import('../assets/images/rtcampimg2.webp'),
};

const LazyImage: React.FC<LazyImageProps> = memo(({ src, className }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadImage = async () => {
    try {
      const importer = imageMap[src];
      if (!importer) {
        console.error(`Image ${src} not recognized`);
        setError(`Image not recognized: ${src}`);
        return;
      }
      const importedImage = await importer();
      setImageSrc(importedImage.default);
    } catch (error) {
      console.error(`Failed to load image ${src}: `, error);
      setError(`Failed to load image: ${src}`);
    }
  };

  const imageRef = useIntersectionObserver(loadImage, { threshold: 0.1 });

  if (error) {
    return <div className={className} style={{ width: '100%', height: '100%' }}>Error loading image.</div>;
  }

  return imageSrc ? (
    <img
      className={className}
      src={imageSrc}
      alt="Community Meetups Images"
      width={'100%'}
      height={'100%'}
      loading="lazy"
    />
  ) : (
    <div ref={imageRef} className="flex justify-center items-center" style={{ width: '100%', height: '100%' }}>
      <Loader color='white' size={24} />
    </div>
  );
});

export default LazyImage;
