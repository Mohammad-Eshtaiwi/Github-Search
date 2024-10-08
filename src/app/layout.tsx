import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "@/sass/main.scss";
import Header from "@/components/header/Header";
import ReactQueryProvider from "@/reactQuery/ReactQueryProvider";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Github Search",
  description: "You can search github users and repos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <ReactQueryProvider>
          <div className="container">
            <Header />
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
