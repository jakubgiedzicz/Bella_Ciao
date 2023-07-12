"use client";
import Image from "next/image";
import Buttons from "./itemPageButtons";
import styles from "@/styles/shop-header.module.css";
import trash from "@/public/trash.svg";
import { cartItemType } from "@/types/cartItemType";
import { useEffect, useRef, useState } from "react";

export default function CartItem({ props }: { props: cartItemType }) {
  const [quant, setQuant] = useState(props.quantity);
  const latestQuant = useRef(quant);
  const handleClick = (e: Event) => {
    if (
      (e.target as HTMLButtonElement).id === `increment${props.id}` ||
      (e.target as HTMLImageElement).id === `incrementSvg${props.id}` ||
      (e.target as HTMLImageElement).id === `incrementPath${props.id}`
    ) {
      setQuant((quant) => quant + 1);
    } else if (
      (e.target as HTMLButtonElement).id === `decrement${props.id}` ||
      (e.target as HTMLImageElement).id === `decrementSvg${props.id}` ||
      (e.target as HTMLImageElement).id === `decrementPath${props.id}`
    ) {
      if (latestQuant.current > 1) {
        setQuant((quant) => quant - 1);
      } else {
        setQuant(1);
      }
    }
  };
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
        element.quantity = quant;
        element.full_price = (quant * +element.price.substring(1)).toFixed(2);
      }
      stringedCart.push(JSON.stringify(element));
    });
    sessionStorage.setItem(
      "bella-ciao-session-cart",
      "[" + stringedCart.toString() + "]"
    );
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    latestQuant.current = quant;
    updateSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quant]);

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
        <span>${(quant * +props.price.substring(1)).toFixed(2)}</span>
      </div>
      <div className={styles.cart_interactive}>
        <Buttons quantity={props.quantity} id={props.id} />
        <Image
          src={trash}
          alt=""
          height={20}
          width={20}
          className={styles.trash}
          id={`trash${props.id}`}
        />
      </div>
    </div>
  );
}
