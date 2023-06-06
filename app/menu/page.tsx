"use client";
import '../../styles/menu.css'
import Image from 'next/image';
import wine_img from '../../public/italian-wine.jpg'
import caponata_img from '../../public/caponata.jpg'
import cacciatore_img from '../../public/chicken-cacciatore.jpg'
import lasagna_img from '../../public/lasagna.png'
import margherita_img from '../../public/margherita.jpg'
import four_cheese_pasta_img from '../../public/quattro-formaggi-four-cheese-pasta.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
export default function Menu() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
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
              fillRule="evenodd" 
              d="M4.3 7.3a1 1 0 0 0 0 1.4l6 6 1.4-1.4L6.42 8l5.3-5.3-1.42-1.4-6 6Z" 
              clipRule="evenodd">
              </path>
            </svg>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 16 16">
              <path 
              fill="currentColor" 
              fillRule="evenodd" 
              d="M11.7 7.3a1 1 0 0 1 0 1.4l-6 6-1.4-1.4L9.58 8l-5.3-5.3L5.7 1.3l6 6Z" 
              clipRule="evenodd">
              </path>
            </svg>
          </div>
        </div>
        <Carousel 
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-margin-40-px"
        >
          <div className='menu-carousel-item-container'>
            <Image src={caponata_img} alt='aha' />
            <h3>aha</h3>
            <p>20zł</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Image src={cacciatore_img} alt='aha' />
            <h3>aha</h3>
            <p>20zł</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Image src={lasagna_img} alt='aha' />
            <h3>aha</h3>
            <p>20zł</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Image src={margherita_img} alt='aha' />
            <h3>aha</h3>
            <p>20zł</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Image src={four_cheese_pasta_img} alt='aha' />
            <h3>aha</h3>
            <p>20zł</p>
          </div>
        </Carousel>

      </section>
    </main>
  )
}