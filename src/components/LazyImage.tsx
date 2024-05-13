import React, { useEffect, useState } from 'react';

interface LazyImageProps {
  src: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, className }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Static import based on the src prop
        let importedImage;

        switch (src) {
          case 'wp-loyalty-img1':
            importedImage = await import('../assets/images/wp-loyalty-img1.webp');
            break;
          case 'rtcampimg1':
            importedImage = await import('../assets/images/rtcampimg1.webp');
            break;
          case 'wp2':
            importedImage = await import('../assets/images/wp2.webp');
            break;
          case 'wp1':
            importedImage = await import('../assets/images/wp1.webp');
            break;
          case 'wp3':
            importedImage = await import('../assets/images/wp3.webp');
            break;
          case 'rtcampimg2':
            importedImage = await import('../assets/images/rtcampimg2.webp');
            break;
          default:
            console.error(`Image ${src} not recognized`);
            return;
        }

        setImageSrc(importedImage.default);
      } catch (error) {
        console.error(`Failed to load image ${src}: `, error);
      }
    };

    loadImage();
  }, [src]);

  return imageSrc ? (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    />
  ) : (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      Loading...
    </div>
  );
};

export default LazyImage;
