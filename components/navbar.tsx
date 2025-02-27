"use client";
import Image from "next/image";
import Logo from "@/public/home-icon.svg";
import styles from "@/styles/navbar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Navbar() {
  // Burger button state
  const [toggled, setToggled] = useState(false);
  // Mobile navbar visibility state
  const [visible, setVisible] = useState(false);
  // Window width
  const [width, setWidth] = useState(0);

  const handleBurgerClick = () => {
    setToggled(!toggled);
  };
  useEffect(() => {
    if (width <= 760) {
      setVisible(true);
    } else {
      setVisible(false);
      setToggled(false);
    }
  }, [width]);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={(visible && !toggled) ? styles.navbar + ' ' + styles.burger_margin : styles.navbar + ' ' + styles.burger_padding}>
      <Link href="/" passHref>
        <Image
          src={Logo}
          alt="Logo"
          className={styles.logo_img}
          width={48}
          height={48}
        />
      </Link>
      <div className={(toggled || !visible) ? styles.show : styles.hide}>
        <Link href="/menu">Menu</Link>
        <Link href="/reservations">Reservations</Link>
        <a href="#contact">Contact</a>
        <Link href="/blog">Blog</Link>
        <Link href="/order" passHref>
          <button
            className={
              !visible ? styles.button_28 : styles.button_28 + " " + styles.hide
            }
            role="button"
          >
            Order
          </button>
        </Link>
      </div>
      <button
        aria-label="toggle menu"
        className={styles.burger_toggle}
        onClick={handleBurgerClick}
      >
        {toggled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            width={64}
            height={64}
            className={
              visible ? styles.block + " " + styles.black : styles.hide
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />{" "}
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            width={64}
            height={64}
            className={
              visible ? styles.block + " " + styles.black : styles.hide
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}
