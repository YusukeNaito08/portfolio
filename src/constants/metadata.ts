import { Metadata } from "next";

export const SITE_METADATA: Metadata = {
  title: {
    default: "noye | Frontend Developer",
    template: "%s | noye",
  },
  description: "Frontend Developer based in Japan",
  keywords: ["Frontend Developer", "Web Development", "React", "Next.js", "noye", "Portfolio"],
  authors: [{ name: "noye" }],
  openGraph: {
    title: "noye | Frontend Developer",
    description: "Frontend Developer based in Japan",
    url: "https://noye-dev.com/",
    siteName: "noye Portfolio",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "noye website ogp image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "noye | Frontend Developer",
    description: "Frontend Developer based in Japan",
    site: "@noye_dev",
    creator: "@noye_dev",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
