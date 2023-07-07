"use client";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CartItem from "./headerCartItem";
import { cartItemType } from "@/types/cartItemType";

export default function ShopHeader() {
  const [cart, setCart] = useState<cartItemType[]>([]);

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

/* buttonFunction is used to help with updating cart state */

  let buttonFunction = (e: Event) => {
    if ((e.target as HTMLButtonElement).id === "cartButton") {
      setCartUpdate((cartUpdate) => cartUpdate + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("click", buttonFunction);
    return () => window.removeEventListener("click", buttonFunction);
  }, []);

/* findItems iterates over sessionStorage, looks for cartItem keys,
 turns them into objects and updates cart state */

  const findItems = (spread: boolean) => {
    if (spread === true) {
      for (let i = 1; i < sessionStorage.length; i++) {
        let x = sessionStorage.getItem(`cartItem${i}`);
        setCart((cart) => [...cart, JSON.parse(x)]);
      }
    } else {
      let ar = [];
      for (let i = 1; i < sessionStorage.length; i++) {
        let x = sessionStorage.getItem(`cartItem${i}`);
        ar.push(JSON.parse(x));
      }
      setCart(ar);
    }
  };



  /* First useEffect initialises cart state, second updates it on click */

  useEffect(() => {
    findItems(true);
  }, []);

  useEffect(() => {
    findItems(false);
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
            <div className={styles.cart_your_cart}>
              Your cart &#40;{cart.length}&#41;
            </div>
            {cart.map((item: any, i) => (
              <CartItem key={item.name + item.price + item.full_price} props={[item, i]}/>
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
