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
    <div className={styles.carousel}>
      <div
        className={styles.prev}
        onClick={() => setIdx((idx - 1) % images.length)}
      >
        &#10094;
      </div>
      <div className={styles.images}>
        {images.map((src, i) => (
          <div>
            <img
              className={i == idx && styles.active}
              src={src}
              alt="ACM Cyber congregation"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.next}
        onClick={() => setIdx((idx + 1) % images.length)}
      >
        &#10095;
      </div>
    </div>
  );
}
