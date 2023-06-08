"use client";
import { useEffect, useRef, useState } from 'react';
import '../../styles/reservations.css'

interface place {
  name: string,
  address: string,
  latitude: number,
  longtitude: number
}

export default function Reservations(){
  const [hidden, setHidden] = useState(true)
  const effectRan = useRef(false)
  const [places, setPlaces] = useState<place[]>([
    {
    name: 'Venice',
    address: '5301 Hazel Ave Orangevale, CA',
    latitude: 38.678,
    longtitude: -121.207
  },
  {
    name: 'Florence',
    address: '2626 Marigold Ln Arden-Arcade, CA',
    latitude: 38.596,
    longtitude: -121.3847,
  }
  ])
  const handleDropdown = () => {
    if(hidden === false){
      setHidden(true)
    } else {
      setHidden(false)
    }
  }
  useEffect(() => {
    const menu: any = document.querySelector('.dropdown-content')
    if(effectRan.current === false){
      effectRan.current = true
    }
    if(hidden === true) {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
      return () => {
        effectRan.current = true
    }
  },[hidden])
  return (
    <main className='reservations-main'>
      <section className='reservations-intro'>
        <h1>We&#39;re awaiting your arrival in Venice or Florence</h1>
        <div className="reservations-intro-wrap">
          <div className="reservation-intro-make-res">
            <h3 className='reservations-title'>Make a reservation</h3>
            <div className="dropdown">
              <div className='drop-btn' onClick={() => handleDropdown()}>
                <div className="wrap">
                  <span>Select a restaurant</span>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/></svg>
                </div>
                <div className="dropdown-content">
                  <p className='restaurant-pick'>{`${places[0].name}`}</p>
                  <p className='restaurant-pick'>{`${places[1].name}`}</p>
              </div>
              </div>
            </div>
          </div>
        <iframe 
        src="https://www.google.com/maps/d/u/0/embed?mid=1vNCJfHCeNSFNMLpjDUiu2IqQpLormnM&ehbc=2E312F&z=11" 
        width="640" 
        height="480">
        </iframe>
        </div>
      </section>
    </main>
  )
}