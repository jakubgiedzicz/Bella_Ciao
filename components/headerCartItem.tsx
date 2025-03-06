"use client";
import Image from "next/image";
import Buttons from "./itemPageButtons";
import styles from "@/styles/shop-header.module.css";
import trash from "@/public/trash.svg";
import { cartItemType } from "@/types/cartItemType";
import { useEffect, useRef, useState } from "react";
interface props {
  props: cartItemType;
  setQuant: (item: cartItemType[]) => void;
  cart: cartItemType[];
}
export default function CartItem({ props, setQuant, cart }: props) {
  const handleClick = (increment: boolean) => {
    const newCart = cart.map((i) => {
      if (i.id === props.id) {
        if((i.quantity -1) == 0 && !increment) return i
        return {
          ...i,
          quantity: increment ? i.quantity + 1 : i.quantity - 1,
        }
      } else return i;
    });
    setQuant(newCart)
  }
  useEffect(()=> {
    sessionStorage.setItem("Bella-Ciao-cart", JSON.stringify(cart))
  },[cart])
  return (
    <div className={styles.dropdown_item}>
      <Image
        src={props.link}
        alt={`${props.name} image`}
        width={50}
        height={50}
      />
      <span>{props.name}</span>
      <span>${(props.price*props.quantity).toFixed(2)}</span>
      <div className={styles.dropwdown_item_button_wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          onClick={() => handleClick(false)}
        >
          <path fill="currentColor" d="M19 11H5v2h14v-2Z"></path>
        </svg>
        <div className={styles.dropdown_item_quantity}>{props.quantity}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          onClick={() => handleClick(true)}
        >
          <path
            fill="currentColor"
            d="M13 19v-6h6v-2h-6V5h-2v6H5v2h6v6h2Z"
            width={24}
            height={24}
          ></path>
        </svg>
      </div>
    </div>
  );
}
