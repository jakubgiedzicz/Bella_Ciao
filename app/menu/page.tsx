"use client";
import '../../styles/menu.css'
import Image from 'next/image';
import wine_img from '../../public/italian-wine.jpg'
import caponata_img from '../../public/caponata.jpg'
import cacciatore_img from '../../public/chicken-cacciatore.jpg'
import lasagna_img from '../../public/lasagna.png'
import margherita_img from '../../public/margherita.jpg'
import four_cheese_pasta_img from '../../public/quattro-formaggi-four-cheese-pasta.jpg'
import small_plate from '../../public/small-plate-bruscetta.jpg'
import soup_salad from '../../public/soups-salads-pasta-e-ceci.jpg'
import meat_fish from '../../public/meat-fish.jpg'
import white_wine from '../../public/white-wine.jpg'
import red_wine from '../../public/red-wine.png'
import dessert from '../../public/dessert-tiramisu.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link';
export default function Menu() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1900 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
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
          <h1>Italian experience in Orangevale and Arden-Arcade, CA</h1>
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
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
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
            <Link href='/product/cacciatore'>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Chicken Cacciatore</h3>
            <p>$24.95</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Link href='/product/cacciatore'>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Lasagna</h3>
            <p>$32.95</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Link href='/product/cacciatore'>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Spaghetti and meatballs</h3>
            <p>$28.95</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Link href='/product/cacciatore'>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Four cheese pasta</h3>
            <p>$33.95</p>
          </div>
          <div className='menu-carousel-item-container'>
            <Link href='/product/cacciatore'>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Pizza margharita</h3>
            <p>$30.95</p>
          </div>
        </Carousel>
      </section>
      <section className='menu-categories'>
        <h1 className='menu-categories-title'>Bella Ciao Menu</h1>
        <h3 className='menu-categories-extend'>Delicious italian food</h3>
        <div className="menu-category-main-dish-wrap">
          <div className='category-main-dish small-plates'>
            <h1>Small Plates</h1>
          </div>
          <div className='category-main-dish soups-salads'>
            <h1>Soups and Salads</h1>
          </div>
          <div className='category-main-dish meat-fish'>
            <h1>Meat and Fish</h1>
          </div>
        </div>
        <div className="menu-category-else-wrap">
          <div className='category-else-product essentials'>
            <h1>Essentials</h1>
          </div>
          <div className='category-else-product white-wine'>
            <h1>White Wine</h1>
          </div>
          <div className='category-else-product red-wine'>
            <h1>Red Wine</h1>
          </div>
          <div className='category-else-product desserts'>
            <h1>Desserts</h1>
          </div>
        </div>
      </section>
    </main>
  )
}