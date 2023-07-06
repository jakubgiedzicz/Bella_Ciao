"use client"
import Image from "next/image";
import Buttons from "./itemPageButtons";
import styles from '@/styles/shop-header.module.css'
import trash from '@/public/trash.svg'
import img from "@/public/Cannoli.jpg";
export default function CartItem(cart: any) {
  return (
    <div className={styles.cart_item_wrap}>
      <div className={styles.cart_details}>
        <Image src={img} alt="" width={50} height={50} className={styles.cart_img}/>
        <span>Lasagna</span>
        <span>$46,00</span>
      </div>
      <div className={styles.cart_interactive}>
        <Buttons />
        <Image src={trash} alt="" height={20} width={20} className={styles.trash}/>
      </div>
    </div>
  );
}
