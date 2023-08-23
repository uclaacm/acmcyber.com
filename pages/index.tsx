import Image from "next/image";

import styles from "styles/Home.module.scss";
import CyberSeo from "@/components/CyberSeo";

export default function HomePage() {
  return (
    <>
      <CyberSeo title="Home" />
      <div className="page"></div>
    </>
  );
}
