import { useEffect, useState } from "react";
import styles from "@/styles/Carousel.module.scss";

const msPerImage = 2000;

export interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [idx, setIdx] = useState(0);
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    clearTimeout(timer);
    let time = setTimeout(() => {
      setIdx((idx + 1) % images.length);
    }, msPerImage);
    setTimer(time);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <div className={styles.main}>
      <span
        className={styles.prev}
        onClick={() => setIdx(idx - (1 % images.length))}
      >
        &#10094;
      </span>
      <div className={styles.images}>
        <img src={images[idx]} alt="ACM Cyber congregation" />
        <img
          src={images[idx + (1 % images.length)]}
          alt="ACM Cyber congregation"
        />
        <img
          src={images[idx + (2 % images.length)]}
          alt="ACM Cyber congregation"
        />
      </div>
      <span
        className={styles.next}
        onClick={() => setIdx(idx + (1 % images.length))}
      >
        &#10095;
      </span>
    </div>
  );
}
