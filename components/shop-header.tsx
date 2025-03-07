"use client";
import Image from "next/image";
import Logo from "@/public/home-icon.svg";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "./headerCartItem";
import { cartItemType } from "@/types/cartItemType";
import cart_svg from "../public/shopping-cart-outline.svg";

export default function ShopHeader() {
  //is burger toggled
  const [toggled, setToggled] = useState(false);
  // mobile navbar visibility / screen<760px
  const [visible, setVisible] = useState(false);
  // Window width
  const [width, setWidth] = useState(0);
  //cart items
  const [cart, setCart] = useState<cartItemType[]>([]);
  //cart state helper
  const [helper, setHelper] = useState(0);
  useEffect(() => {
    if (width <= 760) {
      setVisible(true);
    } else {
      setVisible(false);
      setToggled(false);
    }
  }, [width]);
  const getCartSum = () => {
    if(cart){
    let sum = 0;
    cart.forEach((i) => {
      sum += i.quantity * +i.price;
    });
    return sum != undefined ? sum : 0
  }
  };
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    function handleStorage() {
      setHelper((prev) => prev + 1);
    }
    const session = JSON.parse(sessionStorage.getItem("Bella-Ciao-cart"));
    if (session) {
      setCart(session);
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("storage", handleStorage);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== undefined) {
      setCart(JSON.parse(sessionStorage.getItem("Bella-Ciao-cart")));
    }
  }, [helper]);
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref className={styles.logo} aria-label="Take to homepage">
        <Image src={Logo} alt="" width={48} height={48} />
      </Link>
      <div className={!visible ? styles.links : styles.hide}>
        <a href="#contact">Contact</a>
        <Link href="/reservations">Reservations</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className={styles.navbar_cart}>
        <h2>{cart? cart.length : 0}</h2>
        {visible ? (
          <Image src={cart_svg} width={32} height={32} alt="shopping cart" />
        ) : (
          <Image
            src={cart_svg}
            width={32}
            height={32}
            alt="shopping cart"
            className={styles.burger}
            onClick={() => setToggled((prev) => !prev)}
          />
        )}
        <div className={toggled ? styles.dropdown : styles.hide}>
          <div className={styles.dropdown_title}>
            Your cart (${cart ? getCartSum().toFixed(2) : 0}):{" "}
          </div>
          {cart && cart.map((i) => (
            <CartItem key={i.id} props={i} setQuant={setCart} cart={cart} />
          ))}
        </div>
        {toggled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            width={32}
            height={32}
            onClick={() => setToggled((prev) => false)}
            className={
              visible ? styles.burger : styles.burger + " " + styles.hide
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            width={32}
            height={32}
            onClick={() => setToggled((prev) => true)}
            className={
              visible ? styles.burger : styles.burger + " " + styles.hide
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </nav>
  );
}
