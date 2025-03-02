"use client"
import styles from '@/styles/menu-item.module.css'
import { useEffect, useState } from 'react'
import { MenuItemType } from '@/types/DBtypes'

export default function CartButton({ props, q }: {props: MenuItemType, q: number}): JSX.Element {

  return (
    <button className={styles.button_28} id='cartButton'>Add to cart ${(+props.price * q).toFixed(2)}</button>
  )
}