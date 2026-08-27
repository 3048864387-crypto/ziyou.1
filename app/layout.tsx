import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import "./company-site.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziyou-shijie-ai.cheery-kiwi-1225.chatgpt.site",
  ),
  title: "自由视界 AI · AIGC影视创意制作",
  description:
    "自由视界 AI 为商家与品牌提供AIGC剧本策划、人物资产、场景生成、品牌宣传片、产品宣传片与电影化视觉制作。",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "自由视界 AI · AIGC影视创意制作",
    description: "让商家的优势，成为观众愿意看完的故事。",
    images: ["https://ziyou-shijie-ai.cheery-kiwi-1225.chatgpt.site/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
