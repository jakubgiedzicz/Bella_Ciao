import wine_img from '../../public/italian-wine.jpg'
import styles from '../../styles/order.module.css'
import Image from "next/image";
import OrderListItem from '../../components/orderPageListItem';
import OrderCategory from '../../components/orderPageCategory';
import { MenuItemType } from '@/types/DBtypes';
import { getData } from '@/lib/getMenuData';

export default async function Order(){
  const data = await getData()
  const menu = await data?.props.menu
  const categories = getCategories(menu)
  return (
    <main className={styles.light_bg}>
      <section className={styles.order_intro}>
        <Image src={wine_img} alt='aha'/>
      </section>
      <section className={styles.order_btn_grp}>
        <ul className={styles.order_navigation}>
          <OrderListItem name="Small Plates" linkname='#small-plates'/>
          <OrderListItem name="Soups and Salads" linkname='#soups-salads'/>
          <OrderListItem name="Essentials" linkname='#essentials'/>
          <OrderListItem name="Meat and Fish" linkname='#meat-and-fish'/>
          <OrderListItem name="Desserts" linkname='#desserts'/>
          <OrderListItem name="White Wine" linkname='#white-wine'/>
          <OrderListItem name="Red Wine" linkname='#red-wine'/>
        </ul>
      </section>
      <section className={styles.order_category}>
            {categories.map(function(object: string, i: number){
              let data = getProps(object, menu)
              return <OrderCategory categories={object} key={i} data={data}/>
            })}
      </section>
    </main>
  )
}
function getCategories(menu: MenuItemType[]) {
  return menu.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index)
}
function getProps(categories: string, menu: MenuItemType[]) {
  return menu.filter(item => {
    return item.category === categories
  })
}