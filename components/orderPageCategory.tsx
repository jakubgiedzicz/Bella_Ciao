import styles from '../styles/order.module.css'
import MenuItem from './orderPageMenuItem'
import { MenuItemType } from '@/types/DBtypes'
export default function OrderCategory(props: any): JSX.Element {
  const categoryName = getCategoryName(props.data[0].category)
  return (
      <div id={props.data[0].category} className={styles.category_grid_wrap}>
        <div className={styles.order_category_title}>
          <h2>{categoryName}</h2>
        </div>
          <div className={styles.category_grid_container}>
            {props.data.map((object: MenuItemType) => (
                <MenuItem props={object} key={object._id} />
              ))}
        </div>
      </div>
  )
}

function getCategoryName(category: string) {
  let categoryName = ''
  switch (category) {
    case 'meat-fish':
      categoryName = 'Meat and Fish'
      break
    case 'small-plates':
      categoryName = 'Small Plates'
      break
    case 'soups-salads':
      categoryName = 'Soups and Salads'
      break
    case 'essentials':
      categoryName = 'Essentials'
      break
    case 'white-wine':
      categoryName = 'White Wine'
      break
    case 'red-wine':
      categoryName = 'Red Wine'
      break
    case 'desserts':
      categoryName = 'Desserts'
      break
  }
  return categoryName
}