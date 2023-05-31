import Image from 'next/image'
import '../styles/home.css'
import pizza from '../public/intro-pizza-sm.jpg'
import logo from '../public/logo-bella2.png'
import pizza_img from '../public/pizza-img.png'
import sandwich_img from '../public/sandwich-img.png'
import pasta_img from '../public/pasta-img.png'
import wine_img from '../public/italian-wine.jpg'
export default function Home() {
  
  return (
    <>
    <main className='intro'>
      <div className="intro-wrap">
        <div className='intro-wrap-grid'>
          <div className='left-intro-column'>
            <Image src={pizza} alt='pizza slices image'/>
          </div>
          <section className='right-intro-column'>
            <Image src={logo} alt='Bella Ciao logo'/>
            <h2> Original Italian food and wine experience</h2>
            <h5>
              Famous across the whole globe, italian cuisine best known for dishes like 
              Pizza or Risotto is much more richer than two previously mentioned meals.
            </h5>
            <h5>
              Sounds interesting? Getting hungry?
              Get your order <span className='order-link-span'><a href='/order'>here</a></span> or 
              click the button below to see our menu! 
            </h5>
            <button className='button-28 into'>Menu</button>
          </section>
        </div>
      </div>
      <section className='intro-extend'>
        <h1 className='extend-title'>Discover Italian cuisine</h1>
        <div className='intro-extend-flex'>
            <a href='/menu' className='intro-extend-anchor'>
              <Image src={sandwich_img} alt='sandwich image' className='sandwich-img'/>
              <h3>Catering</h3>
            </a>
            <a href='/order' className='intro-extend-anchor'>
              <Image src={pizza_img} alt='pizza image' className='pizza-img'/>
              <h3>Menu</h3>
            </a>
            <a href='/catering' className='intro-extend-anchor'>
              <Image src={pasta_img} alt='pizza image' className='pasta-img'/>
              <h3>Order</h3>
            </a>
        </div>
      </section>
      <section className='parallax-shot'></section>
      <section className='about-italy'>
        <div className='italy-desc'>
          <div className="italy-desc-text">
            <h1>Italy</h1>
            <h3>
            Italy is a country in Southern and 
          Western Europe surrounded by Mediterranean Sea and several islands. 
          Italy shares land borders with France, Switzerland, Austria, Slovenia 
          and the enclaved microstates of Vatican City and San Marino.
          Its cuisine and cooking techniques spread around the world together with waves of Italian diaspora.
          It is one of the best-known and most appreciated gastronomies worldwide.
            </h3>
            <a href="https://google.com" className="desc-btn">Read More</a>
          </div>
          <div className="italy-desc-map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className="gmap_iframe" 
                src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=Italy&amp;t=p&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://capcuttemplate.org/">Capcuttemplate.org</a>
              </div>
            </div>
          </div>
        </div>
        <div className='italy-wine-desc'>
          <div className="italy-wine-desc-img">
            <Image src={wine_img} alt='wine image'/>
          </div>
          <div className="italy-wine-desc-text">
            <h1>Italian Wine</h1>
            <h3>For reds, it&#39;s the soil. Italy&#39;s mountainous soil is 
          basically one 750-mile-long rock. Like the expression “to get blood from a 
          stone,” vines have barely enough water to survive. Grapes undiluted with 
          water are packed with flavor and texture.</h3>
          <a href="https://google.com" className="desc-btn">Shop Now</a>
          </div>
        </div>
      </section>
      <section className='delivery-parallax'>
        <div className='delivery-parallax-wrap'>
          <h2>Take it home</h2>
          <h1>We Deliver</h1>
          <div className='delivery-btn-grp'>
            <a href='/delivery'>
              <button className='button-28 delivery'>Delivery</button>
            </a>
              <button className='button-28 delivery'>Pickup</button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
