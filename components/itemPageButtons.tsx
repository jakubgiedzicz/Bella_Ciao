"use client"
import styles from "@/styles/menu-item.module.css";
export default function Buttons() {
  return (
    <>
      <h4 className={styles.desc_price}>$23.00</h4>
      <div className={styles.desc_quantity}>
        <button className={styles.desc_button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 11H5v2h14v-2Z"></path>
          </svg>
        </button>
        <p className={styles.desc_quantity_display}>1</p>
        <button className={styles.desc_button}>
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
