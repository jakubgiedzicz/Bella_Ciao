"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import styles from "../styles/menu.module.css";
import Image from "next/image";
import { MenuItemType } from "@/types/DBtypes";
interface props {
  soups_salads: MenuItemType[],
  meat_fish: MenuItemType[],
  desserts: MenuItemType[],
  red: MenuItemType[],
  small_plates: MenuItemType[]
}

export default function CarouselComp({ soups_salads, meat_fish, desserts, red, small_plates }: props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1900 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
          <Link href={'/order/#meat-and-fish'} passHref>
            <Image src={meat_fish[1].link} alt="aha"  width={450} height={300}/>
          </Link>
          <h3>{meat_fish[1].name}</h3>
          <p>{meat_fish[1].price}</p>
        </div>
        <div className={styles.menu_carousel_item_container}>
          <Link href="/order/#small-plates" passHref>
            <Image src={small_plates[1].link} alt="aha" width={450} height={300}/>
          </Link>
          <h3>{small_plates[1].name}</h3>
          <p>{small_plates[1].price}</p>
        </div>
        <div className={styles.menu_carousel_item_container}>
          <Link href="/order/#soups-salads" passHref>
            <Image src={soups_salads[1].link} alt="aha"  width={450} height={300}/>
          </Link>
          <h3>{soups_salads[1].name}</h3>
          <p>{soups_salads[1].price}</p>
        </div>
        <div className={styles.menu_carousel_item_container}>
          <Link href="/order/#desserts" passHref>
            <Image src={desserts[1].link} alt="aha"  width={450} height={300}/>
          </Link>
          <h3>{desserts[1].name}</h3>
          <p>{desserts[1].price}</p>
        </div>
        <div className={styles.menu_carousel_item_container}>
          <Link href="/order/#red-wine" passHref>
            <Image src={red[1].link} alt="aha"  width={450} height={300}/>
          </Link>
          <h3>{red[1].name}</h3>
          <p>{red[1].price}</p>
        </div>
      </Carousel>
    </>
  );
}
