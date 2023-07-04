"use client";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import Cart from "@/public/shopping-cart-outline.svg";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function ShopHeader() {
  /* Navbar visibility; changes on user scroll */
  const [visible, setVisible] = useState(true);

  /* Navbar list items after clicking on designed button */
  const [toggled, setToggled] = useState(false);

  /* Prevent useEffect to display navbar on mount */
  const effectRan = useRef(false);

  /* const handleBurgerClick = () => {
    if (toggled === true) {
      setToggled(false);
    } else {
      setToggled(true);
    }
  };

  const handleScroll = (event: any) => {
    if (event.deltaY < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const hideOnScroll = () => {
    const header: any = document.getElementById("header");
    const navbar: any = document.getElementsByClassName(styles.navbar);
    if (header.style.display === "block" && navbar[0].style.width === "auto") {
      setToggled(false);
      setVisible(false);
    }
  };

  const toggleNavbar = () => {
    toggleHeader();
    let button: any = document.getElementsByClassName(styles.nav_toggle);
    let links: any = document.getElementsByClassName(styles.nav_links);
    let links_wrap: any = document.getElementsByClassName(
      styles.list_toggle_wrap
    );
    button[0].classList.toggle(styles.open);
    links[0].classList.toggle(styles.open);
    links_wrap[0].classList.toggle(styles.open);
  };
  const toggleHeader = () => {
    if (document.documentElement.clientWidth < 760) {
      const header: any = document.getElementById("header");
      const navbar: any = document.getElementsByClassName(styles.navbar);
      if (visible === true) {
        header.style.display = "block";
      } else {
        header.style.display = "none";
      }
      if (toggled === true) {
        navbar[0].style.width = "auto";
      } else {
        navbar[0].style.width = "100%";
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
  }, [visible]);
 */
  return (
    <>
      <header id="header">
        <nav className={styles.navbar}>
          <Link href="/" passHref>
            <Image src={Logo} alt="" />
          </Link>
          <ul className={styles.list}>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link href="/reservations">Reservations</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <div className={styles.cart_wrap}>
            <span className={styles.cart_span}>Your cart:</span>
            <div className={styles.cart_svg}></div>
            <div className={styles.cart_number} id="cart-number">2</div>
          </div>
        </nav>
      </header>
    </>
  );
}
