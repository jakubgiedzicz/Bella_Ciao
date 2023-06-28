import styles from '../styles/order.module.css'
import Image from 'next/image'
export default function MenuItem(props: any): JSX.Element {
  return (
    <div className={styles.category_item_wrap}>
      <div className={styles.category_item_desc}>
        <h3>{props.props.name}</h3>
        <h4>{props.props.details}</h4>
        <h4>{props.props.price}</h4>
      </div>
      <Image src={props.props.id} alt='temp'/>
    </div>
  )
}