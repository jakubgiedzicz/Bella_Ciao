"use client";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CartItem from "./headerCartItem";
import { cartItemType } from "@/types/cartItemType";
import { getUniqueId } from "@/lib/generateId";

export default function ShopHeader() {
  const [cart, setCart] = useState<cartItemType[]>([]);

  const [helper, setHelper] = useState(0);

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
  /* Function used for blocking scrolling and displaying/expanding modal */
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

  /* buttonFunction is used to update cart state
   target textContent of quantity button, set actual quantity,
   generate unique id, calculate price, update cart, save to sessionStorage 
   setCart((cart) => [...cart, item])*/

  let buttonFunction = (e: Event) => {
    if ((e.target as HTMLButtonElement).id === "cartButton") {
      setHelper((helper) => helper + 1);
    }
  };
  const createItem = () => {
    let item = JSON.parse(sessionStorage.getItem("bella-ciao-item-data"));
    let quantity = document.getElementById("quantOrderPage").textContent;
    item.quantity = quantity;
    item.id = getUniqueId();
    item.full_price = (item.full_price * item.quantity).toFixed(2);
    return item;
  };
  const saveSession = (item: any) => {
    let string = JSON.stringify(item)
    for (let i = 0; i< cart.length; i++){
      string += JSON.stringify(cart[i]) + '|'
    }
    if (string.charAt(string.length - 1) === '|'){
      string = string.slice(0, -1)
    }
    console.log(string, 'save string')
    sessionStorage.setItem('bella-ciao-session-cart', string)
  }
  const loadSession = () => {
    if (sessionStorage.getItem('bella-ciao-session-cart') !== null){
      let array = sessionStorage.getItem('bella-ciao-session-cart').split('|')
      console.log(sessionStorage.getItem('bella-ciao-session-cart'), 'storage')
      console.log(array, 'array')
      array.forEach((element : any) => {
          console.log(element, 'load element')
          setCart((cart) => [...cart, element])
      });
    }
  }

  useEffect(() => {
    loadSession()
  },[])

  useEffect(() => {
    if (effectRan.current === true) {
      let item = createItem();
      setCart((cart) => [...cart, item])
      saveSession(item)
      console.log(cart, 'cart')
    }
    return () => {
      effectRan.current = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [helper]);

  useEffect(() => {
    window.addEventListener("click", buttonFunction);
    return () => window.removeEventListener("click", buttonFunction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {/* {cart.map((item: any) => (
              <CartItem key={item.id} props={item} />
            ))} */}
            <button className={styles.cart_button}>Continue to payment</button>
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
