import wine_img from '../../public/italian-wine.jpg'
import temp from '../../public/margherita.jpg'
import styles from '../../styles/order.module.css'
import Image from "next/image";
import Link from 'next/link';
import clientPromise from '../../lib/mongodb'
import OrderListItem from '@/components/orderPageListItem';
import MenuItem from '@/components/orderPageMenuItem';


export default async function Order(){
  const data = await getData()
  const menu = await data?.props.menu
  const smalls = menu.filter(obj => {
    return obj.category === 'meat-fish'
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
        <div id='small-plates' className={styles.category_grid_wrap}>
          <div className={styles.order_category_title}>
            <h2>Small Plates</h2>
          </div>
          <div className={styles.category_grid_container}>
            {menu ?
            menu.filter(item => {
              return item.category === 'small-plates'
            }).map((item) => (
              <MenuItem props={item} key={item.id}/>
            ))
            : <h1>aha</h1>
          }
          </div>
        </div>
        <div id='soups-and-salads' className={styles.category_grid_wrap}>
          <div className={styles.order_category_title}>
            <h2>Soups and Salads</h2>
          </div>
          <div className={styles.category_grid_container}>
          {menu ?
            menu.filter(item => {
              return item.category === 'soups-salads'
            }).map((item) => (
              <MenuItem props={item} key={item.id}/>
            ))
            : <h1>aha</h1>
          }
          </div>
        </div>
        <div id='essentials' className={styles.category_grid_wrap}>
          <div className={styles.order_category_title}>
            <h2>Essentials</h2>
          </div>
          <div className={styles.category_grid_container}>
          {menu ?
            menu.filter(item => {
              return item.category === 'essentials'
            }).map((item) => (
              <MenuItem props={item} key={item.id}/>
            ))
            : <h1>aha</h1>
          }
          </div>
        </div>
        <div id='meat-and-fish' className={styles.category_grid_wrap}>
          <div className={styles.order_category_title}>
            <h2>Meat and Fish</h2>
          </div>
          <div className={styles.category_grid_container}>
          <div className={styles.category_item_wrap}>
              <div className={styles.category_item_desc}>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className={styles.category_item_wrap}>
              <div className={styles.category_item_desc}>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className={styles.category_item_wrap}>
              <div className={styles.category_item_desc}>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
          </div>
        </div>
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