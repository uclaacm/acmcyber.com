import { CSSProperties } from "react";
import styles from "@/styles/CyberWordmark.module.scss";

export default function CyberWordmark({
  fontSize,
  lineHeight,
  style,
}: {
  fontSize: string;
  lineHeight: string;
  style?: CSSProperties | undefined;
}) {
  return (
    <>
      <span style={{ fontSize: fontSize, lineHeight: lineHeight, ...style }}>
        <span className={styles.cyberLogoWordmark}>
          acm<span className={styles.cyberLogoWordmarkPeriod}>.</span>
          cyber
        </span>
      </span>
    </>
  );
}
