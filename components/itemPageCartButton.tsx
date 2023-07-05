"use client"
import styles from '@/styles/menu-item.module.css'
import { useEffect, useState } from 'react'
import { MenuItemType } from '@/types/DBtypes'
export default function CartButton({ props }: { props: MenuItemType }): JSX.Element {
  const actualPrice = +props.price.substring(1, props.price.length)
  const [quantity, setQuantity] = useState(1)
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
  function handleStorage(item: string){
    let storage = sessionStorage.getItem('cart')
    let arr = [storage]
    arr.push(item)
    sessionStorage.setItem('cart', arr.toString())
    console.log(storage)
  }
  function handleClick() {
    let storage = sessionStorage.getItem('cart')
    console.log(storage)
    if (storage === null) {
      sessionStorage.setItem('cart', JSON.stringify(handleProps()))
      console.log(storage)
    } else {
      handleStorage(storage)
    }
    /* sessionStorage.setItem('cart', JSON.stringify()) */
  }
  return (
    <button className={styles.button_28} onClick={() => handleClick()}>Add to cart ${(actualPrice * quantity).toFixed(2)}</button>
  )
}