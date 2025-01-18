import "@/styles/globals.css";
import CursorAnimation from "@/components/CursorAnimation";
import "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio by Ratchanon Sila",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorAnimation />
        <div className="absolute w-full z-10">
          <nav>
            <div className="title">
              <span>Ratchanon Sila</span>
            </div>
            <menu>
              <Link className="" href="/">
                <p>Home</p>
              </Link>
              <Link className="" href="/">
                <p>Skill</p>
              </Link>
              <Link className="" href="/">
                <p>Skill</p>
              </Link>
            </menu>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
