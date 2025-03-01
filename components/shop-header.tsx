"use client";
import Image from "next/image";
import Logo from "@/public/home-icon.svg";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "./headerCartItem";
import { cartItemType } from "@/types/cartItemType";
import cart_svg from "../public/shopping-cart-outline.svg";
const item: cartItemType = {
  id: "m",
  link: "https://i.redd.it/8p649rdtwnle1.png",
  name: "Minestrone",
  price: 20.95,
  quantity: 2,
};

export default function ShopHeader() {
  //is burger toggled
  const [toggled, setToggled] = useState(false);
  // mobile navbar visibility / screen<760px
  const [visible, setVisible] = useState(false);
  // Window width
  const [width, setWidth] = useState(0);
  //cart items
  const [cart, setCart] = useState<cartItemType[]>([]);
  //cart value
  const [cartSum, setCartSum] = useState<number>();
  //cart state helper
  const [helper, setHelper] = useState(0)
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
    function handleStorage(){
      setHelper((prev) => prev+1)
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
    let sum = 0;
    cart.forEach((i) => {
      sum += i.quantity * +i.price;
    });
    setCartSum(sum);
    sessionStorage.setItem("Bella-Ciao-cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    if (typeof window !== undefined) {
      setCart(JSON.parse(sessionStorage.getItem("Bella-Ciao-cart")));
    }
  }, [helper]);
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref className={styles.logo}>
        <Image src={Logo} alt="" width={48} height={48} />
      </Link>
      <div className={!visible ? styles.links : styles.hide}>
        <a href="#contact">Contact</a>
        <Link href="/reservations">Reservations</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className={styles.navbar_cart}>
        <h2>{cart.length}</h2>
        <Image src={cart_svg} width={32} height={32} alt="shopping cart" />
        <div className={toggled ? styles.dropdown : styles.hide}>
          <div className={styles.dropdown_title}>
            Your cart (${cartSum ? cartSum.toFixed(2) : 0}):{" "}
          </div>
          {cart.map((i) => (
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
