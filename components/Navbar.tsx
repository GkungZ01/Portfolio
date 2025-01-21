"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import css from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#Skill", label: "Skill" },
    { href: "#Portofolio", label: "Portofolio" },
    { href: "#Contact", label: "Contact" },
  ];

  useEffect(() => {
    // Way Point

    const menuLinks = document.querySelectorAll("a.nav-item");
    const pageContent = document.querySelectorAll("section");

    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const element = document.querySelector(href || "");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const boxId = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`a[href="#${boxId}"]`);
            if (!activeLink) return false;
            menuLinks.forEach((element) => {
              element.classList.remove(css.active);
            });
            activeLink.classList.add(css.active);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    pageContent.forEach((boxContent) => {
      observer.observe(boxContent);
    });
  }, []);

  return (
    <>
      <nav className="fixed w-full z-10 mx-auto px-4 sm:px-6 lg:px-[10%]">
        <div className="flex relative items-center justify-between h-16">
          <div className="shrink-0">
            <a className="text-xl font-bold text-center uppercase">Ratchanon Sila</a>
          </div>
          <div className="hidden md:block">
            <menu className="flex gap-2 items-center font-semibold text-sm">
              {navItems.map((item) => (
                <Link className={`nav-item ${css.btnNavLink}`} key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </menu>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 text-[#eeeef0] hover:drop-shadow-lg transition-transform duration-300 ease-in-out transform ${
                isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
