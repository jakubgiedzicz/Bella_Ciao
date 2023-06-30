import styles from '../styles/order.module.css'
import Image from 'next/image'
import { MenuItemType } from '@/types/DBtypes'
import Link from 'next/link'

interface PropsType {
  props: MenuItemType
}
export default function MenuItem( {props}: PropsType ): JSX.Element {
  let src = props.link
  return (
    <>
    <Link href={`/order/${props._id}`} passHref>
      <div className={styles.category_item_wrap}>
        <div className={styles.category_item_desc}>
          <h3>{props.name}</h3>
          <h4>{props.details}</h4>
          <h4>{props.price}</h4>
        </div>
        <Image src={src} alt='temp' width={100} height={100}/>
      </div>
      </Link>
    </>
  )
}