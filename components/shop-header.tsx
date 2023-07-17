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

  /* Cart summary state, true means user can see context menu */
  const [cartVisibility, setCartVisibility] = useState(false);
  const cartVisibilityOnMount = useRef(false);

  /* Burger button click state; true means user can see context menu*/
  const [toggled, setToggled] = useState(false);
  const mobileNavbarVisibleOnMount = useRef(false);

  /* !!!!!!!!!!!!!!!!!! */
  function toggleCartStyle() {
    const cart2 = document.getElementById("cartMain");
    cartVisibility
      ? (cart2.style.display = "flex")
      : (cart2.style.display = "none");
  }

  function toggleMobileNavbar() {
    const modal = document.getElementById("modal");
    toggled ? (modal.style.display = "flex") : (modal.style.display = "none");
  }
  const stringifyCart = () => {
    let array = [];
    for (let i = 0; i < cart.length; i++) {
      array.push(JSON.stringify(cart[i]));
    }
    return array;
  };
  const createCartItem = () => {
    let item = JSON.parse(sessionStorage.getItem("bella-ciao-item-data"));
    item.quantity = +document.getElementById("quantOrderPage").textContent;
    item.id = getUniqueId();
    item.full_price = +(item.full_price * item.quantity).toFixed(2);
    return item;
  };
  const deleteCartItem = (id: string) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const addItemToCart = () => {
    setCart((cart) => [...cart, createCartItem()]);
  };
  const handleAddItemToCartButton = (e: Event) => {
    if ((e.target as HTMLButtonElement).id === "cartButton") {
      addItemToCart();
    }
  };

  function loadCartFromSession() {
    if (sessionStorage.getItem("bella-ciao-session-cart") !== null) {
      setCart(JSON.parse(sessionStorage.getItem("bella-ciao-session-cart")));
    }
  }
  function saveCartToSession() {
    sessionStorage.setItem(
      "bella-ciao-session-cart",
      "[" + [...stringifyCart()].toString() + "]"
    );
  }
  function updateCartItemQuantity(change: number, item_id: string) {
    const updated = cart.map((item) => {
      if (item.id !== item_id) {
        return item;
      } else {
        return {
          ...item,
          quantity: item.quantity + change,
          full_price: (item.quantity + change) * +item.price.substring(1),
        };
      }
    });
    setCart(updated);
  }
  useEffect(() => {
    loadCartFromSession();
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleAddItemToCartButton);

    return () => {
      window.removeEventListener("click", handleAddItemToCartButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCartSum((sum) => cart.reduce((acc, obj) => acc + obj.full_price, 0));
    saveCartToSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    if (mobileNavbarVisibleOnMount.current === true) {
      toggleMobileNavbar();
    }
    return () => {
      mobileNavbarVisibleOnMount.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggled]);

  useEffect(() => {
    if (cartVisibilityOnMount.current === true) {
      toggleCartStyle();
    }

    return () => {
      cartVisibilityOnMount.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartVisibility]);

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
            <div
              className={styles.cart_svg}
              onClick={() =>
                cartVisibility
                  ? setCartVisibility((cartVisibility) => false)
                  : setCartVisibility((cartVisibility) => true)
              }
            ></div>
            <div className={styles.cart_numbers} id="cart-number">
              <div className={styles.cart_itemN}>{cart.length}</div>
              <div className={styles.cart_itemPrice}>
                ${isNaN(cartSum) ? 0 : cartSum.toFixed(2)}
              </div>
            </div>
            <div className={styles.cart} id="cartMain">
              <div className={styles.cart_your_cart}>
                Your cart &#40;{cart.length}&#41; $
                {isNaN(cartSum) ? 0 : cartSum.toFixed(2)}
              </div>
              {cart.map((item: cartItemType) => (
                <CartItem
                  key={item.id}
                  props={item}
                  interactive={true}
                  removeItem={deleteCartItem}
                  updateCartQuant={updateCartItemQuantity}
                />
              ))}
              <button className={styles.cart_button}>
                Continue to payment
              </button>
            </div>
            <button
              aria-label="toggle menu"
              className={styles.nav_toggle}
              onClick={() => {
                toggled
                  ? setToggled((toggled) => false)
                  : setToggled((toggled) => true);
              }}
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
                onClick={() => {
                  toggled
                    ? setToggled((toggled) => false)
                    : setToggled((toggled) => true);
                }}
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
                {cart.map((item: cartItemType) => (
                  <li key={item.id} className={styles.cart_li}>
                    <CartItem
                      key={item.id}
                      props={item}
                      interactive={true}
                      removeItem={deleteCartItem}
                      updateCartQuant={updateCartItemQuantity}
                    />
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
