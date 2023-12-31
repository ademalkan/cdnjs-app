import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Header from "@/components/organisms/Header";
import { Providers } from "@/stores/provider";
import React, { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CDN App",
  description: "Author by Adem ALKAN",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className={styles.main}>
            <header className={styles.header}>
              <Header title="CDNJS APP" />
            </header>
            <Suspense fallback={<Loading />}>
              <article className={styles.content}>{children}</article>
            </Suspense>
            <footer className={styles.footer}></footer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
