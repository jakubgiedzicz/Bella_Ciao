"use client"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import Link from "next/link"
import styles from '../styles/menu.module.css'
import Image from "next/image"
import cacciatore_img from '../public/chicken-cacciatore.jpg'
import tiramisu from '../public/castelfranco-with-vincotto-and-blu-di-bufala.jpg'

export default function CarouselComp() {
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
    <>
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
          <div className={styles.menu_carousel_item_container}>
            <Link href='/product/cacciatore' passHref>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Chicken Cacciatore</h3>
            <p>$24.95</p>
          </div>
          <div className={styles.menu_carousel_item_container}>
            <Link href='/product/cacciatore' passHref>
              <Image src={tiramisu} alt='aha' />
            </Link>
            <h3>Lasagna</h3>
            <p>$32.95</p>
          </div>
          <div className={styles.menu_carousel_item_container}>
            <Link href='/product/cacciatore' passHref>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Spaghetti and meatballs</h3>
            <p>$28.95</p>
          </div>
          <div className={styles.menu_carousel_item_container}>
            <Link href='/product/cacciatore' passHref>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Four cheese pasta</h3>
            <p>$33.95</p>
          </div>
          <div className={styles.menu_carousel_item_container}>
            <Link href='/product/cacciatore' passHref>
              <Image src={cacciatore_img} alt='aha' />
            </Link>
            <h3>Pizza margherita</h3>
            <p>$30.95</p>
          </div>
        </Carousel>
    </>
  )
}