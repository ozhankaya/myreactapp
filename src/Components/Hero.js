import RestaurantFood from '../pic/restauranfood2.jpg'
import Restaurant from '../pic/restaurant.jpg'
import MarioAdrian from '../pic/marioadrian1.jpg'
import React from "react"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <main>
            <section className='introduction'>
                <div className='intro-section container'>
                    <div className='intro-text'>
                        <p className='tag-line'>Little Lemon</p>
                        <p className='main-line'>Chicago</p>
                        <p className='hero-description'>We are a family owned restaurant, focused on traditional recipes served with a modern twist</p>
                        <Link to="/reservation"><button className='reserve-btn'>Reservation</button></Link>
                    </div>

                    <div className="hero-image">
                        <img className='big-pic' src={RestaurantFood} alt='food'></img>
                    </div>
                </div>
            </section>
        </main>
    )
}