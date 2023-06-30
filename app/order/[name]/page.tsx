import { MenuItemType } from "@/types/DBtypes";
import styles from "@/styles/menu-item.module.css";
import img from "@/public/Cannoli.jpg";
import Image from "next/image";
import Buttons from "@/components/itemPageButtons";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function getData(arg: any) {
  try {
    let o_id = new ObjectId(arg)
    const client = await clientPromise
    const db = client.db("Bella_Ciao")
    const menu = await db
    .collection("menu")
    .find({_id: o_id})
    .toArray()
    
    return {
      props: { menu: JSON.parse(JSON.stringify(menu)) }
    }
  } catch (e) {
    console.error(e)
  }
}

interface Props {
  props: MenuItemType;
}
export default async function Page({ params }: { params: { name: string } }) {
  const data = await getData(params.name)
  return (
    <main className={styles.item_container}>
      <h4 className={styles.item_link}>
        <Link href="/order">Order Online</Link> &gt;{" "}
        <span className={styles.item_link_span}>{data?.props.menu[0].name}</span>
      </h4>
      <div className={styles.item_detail_wrap}>
        <div className={styles.image_small_container}>
          <Image src={img} alt="" />
        </div>
        <div className={styles.image_big_container}>
          <Image src={img} alt="" />
        </div>
        <div className={styles.item_desc}>
          <h1 className={styles.desc_name}>{data?.props.menu[0].name}</h1>
          <Buttons />
        </div>
      </div>
    </main>
  );
}