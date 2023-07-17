"use client";
import Image from "next/image";
import Buttons from "./itemPageButtons";
import styles from "@/styles/shop-header.module.css";
import trash from "@/public/trash.svg";
import { cartItemType } from "@/types/cartItemType";
import { useEffect, useRef, useState } from "react";
interface props {
  props: cartItemType,
  interactive: boolean,
  removeItem: (id: string) => void,
  updateCartQuant: (change: number, item_id: string) => void
}
export default function CartItem({ props, interactive, removeItem, updateCartQuant }: props) {
  const [cartItemQuant, setCartItemQuant] = useState(props.quantity);
  const latestQuant = useRef(cartItemQuant);

  const updateItemQuant = (increment: boolean) => {
    if (increment === false) {
      if (cartItemQuant <= 1) {
        return;
      } else {
        setCartItemQuant((cartItemQuant) => cartItemQuant - 1);
      }
    }
    if (increment === true) {
      setCartItemQuant((cartItemQuant) => cartItemQuant + 1);
    }
  }
  /* Load sessionstorage, parse for items, iterate over them to find the one needed
     set quantity, full_price, turn into string, save in session */
  function updateSession() {
    let cart = [];
    let stringedCart: string[] = [];
    if (sessionStorage.getItem("bella-ciao-session-cart") !== null) {
      cart = JSON.parse(sessionStorage.getItem("bella-ciao-session-cart"));
    } else {
      return;
    }
    cart.forEach((element: cartItemType) => {
      if (element.id === props.id) {
        element.quantity = cartItemQuant;
        element.full_price = +(cartItemQuant * +element.price.substring(1)).toFixed(2);
      }
      stringedCart.push(JSON.stringify(element));
    });
    sessionStorage.setItem(
      "bella-ciao-session-cart",
      "[" + stringedCart.toString() + "]"
    );
  }

  useEffect(() => {
    latestQuant.current = cartItemQuant;
    updateSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItemQuant]);

  return (
    <div className={styles.cart_item_wrap} id={props.id}>
      <div className={styles.cart_details}>
        <Image
          src={props.link}
          alt=""
          width={50}
          height={50}
          className={styles.cart_img}
        />
        <span>{props.name}</span>
        <span>${(cartItemQuant * +props.price.substring(1)).toFixed(2)}</span>
      </div>
      <div className={interactive ? `${styles.cart_interactive} ${styles.cart_mobile}` : styles.cart_mobile}>
        <Buttons quantity={props.quantity} id={props.id} updateCartQuant={updateCartQuant} updateCartItemQuant={updateItemQuant}/>
        <Image
          src={trash}
          alt=""
          height={20}
          width={20}
          className={styles.trash}
          id={`trash${props.id}`}
          onClick={() => removeItem(props.id)}
        />
      </div>
    </div>
  );
}
