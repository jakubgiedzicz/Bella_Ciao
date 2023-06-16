"use client";
import wine_img from '../../public/italian-wine.jpg'
import temp from '../../public/margherita.jpg'
import '../../styles/order.css'
import Image from "next/image";
import Link from 'next/link';

export default function Order(){
  return (
    <main className='light-bg'>
      <section className="order-intro">
        <Image src={wine_img} alt='aha'/>
      </section>
      <section className="order-btn-grp">
        <div className="order-search-btn">?</div>
        <ul className='order-navigation'>
          <li>
            <Link href="#small-plates">
              Small Plates
            </Link>
          </li>
          <li>
            <Link href="#soups-and-salads">
              Soups and Salads
            </Link>
          </li>
          <li>
            <Link href="#essentials">
              Essentials
            </Link>
          </li>
          <li>
            <Link href="#meat-and-fish">
              Meat and Fish
            </Link>
          </li>
          <li>
            <Link href="#soft-drinks">
              Soft Drinks
            </Link>
          </li>
          <li>
            <Link href="#desserts">
              Desserts
            </Link>
          </li>
          <li>
            <Link href="#beer">
              Beer
            </Link>
          </li>
          <li>
            <Link href="#white-wine">
              White & Amber Wine
            </Link>
          </li>
          <li>
            <Link href="#red-wine">
              Red Wine
            </Link>
          </li>
        </ul>
      </section>
      <section className='order-category'>
        <div id='small-plates' className='category-grid-wrap'>
          <div className="order-category-title">
            <h2>Small Plates</h2>
          </div>
          <div className="category-grid-container">
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
          </div>
        </div>
        <div id='soups-and-salads' className='category-grid-wrap'>
          <div className="order-category-title">
            <h2>Soups and Salads</h2>
          </div>
          <div className="category-grid-container">
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
          </div>
        </div>
        <div id='essentials' className='category-grid-wrap'>
          <div className="order-category-title">
            <h2>Essentials</h2>
          </div>
          <div className="category-grid-container">
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
          </div>
        </div>
        <div id='meat-and-fish' className='category-grid-wrap'>
          <div className="order-category-title">
            <h2>Meat and Fish</h2>
          </div>
          <div className="category-grid-container">
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
            <div className='category-item-wrap'>
              <div className='category-item-desc'>
                <h3>Pkhali</h3>
                <h4>Hand-chopped baby spinach and beets pkhali with walnuts and herbs.
                  Served with eggplant rolls and grilled rosemary bread with olives.</h4>
                <h4>$20.00</h4>
              </div>
              <Image src={temp} alt='temp'/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}