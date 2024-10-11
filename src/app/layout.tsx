import type { Metadata } from "next";
import "./globals.css";
import {M_PLUS_2} from 'next/font/google'

const m_PLUS_2 = M_PLUS_2({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Origin.テニススクール",
  description: "全国展開しているテニススクールです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={m_PLUS_2.className}>
        {children}
      </body>
    </html>
  );
}
