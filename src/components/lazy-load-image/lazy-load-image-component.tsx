import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Image = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

function LazyLoadImageComponent({ image, className }: { image: Image, className?: string }): React.ReactElement {
  return (
    <LazyLoadImage
      className={className}
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width}
    />
  );
}

export default LazyLoadImageComponent;
