import type { Metadata } from "next";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Next Drizzle Auth",
  description: "Next.js + Drizzle + Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
