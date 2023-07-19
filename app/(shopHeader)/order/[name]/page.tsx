import { MenuItemType } from "@/types/DBtypes";
import styles from "@/styles/menu-item.module.css";
import Image from "next/image";
import Buttons from "@/components/itemPageButtons";
import Link from "next/link";
import CartButton from "@/components/itemPageCartButton";
import { getData } from "@/lib/getMenuData";
import { cartItemType } from "@/types/cartItemType";

interface Props {
  props: MenuItemType;
}
export default async function Page({ params }: { params: { name: string } }) {
  const data = await getData();
  const menu: any = data?.props.menu;
  const array = menu.filter((item: any) => item._id === params.name)
  const item = array[0]
  return (
    <main className={styles.item_container}>
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
          <h1 className={styles.desc_name}>{item.name}</h1>
          <h4 className={styles.desc_price}>{item.price}</h4>
          <Buttons quantity={1} id={'OrderPage'} updateCartQuant={null} updateCartItemQuant={null} orderPage={true}/>
          <h3 className={styles.desc_description}>Description</h3>
          <h4 className={styles.desc_details}>{item.details}</h4>
          <h3 className={styles.desc_warning_title}>Contains the following:</h3>
          <h4 className={styles.desc_warning}>{item.warnings}</h4>
          <h3>How to get it:</h3>
          <div className={styles.delivery_wrap}>
            <div className={styles.input_wrap}>
              <input
                type="radio"
                id="local"
                name="delivery_type"
                className={styles.radio_button}
              />
              <label htmlFor="local">
                <h4 className={styles.delivery_local}>Local delivery</h4>
              </label>
            </div>
            <div className={styles.input_wrap}>
              <input type="radio" id="venice" name="delivery_type" />
              <label htmlFor="venice">
                <div className={styles.delivery_details}>
                  <h4>Store pickup</h4>
                  <h5>Venice - Orangevale</h5>
                  <h5>5301 Hazel Ave Orangevale, CA</h5>
                </div>
              </label>
            </div>
            <div className={styles.input_wrap}>
              <input type="radio" id="florence" name="delivery_type" />
              <label htmlFor="florence">
                <div className={styles.delivery_details}>
                  <h4>Store pickup</h4>
                  <h5>Florence - Arden-Arcade</h5>
                  <h5>2626 Marigold Ln Arden-Arcade, CA</h5>
                </div>
              </label>
            </div>
            <CartButton props={item} id={'OrderPage'}/>
          </div>
        </div>
      </div>
    </main>
  );
}
