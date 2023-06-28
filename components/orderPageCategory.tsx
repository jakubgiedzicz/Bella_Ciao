import styles from '../styles/order.module.css'
import MenuItem from './orderPageMenuItem'
export default function OrderCategory(props: any): JSX.Element {
  return (
      <div id={props.data[0].category} className={styles.category_grid_wrap}>
        <div className={styles.order_category_title}>
          <h2>{props.data[0].category}</h2>
        </div>
          <div className={styles.category_grid_container}>
            {props ? 
              props.data.map((object) => (
                <MenuItem props={object} key={object.id} />
              ))
            : <h1>Aha</h1>}
        </div>
      </div>
  )
}