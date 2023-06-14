"use client";
import Image from "next/image"
import Logo from '../public/Logo.webp'
import '../styles/navbar.css'
import { useEffect, useRef, useState } from "react";
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
    const navbar: any = document.getElementById('navbar')
    if(header.style.display === 'block' && navbar.style.width === 'auto'){
      setToggled(false)
      setVisible(false)
    }
  }

  const toggleNavbar = () => {
    toggleHeader()
    let button: any = document.getElementById('nav-toggle')
    let links: any = document.querySelector('.nav-links')
    let links_wrap: any = document.querySelector('.list-and-toggle-wrap')
    button.classList.toggle('open')
    links.classList.toggle('open')
    links_wrap.classList.toggle('open')
  }
  const toggleHeader = () => {
    if(document.documentElement.clientWidth < 760){
      const header: any = document.getElementById('header')
      const navbar: any = document.getElementById('navbar')
      if(visible === true) {
        header.style.display = 'block'
      } else {
        header.style.display = 'none'
      }
      if(toggled === true){
        navbar.style.width = 'auto'
      } else {
        navbar.style.width = '100%'
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
      <nav id="navbar">
        <a href='/' className="logo-image-link">
          <Image 
          src={Logo} 
          alt='Logo'
          className="logo-img"
        />
        </a>
        <div className="list-and-toggle-wrap">
          <div className="nav-links">
            <ul id="nav-list">
              <li>
                <a href='/menu'>
                  Menu
                </a>
              </li>
              <li>
                <a href='/reservations'>
                  Reservations
                </a>
              </li>
              <li>
                <a href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <a href='/blog'>
                  Blog
                </a>
              </li>
              <li>
                <a href="/order">
                  <span className="order-list-item">Order</span>
                </a>
              </li>
            </ul>
          </div>
          <a href="/order" className="order-link">
            <button className="button-28" role="button">
              Order
            </button>
          </a>
        <button aria-label="toggle menu" id="nav-toggle" onClick={handleBurgerClick}>
          <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" className="openIcon">
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
          className="closeIcon">
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