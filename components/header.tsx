"use client";
import Image from "next/image";
import Logo from "@/public/home-icon.svg";
import styles from "@/styles/navbar.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Header() {
  /* Navbar visibility; changes on user scroll */
  const [visible, setVisible] = useState(true);

  /* Navbar list items after clicking on designed button */
  const [toggled, setToggled] = useState(false);

  /* Prevent useEffect to display navbar on mount */
  const effectRan = useRef(false);

  const handleBurgerClick = () => {
    if (toggled === true) {
      setToggled(false);
    } else {
      setToggled(true);
    }
  };

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const hideOnScroll = () => {
    const header: HTMLElement = document.getElementById("header");
    const navbar: HTMLElement = document.querySelector(`.${styles.navbar}`);
    if (header.style.display === "block" && navbar.style.width === "auto") {
      setToggled(false);
      setVisible(false);
    }
  };

  const toggleNavbar = () => {
    toggleHeader();
    let button: HTMLElement = document.querySelector(`.${styles.nav_toggle}`);
    let links: HTMLElement = document.querySelector(`.${styles.nav_links}`);
    let links_wrap: HTMLElement = document.querySelector(
      `.${styles.list_toggle_wrap}`
    );
    button.classList.toggle(styles.open);
    links.classList.toggle(styles.open);
    links_wrap.classList.toggle(styles.open);
  };
  const toggleHeader = () => {
    if (document.documentElement.clientWidth < 760) {
      const header: HTMLElement = document.getElementById("header");
      const navbar: HTMLElement = document.querySelector(`.${styles.navbar}`);
      if (visible === true) {
        header.style.display = "block";
      } else {
        header.style.display = "none";
      }
      if (toggled === true) {
        navbar.style.width = "auto";
      } else {
        navbar.style.width = "100%";
      }
    }
  };
  useEffect(() => {
    if (effectRan.current === true) {
      toggleNavbar();
    }
    return () => {
      effectRan.current = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggled]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", hideOnScroll);
    return () => window.removeEventListener("wheel", hideOnScroll);
  }, []);

  useEffect(() => {
    toggleHeader();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <>
      <header id="header">
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo_image_link} passHref>
            <Image src={Logo} alt="Logo" className={styles.logo_img} />
          </Link>
          <div className={styles.list_toggle_wrap}>
            <div className={styles.nav_links}>
              <ul className={styles.nav_list}>
                <li>
                  <Link href="/menu">Menu</Link>
                </li>
                <li>
                  <Link href="/reservations">Reservations</Link>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/order" passHref>
                    <span className={styles.order_list_item}>Order</span>
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/order" passHref>
              <button className={styles.button_28} role="button">
                Order
              </button>
            </Link>
            <button
              aria-label="toggle menu"
              className={styles.nav_toggle}
              onClick={handleBurgerClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles.openIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles.closeIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}