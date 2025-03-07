"use client";
import styles from '../styles/footer.module.css'
export default function Footer() {
  return (
  <>
   <footer className={styles.footer} id='contact'>
    <div className={styles.contact_wrap}>
      <div>
        <h3>Hours</h3>
        <h5>Monday - Saturday</h5>
        <h5>10 am - 8 pm</h5>
      </div>
      <div>
        <h3>Venice</h3>
        <h5>5301 Hazel Ave<br />
        Orangevale, CA<br />
        123-555-1234</h5>
      </div>
      <div>
        <h3>Florence</h3>
        <h5>2626 Marigold Ln<br />
        Arden-Arcade, CA<br />
        123-555-1235</h5>
      </div>
    </div>
    <div className={styles.contact_email}>
        <h3>bella@ciao.com</h3>
      </div>
    </footer> 
  </>
  )
}