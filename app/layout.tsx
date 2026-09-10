import type { Metadata } from "next";
import { HeaderComponent } from "@/components/header";
import { FooterComponent } from "@/components/footer";
import { EB_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "rober",
  description:
    "Personal website of Robertino — backend engineering, articles and projects.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${garamond.variable}`}
    >
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <HeaderComponent />

        <div className="site-content">
          <div className="site-marquee">
            <div className="marquee">
              <ul aria-hidden="true">
                <li>
                  39D1237575F620887E22B34358B5DD57F1B5502E70C2C4F85E01DE3C50EB469E
                </li>
                <li>secret rober0xf.</li>
                <li>
                  39D1237575F620887E22B34358B5DD57F1B5502E70C2C4F85E01DE3C50EB469E
                </li>
              </ul>

              <ul>
                <li>
                  39D1237575F620887E22B34358B5DD57F1B5502E70C2C4F85E01DE3C50EB469E
                </li>
                <li>secret rober0xf.</li>
                <li>
                  39D1237575F620887E22B34358B5DD57F1B5502E70C2C4F85E01DE3C50EB469E
                </li>
              </ul>
            </div>
          </div>

          <div className="site-content-inner">{children}</div>
        </div>

        <FooterComponent />
      </body>
    </html>
  );
}
