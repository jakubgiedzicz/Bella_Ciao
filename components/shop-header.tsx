"use client";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CartItem from "./headerCartItem";

interface cartState {
  item: {
    full_price: string;
    link: string;
    name: string;
    price: string;
    quantity: number;
  };
}

export default function ShopHeader() {
  const [cart, setCart] = useState<cartState[] | null | string[]>([]);

  const [cartUpdate, setCartUpdate] = useState(0);

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
  const toggleHeader = () => {
    const body = document.body;
    const modal = document.getElementById("modal");
    if (modal.style.display === "none") {
      modal.style.display = "flex";
      body.classList.toggle("block");
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    } else {
      modal.style.display = "none";
      body.classList.toggle("block");
      window.onscroll = function () {};
    }
  };
  let buttonFunction = (e: Event) => {
    if ((e.target as HTMLButtonElement).id === "cartButton") {
      setCartUpdate((cartUpdate) => cartUpdate + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("click", buttonFunction);
    return () => window.removeEventListener("click", buttonFunction);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("cart") === null) {
      setCart([]);
    } else {
      setCart(sessionStorage.getItem("cart").split("},{"));
    }
  }, [cartUpdate]);

  useEffect(() => {
    if (effectRan.current === true) {
      toggleHeader();
    }
    return () => {
      effectRan.current = true;
    };
  }, [toggled]);
  return (
    <>
      <header id="header">
        <nav className={`${styles.navbar} ${styles.openNavbar}`}>
          <Link
            href="/"
            passHref
            className={`${styles.logo} ${styles.openLogo}`}
          >
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
          <div className={styles.cart}>
          <div className={styles.cart_your_cart}>Your cart &#40;{cart.length}&#41;</div>
            {cart.map((item: any) => (
              <CartItem key={item}/>
            ))}
          </div>
          <div className={`${styles.cart_wrap} ${styles.openCartWrap}`}>
            <span className={styles.cart_span}>Your cart:</span>
            <div className={styles.cart_svg}></div>
            <div className={styles.cart_number} id="cart-number">
              {cart.length}
            </div>
            <button
              aria-label="toggle menu"
              className={styles.nav_toggle}
              onClick={handleBurgerClick}
              id="openButton"
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
            </button>
            <div id="modal" className={styles.modal}>
              <svg
                onClick={handleBurgerClick}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                /* className={styles.closeIcon} */
                id="closeButton"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <ul className={styles.modal_list}>
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
                <li className={styles.cart_li}>
                  <div className={styles.cart_wrap}>
                    <span className={styles.cart_span}>Your cart:</span>
                    <div className={styles.cart_svg}></div>
                    <div className={styles.cart_number} id="cart-number">
                      {cart.length}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
