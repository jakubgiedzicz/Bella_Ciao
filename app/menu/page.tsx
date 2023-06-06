"use client";
import '../../styles/menu.css'
import Image from 'next/image';
import wine_img from '../../public/italian-wine.jpg'
export default function Menu() {
  return (
    <main className='main-menu'>
      <section className='menu-intro'>
        <div className="menu-intro-flex-text">
          <h5>amazing food</h5>
          <h1>
            Italian experience in Orangevale and Arden-Arcade, CA
          </h1>
          <a className='menu-intro-button-anchor' href='/order'>
            <button className='button-28 menu-intro'>Order</button>
          </a>
        </div>
        <Image src={wine_img} alt='wine image' className='menu-intro-img'/>
      </section>
      <section className='menu-featured'>
        <div className="menu-featured-title-btn-wrap">
          <h3>Featured items</h3>
          <div className="menu-featured-btn-grp">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 16 16">
              <path 
              fill="currentColor" 
              fill-rule="evenodd" 
              d="M4.3 7.3a1 1 0 0 0 0 1.4l6 6 1.4-1.4L6.42 8l5.3-5.3-1.42-1.4-6 6Z" 
              clip-rule="evenodd">
              </path>
            </svg>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 16 16">
              <path 
              fill="currentColor" 
              fill-rule="evenodd" 
              d="M11.7 7.3a1 1 0 0 1 0 1.4l-6 6-1.4-1.4L9.58 8l-5.3-5.3L5.7 1.3l6 6Z" 
              clip-rule="evenodd">
              </path>
            </svg>
          </div>
        </div>
        
      </section>
    </main>
  )
}