"use client"
import styles from '@/styles/menu-item.module.css'
import { useEffect, useState } from 'react'
import { MenuItemType } from '@/types/DBtypes'

export default function CartButton({ props }: { props: MenuItemType }): JSX.Element {
  /* Turn price string to price number */
  const actualPrice = +props.price.substring(1, props.price.length)
  
  const [quantity, setQuantity] = useState(1)

  /* Change state based on input */
  function handleIncrement() {
    setQuantity(quantity + 1)
  }
  function handleDecrement() {
    if(quantity <= 1){
      setQuantity(1)
    } else {
    setQuantity(quantity - 1)
    }
  }
  /* Add onClick event listener on mount */
  useEffect(() => {
    const increment = document.getElementById('increment')
    increment.addEventListener('click', handleIncrement)
    const decrement = document.getElementById('decrement')
    decrement.addEventListener('click', handleDecrement)
    return () => {
      decrement.removeEventListener('click', handleDecrement)
      increment.removeEventListener('click', handleIncrement)
    }
  })
  function handleProps() {
    let string = {
      name: props.name,
      price: props.price,
      link: props.link,
      quantity: quantity,
      full_price: (actualPrice * quantity).toFixed(2),
    }
    return string
  }
  
  
  /* Save item data in sessionStorage on mount */
  function handleClick() {
    sessionStorage.setItem('bella-ciao-item-data', JSON.stringify(handleProps()))
  }
  useEffect(() => {
    handleClick()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <button className={styles.button_28} id='cartButton'>Add to cart ${(actualPrice * quantity).toFixed(2)}</button>
  )
}