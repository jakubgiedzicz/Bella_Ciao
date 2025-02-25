"use client";
import Image from "next/image";
import Logo from "@/public/home-icon.svg";
import styles from "@/styles/navbar.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Header() {
  // Burger button state
  const [toggled, setToggled] = useState(false);
  // Mobile navbar visibility state
  const [visible, setVisible] = useState(false);
  // Window width
  const [width, setWidth] = useState(0)
  

  const handleBurgerClick = () => {
    setToggled(!toggled);
  };
  useEffect(() => {
    if (width <= 760){
      setVisible(true)
    } else {
      setVisible(false)
      setToggled(false)
    }
  },[width])
  useEffect(() => {
    function handleResize() {
     setWidth(window.innerWidth) 
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return ()  => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return (
    <>
      <header id="header">
        <nav className={styles.navbar}>
          <Link href="/" className={!visible ? styles.block : styles.hide} passHref>
            <Image src={Logo} alt="Logo" className={styles.logo_img} />
          </Link>
          <div className={styles.list_toggle_wrap}>
            <div className={(toggled || !visible) ? styles.nav_links : styles.hide}>
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
              <button className={!visible ? styles.button_28 : styles.button_28 + ' ' + styles.hide} role="button">
                Order
              </button>
            </Link>
            <button
              aria-label="toggle menu"
              className={styles.nav_toggle}
              onClick={handleBurgerClick}
            >
              {toggled ? <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className={visible ? styles.block + ' ' + styles.black : styles.hide}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />{" "}
              </svg> :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className={visible ? styles.block + ' ' + styles.black : styles.hide}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
