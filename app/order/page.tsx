import wine_img from '../../public/italian-wine.jpg'
import temp from '../../public/margherita.jpg'
import styles from '../../styles/order.module.css'
import Image from "next/image";
import clientPromise from '../../lib/mongodb'
import OrderListItem from '../../components/orderPageListItem';
import MenuItem from '../../components/orderPageMenuItem';
import OrderCategory from '../../components/orderPageCategory';


export default async function Order(){
  const data = await getData()
  const menu = await data?.props.menu
  const categories = getCategories(menu)
  const small_plates = menu.filter(item => {
    return item.category === 'small-plates'
  })

  return (
    <main className={styles.light_bg}>
      {menu.map((item: any) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <p>{item.details}</p>
          <p>{item.category}</p>
        </li>
      ))}
      <section className={styles.order_intro}>
        <Image src={wine_img} alt='aha'/>
      </section>
      <section className={styles.order_btn_grp}>
        <ul className={styles.order_navigation}>
          <OrderListItem name="Small Plates" linkname='#small-plates'/>
          <OrderListItem name="Soups and Salads" linkname='#soups-and-salads'/>
          <OrderListItem name="Essentials" linkname='#essentials'/>
          <OrderListItem name="Meat and Fish" linkname='#meat-and-fish'/>
          <OrderListItem name="Soft Drinks" linkname='#soft-drinks'/>
          <OrderListItem name="Desserts" linkname='#desserts'/>
          <OrderListItem name="Beer" linkname='#beer'/>
          <OrderListItem name="White Wine" linkname='#white-wine'/>
          <OrderListItem name="Red Wine" linkname='#red-wine'/>
        </ul>
      </section>
      <section className={styles.order_category}>
            {categories.map(function(object, i){
              let data = getProps(object, menu)
              return <OrderCategory categories={object} key={i} data={data}/>
            })}
      </section>
    </main>
  )
}
async function getData() {
  try {
    const client = await clientPromise
    const db = client.db("Bella_Ciao")
    const menu = await db
    .collection("menu")
    .find({})
    .toArray()
    
    return {
      props: { menu: JSON.parse(JSON.stringify(menu)) }
    }
  } catch (e) {
    console.error(e)
  }
}
function getCategories(menu) {
  return menu.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index)
}
function getProps(categories, menu) {
  return menu.filter(item => {
    return item.category === categories
  })
}