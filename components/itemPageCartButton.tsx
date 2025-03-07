"use client";
import styles from "@/styles/menu-item.module.css";
import { MenuItemType } from "@/types/DBtypes";
import { cartItemType } from "@/types/cartItemType";

export default function CartButton({
  props,
  q,
}: {
  props: MenuItemType;
  q: number;
}): JSX.Element {
  const handleClick = () => {
    let storage: cartItemType[] = JSON.parse(
      sessionStorage.getItem("Bella-Ciao-cart")
    );
    if (!storage) {
      storage = []
      storage.push({
        id: props._id,
        link: props.link,
        name: props.name,
        price: +props.price,
        quantity: q,
      });
      sessionStorage.setItem("Bella-Ciao-cart", JSON.stringify(storage));
    } else if (storage.find((e) => e.id === props._id)) {
      const newStorage = storage.map((i) => {
        if (i.id === props._id) {
          return {
            ...i,
            quantity: q,
          };
        } else return i;
      });
      sessionStorage.setItem("Bella-Ciao-cart", JSON.stringify(newStorage));
    } else {
      storage.push({
        id: props._id,
        link: props.link,
        name: props.name,
        price: +props.price,
        quantity: q,
      });
      sessionStorage.setItem("Bella-Ciao-cart", JSON.stringify(storage));
    }
    window.dispatchEvent(new Event("storage"))
  };
  return (
    <button className={styles.button_28} onClick={handleClick}>
      Add to cart ${(+props.price * q).toFixed(2)}
    </button>
  );
}
