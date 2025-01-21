import 'bootstrap-icons/font/bootstrap-icons.css'
import "@/styles/globals.css";
import CursorAnimation from "@/components/CursorAnimation";
import Navbar from "@/components/Navbar";
import "next/font/google";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio by Ratchanon Sila",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorAnimation />
        <Navbar/>
        <div id='root'></div>
        {children}
      </body>
    </html>
  );
}
