import { Html, Head, Main, NextScript } from "next/document";
import { firstBootStyle } from "@/pages/index";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=NTR&family=Poppins:wght@700&family=IBM+Plex+Mono&display=swap"
        />
      </Head>
      <body>
        {/* Handle first boot style changes as early as possible to prevent the dreaded Flash of Unstyled Content™ */}
        <script
          id="first-boot"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.pathname === "/") {
                if(!matchMedia("(prefers-reduced-motion) or (max-width: 350px)").matches && window.localStorage.getItem("first-boot") === null) {
                  document.body.classList.add("firstBoot");
                  document.body.classList.add(${JSON.stringify(
                    firstBootStyle
                  )});
                  window.firstBoot = true;
                }
              }
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
