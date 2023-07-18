import Image from "next/image";
import styles from "@/styles/home.module.css";
import '@/styles/globals.css'
import pizza from "@/public/intro-pizza-sm.jpg";
import logo from "@/public/logo-bella2.png";
import pizza_img from "@/public/pizza-img.png";
import sandwich_img from "@/public/sandwich-img.png";
import pasta_img from "@/public/pasta-img.png";
import wine_img from "@/public/italian-wine.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main>
        <div className={styles.intro_wrap}>
          <div className={styles.intro_wrap_grid}>
            <div className={styles.left_intro_column}>
              <Image src={pizza} alt="pizza slices image" />
            </div>
            <section className={styles.right_intro_column}>
              <Image src={logo} alt="Bella Ciao logo" />
              <h2> Original Italian food and wine experience</h2>
              <h5>
                Famous across the whole globe, italian cuisine best known for
                dishes like Pizza or Risotto is much more richer than two
                previously mentioned meals.
              </h5>
              <h5>
                Sounds interesting? Getting hungry? Get your order{" "}
                <span className={styles.order_link_span}>
                  <Link href="/order">here</Link>
                </span>{" "}
                or click the button below to see our menu!
              </h5>
              <button className={styles.button_29}>Menu</button>
            </section>
          </div>
        </div>
        <section className={styles.intro_extend}>
          <h1 className={styles.extend_title}>Discover Italian cuisine</h1>
          <div className={styles.intro_extend_flex}>
            <Link href="#contact" passHref>
              <Image
                src={sandwich_img}
                alt="sandwich image"
                className={styles.sandwich_img}
              />
              <h3>Contact</h3>
            </Link>
            <Link href="/menu" passHref>
              <Image
                src={pizza_img}
                alt="pizza image"
                className={styles.pizza_img}
              />
              <h3>Menu</h3>
            </Link>
            <Link href="/order" passHref>
              <Image
                src={pasta_img}
                alt="pizza image"
                className={styles.pasta_img}
              />
              <h3>Order</h3>
            </Link>
          </div>
        </section>
        <section className={styles.parallax_shot}></section>
        <section className={styles.about_italy}>
          <div className={styles.italy_desc}>
            <div className={styles.italy_desc_text}>
              <h1>Italy</h1>
              <h3>
                Italy is a country in Southern and Western Europe surrounded by
                Mediterranean Sea and several islands. Italy shares land borders
                with France, Switzerland, Austria, Slovenia and the enclaved
                microstates of Vatican City and San Marino. Its cuisine and
                cooking techniques spread around the world together with waves
                of Italian diaspora. It is one of the best-known and most
                appreciated gastronomies worldwide.
              </h3>
              <Link href="https://google.com" className={styles.desc_btn}>
                Read More
              </Link>
            </div>
            <div className={styles.italy_desc_map}>
              <div className={styles.mapouter}>
                <div className={styles.gmap_canvas}>
                  <iframe
                    className={styles.gmap_iframe}
                    src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=Italy&amp;t=p&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <Link href="https://capcuttemplate.org/">
                    Capcuttemplate.org
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.italy_wine_desc}>
            <div className={styles.italy_wine_desc_img}>
              <Image src={wine_img} alt="wine image" />
            </div>
            <div className={styles.italy_wine_desc_text}>
              <h1>Italian Wine</h1>
              <h3>
                For reds, it&#39;s the soil. Italy&#39;s mountainous soil is
                basically one 750-mile-long rock. Like the expression “to get
                blood from a stone,” vines have barely enough water to survive.
                Grapes undiluted with water are packed with flavor and texture.
              </h3>
              <Link href="https://google.com" className="desc-btn">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.delivery_parallax}>
          <div className={styles.delivery_parallax_wrap}>
            <h2>Take it home</h2>
            <h1>We Deliver</h1>
            <div className={styles.delivery_btn_grp}>
              <Link href="/order" passHref>
                <button className={styles.button_29}>Delivery</button>
              </Link>
              <button className={styles.button_29}>Pickup</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
