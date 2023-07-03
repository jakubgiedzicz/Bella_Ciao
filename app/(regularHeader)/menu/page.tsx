import styles from '@/styles/menu.module.css'
import Image from 'next/image';
import wine_img from '@/public/italian-wine.jpg'
import CarouselComp from '@/components/carousel';
import 'react-multi-carousel/lib/styles.css'
import { getData } from '@/lib/getMenuData';

export default async function Menu() {
  const menu = await getData()
  return (
    <main className={styles.main_menu}>
      <section className={styles.menu_intro}>
        <div className={styles.menu_intro_flex_text}>
          <h5>amazing food</h5>
          <h1>Italian experience in Orangevale and Arden-Arcade, CA</h1>
          <a className={styles.menu_intro_button_anchor} href='/order'>
            <button className={`${styles.button_28} ${styles.menu_intro}`}>Order</button>
          </a>
        </div>
        <Image src={wine_img} alt='wine image' className={styles.menu_intro_img}/>
      </section>
      <section className={styles.menu_featured}>
        <div className={styles.menu_featured_title_btn_wrap}>
          <h3>Featured items</h3>
        </div>
        <CarouselComp />
      </section>
      <section className={styles.menu_categories}>
        <h1 className={styles.menu_categories_title}>Bella Ciao Menu</h1>
        <h3 className={styles.menu_categories_extend}>Delicious italian food</h3>
        <div className={styles.menu_category_main_dish_wrap}>
          <div className={`${styles.category_main_dish} ${styles.small_plates}`}>
            <h1>Small Plates</h1>
          </div>
          <div className={`${styles.category_main_dish} ${styles.soups_salads}`}>
            <h1>Soups and Salads</h1>
          </div>
          <div className={`${styles.category_main_dish} ${styles.meat_fish}`}>
            <h1>Meat and Fish</h1>
          </div>
        </div>
        <div className={styles.menu_category_else_wrap}>
          <div className={`${styles.category_else_product} ${styles.essentials}`}>
            <h1>Essentials</h1>
          </div>
          <div className={`${styles.category_else_product} ${styles.white_wine}`}>
            <h1>White Wine</h1>
          </div>
          <div className={`${styles.category_else_product} ${styles.red_wine}`}>
            <h1>Red Wine</h1>
          </div>
          <div className={`${styles.category_else_product} ${styles.desserts}`}>
            <h1>Desserts</h1>
          </div>
        </div>
      </section>
    </main>
  )
}