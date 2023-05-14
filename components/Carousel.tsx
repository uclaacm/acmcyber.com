import { useEffect, useState } from "react";
import styles from "@/styles/Carousel.module.scss";

const msPerImage = 2000;

export interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let ii = idx;
    const interval = setInterval(() => {
      ii = (ii + 1) % images.length;
      setIdx(ii);
    }, msPerImage);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.images}>
      <img src={images[idx]} alt="ACM Cyber congregation" />
    </div>
  );
}
