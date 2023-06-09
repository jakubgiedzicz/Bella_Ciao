"use client";
import { useEffect, useRef, useState } from 'react';
import '../../styles/reservations.css'

interface place {
  name: string,
  address: string,
  latitude: number,
  longtitude: number
}

export default function Reservations(this: any){
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
  const today = new Date();
  const form = `${today.getFullYear()}-0${today.getMonth()+1}-0${today.getDate()}`
  const time = today.toString()
  const now = time.slice(16, 21)
  return (
    <main className='reservations-main'>
      <section className='reservations-intro'>
        <h1>We&#39;re awaiting your arrival in Venice or Florence</h1>
        <div className="reservations-intro-wrap">
          <div className="reservation-intro-make-res">
            <h3 className='reservations-title'>Make a reservation</h3>
            <select name="places" id="place" className='reservations-select'>
                <option value="choose">Select a restaurant</option>
                <option value="venice">{`${places[0].name} - ${places[0].address}`}</option>
                <option value="florence">{`${places[1].name} - ${places[1].address}`}</option>
            </select>
            <input type='date' defaultValue={`${form}`} min={`${form}`} className='reservations-date'></input>
            <input type='time' defaultValue={now} min={'09:00'} max={'22:00:00'} className='reservations-time'></input>
            <button className='reservations-submit'>Get a table</button>
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