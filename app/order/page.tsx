"use client";
import wine_img from '../../public/italian-wine.jpg'
import temp from '../../public/margherita.jpg'
import '../../styles/order.css'
import '../../styles/navbar_light.css'
import Image from "next/image";

export default function Order(){
  return (
    <main>
      <section className="order-intro">
        <Image src={wine_img} alt='aha'/>
      </section>
      <section className="order-btn-grp">
        <div className="order-search-btn">?</div>
        <ul className='order-navigation'>
          <li>
            <a href="#small-plates">
              Small Plates
            </a>
          </li>
          <li>
            <a href="#soups-and-salads">
              Soups and Salads
            </a>
          </li>
          <li>
            <a href="#essentials">
              Essentials
            </a>
          </li>
          <li>
            <a href="#meat-and-fish">
              Meat and Fish
            </a>
          </li>
          <li>
            <a href="#soft-drinks">
              Soft Drinks
            </a>
          </li>
          <li>
            <a href="#desserts">
              Desserts
            </a>
          </li>
          <li>
            <a href="#beer">
              Beer
            </a>
          </li>
          <li>
            <a href="#white-wine">
              White & Amber Wine
            </a>
          </li>
          <li>
            <a href="#red-wine">
              Red Wine
            </a>
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