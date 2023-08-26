import { NextSeo } from "next-seo";
import { OpenGraphMedia } from "next-seo/lib/types";

export default function CyberSeo({
  title,
  description,
  images,
}: {
  title: string;
  description?: string;
  images?: OpenGraphMedia[];
}) {
  return (
    <NextSeo
      title={`${title} | ACM Cyber at UCLA`}
      description={
        description ??
        "A student-run organization on a mission to make cybersecurity simple and accessible to everyone."
      }
      openGraph={{
        images: images ?? [
          {
            url: "https://cyber.uclaacm.com/images/cyber-motif-applied.png",
            width: 990,
            height: 555,
            alt: "ACM Cyber logo",
          },
        ],
        site_name: "ACM Cyber at UCLA",
      }}
      twitter={{
        cardType: "summary_large_image",
      }}
    />
  );
}
