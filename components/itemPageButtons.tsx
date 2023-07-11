"use client"
import styles from "@/styles/quantButtons.module.css";
import { useState } from "react";
export default function Buttons({ quantity, id }: {quantity: number, id: string}): JSX.Element {
  const [quant, setQuant] = useState<number>(quantity)
  function handleClick(increment: boolean) {
    if(increment === false) {
      if(quant <= 1) {
        return
      } else {
        setQuant((quant) => quant - 1)
      }}
      if(increment === true) {
        setQuant((quant) => quant + 1)
      }
  }
  return (
    <>
      <div className={styles.desc_quantity}>
        <button className={styles.desc_button} onClick={() => handleClick(false)} id={`decrement${id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 11H5v2h14v-2Z"></path>
          </svg>
        </button>
        <span className={styles.desc_quantity_display} id={`quant${id}`}>{quant}</span>
        <button className={styles.desc_button} onClick={() => handleClick(true)} id={`increment${id}`}>
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
