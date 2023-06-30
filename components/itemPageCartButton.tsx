"use client"
import styles from '@/styles/menu-item.module.css'
import { useEffect, useState } from 'react'
export default function CartButton({ price }: { price: string }): JSX.Element {
  const actualPrice = +price.substring(1, price.length)
  const [quantity, setQuantity] = useState(1)
  function handleIncrement() {
    setQuantity(quantity + 1)
  }
  function handleDecrement() {
    setQuantity(quantity - 1)
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
  console.log(quantity)
  function handleClick() {
  }
  return (
    <button className={styles.button_28} onClick={() => handleClick()}>Add to cart ${(actualPrice * quantity).toFixed(2)}</button>
  )
}