"use client"
import styles from '@/styles/menu-item.module.css'
import { useEffect, useState } from 'react'
import { MenuItemType } from '@/types/DBtypes'
export default function CartButton({ props }: { props: MenuItemType }): JSX.Element {
  const actualPrice = +props.price.substring(1, props.price.length)
  const [quantity, setQuantity] = useState(1)
  const [itemN, setItemN] = useState(sessionStorage.length)
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
      full_price: (actualPrice * quantity).toFixed(2)
    }
    return string
  }
  function handleClick() {
    sessionStorage.setItem(`cartItem${itemN}`, JSON.stringify(handleProps()))
    setItemN(itemN + 1)
  }

  return (
    <button className={styles.button_28} onClick={() => handleClick()} id='cartButton'>Add to cart ${(actualPrice * quantity).toFixed(2)}</button>
  )
}