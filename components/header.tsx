"use client";
import Image from "next/image"
import Logo from '../public/Logo.webp'
import styles from '../styles/navbar.module.css'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Header() {
  /* Navbar visibility; changes on user scroll */
  const [visible, setVisible] = useState(true)

  /* Navbar list items after clicking on designed button */
  const [toggled, setToggled] = useState(false)

  /* Prevent useEffect to display navbar on mount */
  const effectRan = useRef(false)

  const handleBurgerClick = () => {
    if(toggled === true) {
      setToggled(false)
    } else {
      setToggled(true)
    }
  }

  const handleScroll = (event: any) => {
    if(event.deltaY < 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const hideOnScroll = () => {
    const header: any = document.getElementById('header')
    const navbar: any = document.getElementsByClassName(styles.navbar)
    if(header.style.display === 'block' && navbar[0].style.width === 'auto'){
      setToggled(false)
      setVisible(false)
    }
  }

  const toggleNavbar = () => {
    toggleHeader()
    let button: any = document.getElementsByClassName(styles.nav_toggle)
    let links: any = document.getElementsByClassName(styles.nav_links)
    let links_wrap: any = document.getElementsByClassName(styles.list_toggle_wrap)
    button[0].classList.toggle(styles.open)
    links[0].classList.toggle(styles.open)
    links_wrap[0].classList.toggle(styles.open)
  }
  const toggleHeader = () => {
    if(document.documentElement.clientWidth < 760){
      const header: any = document.getElementById('header')
      const navbar: any = document.getElementsByClassName(styles.navbar)
      if(visible === true) {
        header.style.display = 'block'
      } else {
        header.style.display = 'none'
      }
      if(toggled === true){
        navbar[0].style.width = 'auto'
      } else {
        navbar[0].style.width = '100%'
      }
    }
  }
  useEffect(() => {
    if(effectRan.current === true){
      toggleNavbar()
    }
    return () => {
        effectRan.current = true
    }
  }, [toggled])


  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
    return () => window.removeEventListener('wheel', handleScroll)
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', hideOnScroll)
    return () => window.removeEventListener('wheel', hideOnScroll)
  }, [])

  useEffect(() => {
    toggleHeader()
  }, [visible])

  return (
    <>
    <header id="header">
      <nav className={styles.navbar}>
        <Link href='/' className={styles.logo_image_link}>
          <Image 
          src={Logo} 
          alt='Logo'
          className={styles.logo_img}
        />
        </Link>
        <div className={styles.list_toggle_wrap}>
          <div className={styles.nav_links}>
            <ul className={styles.nav_list}>
              <li>
                <Link href='/menu'>
                  Menu
                </Link>
              </li>
              <li>
                <Link href='/reservations'>
                  Reservations
                </Link>
              </li>
              <li>
                <a href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <Link href='/blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/order">
                  <span className={styles.order_list_item}>Order</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/order">
            <button className={styles.button_28} role="button">
              Order
            </button>
          </Link>
        <button aria-label="toggle menu" className={styles.nav_toggle} onClick={handleBurgerClick}>
          <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" className={styles.openIcon}>
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className={styles.closeIcon}>
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
  </>
  )
}