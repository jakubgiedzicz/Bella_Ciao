"use client"
import styles from "@/styles/menu-item.module.css";
import { useState } from "react";
interface Price {
  price: string
}
export default function Buttons({ price} : Price): JSX.Element {
  const [quant, setQuant] = useState(1)
  function handleClick(increment: boolean) {
    if(increment === false) {
      if(quant <= 1) {
        return
      } else {
        setQuant(quant - 1)
      }}
      if(increment === true) {
        setQuant(quant + 1)
      }
  }
  console.log(price)
  return (
    <>
      <h4 className={styles.desc_price}>{price}</h4>
      <div className={styles.desc_quantity}>
        <button className={styles.desc_button} onClick={() => handleClick(false)} id="decrement">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 11H5v2h14v-2Z"></path>
          </svg>
        </button>
        <p className={styles.desc_quantity_display} id="quant">{quant}</p>
        <button className={styles.desc_button} onClick={() => handleClick(true)} id="increment">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13 19v-6h6v-2h-6V5h-2v6H5v2h6v6h2Z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
