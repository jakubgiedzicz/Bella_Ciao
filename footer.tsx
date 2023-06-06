"use client";
import '../styles/footer.css'
export default function Footer() {
  return (
  <>
   <footer id='contact'>
    <div className="contact-wrap">
      <div className="contact-hours">
        <h3>Hours</h3>
        <h5>Monday - Saturday</h5>
        <h5>10 am - 8 pm</h5>
      </div>
      <div className="contact-venice">
        <h3>Venice</h3>
        <h5>5301 Hazel Ave</h5>
        <h5>Orangevale, CA</h5>
        <h5 className='contact-number'>123-555-1234</h5>
      </div>
      <div className="contact-florence">
        <h3>Florence</h3>
        <h5>2626 Marigold Ln</h5>
        <h5>Arden-Arcade, CA</h5>
        <h5 className='contact-number'>123-555-1235</h5>
      </div>
    </div>
    <div className="contact-email">
        <h3>bella@ciao.com</h3>
      </div>
    </footer> 
  </>
  )
}