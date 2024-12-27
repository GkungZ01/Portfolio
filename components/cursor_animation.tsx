"use client"

import "@/assets/css/cursor_animation.css";
import { useEffect } from "react"

export default function Cursor_Animation() {
  useEffect(()=> {
    const cursor = document.querySelector<HTMLElement>(".cursor");

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
  }, [])

  return (
    <>
      <div className="cursor"></div>
    </>
  );
};
