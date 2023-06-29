import { MenuItemType } from "@/types/DBtypes";
import styles from "@/styles/menu-item.module.css";
import img from "@/public/Cannoli.jpg";
import Image from "next/image";
import Buttons from "@/components/itemPageButtons";
interface Props {
  props: MenuItemType;
}
export default function Page({
  params,
  item,
}: {
  params: { name: string };
  item: Props;
}) {
  return (
    <main className={styles.item_container}>
      <h4 className={styles.item_link}>
        Order Online &gt; <span className={styles.item_link_span}>Lasagna</span>
      </h4>
      <div className={styles.item_detail_wrap}>
        <div className={styles.image_small_container}>
          <Image src={img} alt="" />
        </div>
        <div className={styles.image_big_container}>
          <Image src={img} alt="" />
        </div>
        <div className={styles.item_desc}>
          <h1 className={styles.desc_name}>Lasagna</h1>
          <h4 className={styles.desc_price}>$23.00</h4>
          <Buttons />
        </div>
      </div>
    </main>
  );
}
