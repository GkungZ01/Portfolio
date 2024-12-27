import HeaderPage from "@/components/header";
import CA from "@/components/cursor_animation";
import "next/font/google";
import "@/assets/css/globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio by Ratchanon Sila",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CA/>
        <HeaderPage/>
        {children}
        </body>
    </html>
  );
}
