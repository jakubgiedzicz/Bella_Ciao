import { MenuItemType } from "@/types/DBtypes";
import styles from "@/styles/menu-item.module.css";
import Image from "next/image";
import Details from "@/components/itemPageButtons";
import Link from "next/link";
import CartButton from "@/components/itemPageCartButton";
import { getItem } from "@/lib/getItemData";
import { cartItemType } from "@/types/cartItemType";

export default async function Page({ params }: { params: { name: string } }) {
  const data = await getItem(params.name);
  const item: any = {...data.item, _id: params.name} as MenuItemType
  return (
    <main className={styles.item_container}>
      {data.item.name}
      <h4 className={styles.item_link}>
        <Link href="/order">Order Online</Link> &gt;{" "}
        <span className={styles.item_link_span}>{item.name}</span>
      </h4>
      <div className={styles.item_detail_wrap}>
        <div className={styles.image_small_container}>
          <Image src={item.link} alt="" width={100} height={100} />
        </div>
        <div className={styles.image_big_container}>
          <Image src={item.link} alt="" width={450} height={300} />
        </div>
        <div className={styles.item_desc}>
          <Details props={item}/>
        </div>
      </div>
    </main>
  );
}
