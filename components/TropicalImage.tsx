import styles from "@/styles/TropicalImage.module.scss";

// stolen from ourselves @ https://github.com/uclaacm/lactf-website/blob/main/components/TropicalImage.js
export default function TropicalImage({ img, alt }: { img: any; alt: string }) {
  return (
    <div
      className={styles.tropicalImg}
      style={{
        maskImage: `url("${img.src.replace(/"/g, "%22")}")`,
        WebkitMaskImage: `url("${img.src.replace(/"/g, "%22")}")`,
        maskSize: `${img.width}px ${img.height}px`,
        WebkitMaskSize: `${img.width}px ${img.height}px`,
        width: `${img.width}px`,
        height: `${img.height}px`,
      }}
      role="img"
      aria-label={alt}
    />
  );
}
