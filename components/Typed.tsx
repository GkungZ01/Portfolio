"use client";
import { useEffect, useRef } from "react";
import css from "./Typed.module.css";

export default function Typed({text}: {text: string}) {
  const contentTypesRef = useRef<HTMLDivElement>(null);
  const cursorTypesRef = useRef<HTMLSpanElement>(null);
  const spanTypedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const contentTypes = contentTypesRef.current;
    const cursorTypes = cursorTypesRef.current;
    const spanTyped = spanTypedRef.current;
    if (!contentTypes) return;

    const typedSpeed = contentTypes.getAttribute("typed-speed");
    const typedDeletingSpeed = contentTypes.getAttribute("typed-deleting-speed");
    const typedPauseBeforeDelete = contentTypes.getAttribute("typed-pause-before-delete");
    const typedPauseBetweenTexts = contentTypes.getAttribute("typed-pause-between-texts");
    const texts = text.split("|");
    const config = {
      typingSpeed: typedSpeed ? parseInt(typedSpeed) : 100,
      deletingSpeed: typedDeletingSpeed ? parseInt(typedDeletingSpeed) : 20,
      pauseBeforeDelete: typedPauseBeforeDelete ? parseInt(typedPauseBeforeDelete) : 4000,
      pauseBetweenTexts: typedPauseBetweenTexts ? parseInt(typedPauseBetweenTexts) : 500,
    };

    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
      if (!cursorTypes || !spanTyped) return;
      const currentText = texts[currentIndex];

      if (charIndex < currentText.length && !isDeleting) {
        cursorTypes.classList.remove(css.typedCursorBlink);
        spanTyped.innerHTML += currentText[charIndex];
        charIndex++;
        setTimeout(typeWriter, config.typingSpeed);
      } else if (charIndex > 0 && isDeleting) {
        cursorTypes.classList.remove(css.typedCursorBlink);
        spanTyped.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, config.deletingSpeed);
      } else if (charIndex === currentText.length && !isDeleting) {
        cursorTypes.classList.add(css.typedCursorBlink);
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, config.pauseBeforeDelete);
      } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        cursorTypes.classList.add(css.typedCursorBlink);
        setTimeout(typeWriter, config.pauseBetweenTexts);
      }
    }

    typeWriter();
  }, [text]);
  return (
    <>
      <div ref={contentTypesRef} className="typed-content">
        <p>
          <span ref={spanTypedRef}></span>
          <span ref={cursorTypesRef} className={`${css.typedCursor} ${css.typedCursorBlink}`}>
            |
          </span>
        </p>
      </div>
    </>
  );
}
