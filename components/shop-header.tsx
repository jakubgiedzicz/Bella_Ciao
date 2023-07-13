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
  const [cartSum, setCartSum] = useState(0);
  const [cartVisibility, setCartVisibility] = useState(false);
  const cartRef = useRef(null);

  /* Helper is used to render cart */
  const [helper, setHelper] = useState(0);

  const [toBeRemoved, setToBeRemoved] = useState("");

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
  const toggleCart = () => {
    cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
  };
  const toggleCartStyle = () => {
    const cart = cartRef.current;
    if (cartRef.current !== null) {
      cartVisibility
        ? (cart.style.display = "none")
        : (cart.style.display = "flex");
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
  const deleteFunction = (e: Event) => {
    if ((e.target as HTMLImageElement).id.slice(0, 5) === "trash") {
      setToBeRemoved((toBeRemoved) =>
        (e.target as HTMLImageElement).id.substring(5)
      );
    }
  };
  let cartButtonFunction = (e: Event) => {
    if ((e.target as HTMLButtonElement).id === "cartButton") {
      setHelper((helper) => helper + 1);
    }
  };
  /* createItem returns object with full price (number), id, link, name, price (string), quantity */
  const createItem = () => {
    let item = JSON.parse(sessionStorage.getItem("bella-ciao-item-data"));
    let quantity = document.getElementById("quantOrderPage").textContent;
    item.quantity = +quantity;
    item.id = getUniqueId();
    item.full_price = (item.full_price * item.quantity).toFixed(2);
    return item;
  };
  const stringifyCart = () => {
    let array = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== toBeRemoved) {
        array.push(JSON.stringify(cart[i]));
      }
    }
    return array;
  };
  /* Saves cart items to sessionstorage */
  const saveSession = (item: cartItemType, deleting: boolean) => {
    if (deleting === true) {
      sessionStorage.setItem(
        "bella-ciao-session-cart",
        "[" + stringifyCart().toString() + "]"
      );
    } else {
      let array = [JSON.stringify(item)];
      let array2 = stringifyCart();
      sessionStorage.setItem(
        "bella-ciao-session-cart",
        "[" + [...array2, ...array].toString() + "]"
      );
    }
  };
  /* Loads sessionstorage to cart on mount */
  const loadSession = () => {
    if (sessionStorage.getItem("bella-ciao-session-cart") !== null) {
      try {
        setCart(JSON.parse(sessionStorage.getItem("bella-ciao-session-cart")));
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    toggleCartStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartVisibility]);

  useEffect(() => {
    window.addEventListener("click", deleteFunction);
    return () => {
      window.removeEventListener("click", deleteFunction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (effectRan.current === true) {
      setCart(cart.filter((item) => item.id !== toBeRemoved));
      saveSession(cart.filter((item) => item.id === toBeRemoved)[0], true);
    }
    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toBeRemoved]);

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    setCartSum((sum) =>
      cart !== null
        ? +cart
            .map((item) => +item.price.substring(1) * item.quantity)
            .reduce((a, i) => a + i, 0)
            .toFixed(2)
        : 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    if (effectRan.current === true) {
      let item = createItem();
      setCart((cart) => [...cart, item]);
      saveSession(item, false);
    }
    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [helper]);

  useEffect(() => {
    window.addEventListener("click", cartButtonFunction);
    return () => window.removeEventListener("click", cartButtonFunction);
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
          <div className={`${styles.cart_wrap} ${styles.openCartWrap}`}>
            <span className={styles.cart_span}>Your cart:</span>
            <div className={styles.cart_svg} onClick={() => toggleCart()}></div>
            <div className={styles.cart_numbers} id="cart-number">
              <div className={styles.cart_itemN}>{cart.length}</div>
              <div className={styles.cart_itemPrice}>
                ${isNaN(cartSum) ? 0 : cartSum.toFixed(2)}
              </div>
            </div>
            <div className={styles.cart} ref={cartRef}>
              <div className={styles.cart_your_cart}>
                Your cart &#40;{cart.length}&#41; $
                {isNaN(cartSum) ? 0 : cartSum.toFixed(2)}
              </div>
              {cart.map((item: cartItemType) => (
                <CartItem key={item.id} props={item} />
              ))}
              <button className={styles.cart_button}>
                Continue to payment
              </button>
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
                <li>
                  <div className={styles.cart_wrap}>
                    <span className={styles.cart_span}>Your cart:</span>
                    <div className={styles.cart_svg}></div>
                    <div className={styles.cart_numbers} id="cart-number">
                      <div className={styles.cart_itemN}>{cart.length}</div>
                      <div className={styles.cart_itemPrice}>
                        ${isNaN(cartSum) ? 0 : cartSum.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className={styles.modal_list_products}>
                {cart.map((item: cartItemType) => (
                  <li key={item.id}>
                    <CartItem props={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
