"use client";

import css from "./CursorAnimation.module.css";
import { useEffect, useRef } from "react";

export default function Cursor_Animation() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    // ตำแหน่งเริ่มต้น
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener("mouseenter", (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.display = "block";
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Event เคลื่อนที่เมาส์
    document.addEventListener("mousemove", (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.display = "block";
    });

    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });

    // อัปเดตตำแหน่งด้วย smooth animation
    function animateCursor() {
      if (!cursor) {
        return;
      }

      dotX += (cursorX - dotX) * 0.5 - 3;
      dotY += (cursorY - dotY) * 0.5 - 3;
      cursor.style.transform = `translate(${dotX}px, ${dotY}px)`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    return () => {
      // ลบ event listeners เมื่อ component ถูก unmount
      document.removeEventListener("mouseenter", () => {});
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("mouseout", () => {});
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={css.cursor}></div>
    </>
  );
}
