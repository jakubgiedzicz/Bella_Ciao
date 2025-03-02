"use client";
import styles from "@/styles/quantButtons.module.css";
import { MenuItemType } from "@/types/DBtypes";
import { useState } from "react";
import CartButton from "./itemPageCartButton";

export default function Details({
  props,
}: {
  props: MenuItemType;
}): JSX.Element {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
    <h1 className={styles.desc_name}>{props.name}</h1>
    <h4 className={styles.desc_price}>${(+props.price).toFixed(2)}</h4>
      <div className={styles.desc_quantity}>
        <button className={styles.desc_button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={()=> setQuantity((prev)=> prev - 1)}
          >
            <path fill="currentColor" d="M19 11H5v2h14v-2Z"></path>
          </svg>
        </button>
        <span className={styles.desc_quantity_display}>{quantity}</span>
        <button className={styles.desc_button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={()=> setQuantity((prev)=> prev + 1)}
          >
            <path
              fill="currentColor"
              d="M13 19v-6h6v-2h-6V5h-2v6H5v2h6v6h2Z"
            ></path>
          </svg>
        </button>
      </div>
      <h3 className={styles.desc_description}>Description</h3>
      <h4 className={styles.desc_details}>{props.details}</h4>
      <h3 className={styles.desc_warning_title}>Contains the following:</h3>
      <h4 className={styles.desc_warning}>{props.warnings}</h4>
      <CartButton props={props} q={quantity}/>
    </>
  );
}
