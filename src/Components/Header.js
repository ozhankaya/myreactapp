import LemonLogo from '../pic/Logo.svg'
import React from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi';

function alertMe() {
    let hamburger = document.getElementById('mobile-menu-list');
    console.log(hamburger.style.display);

    if ((hamburger.style.display) === 'flex') {
        console.log("yes");
        hamburger.style.display = 'none';
    }
    else {
        console.log("yes");
        hamburger.style.display = 'flex';
        hamburger.style.flexDirection = 'column';
        hamburger.style.position= 'absolute';
        hamburger.style.right= '30px';
        hamburger.style.top= '70px';
        hamburger.style.backgroundColor= 'white';
        hamburger.style.padding= '3rem 3rem';
        hamburger.style.borderRadius= '15px';
        hamburger.style.boxShadow= '5px 3px 2px rgb(140 152 164 /15%)';
        

    }
}

export default function Header() {
    return (
        <header>
            <div className="navbar container">

                <div className="logo">
                    <img src={LemonLogo} alt='company logo'></img>
                </div>
                <nav className='desktop-menu'>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/menu"><li>Menu</li></Link>
                        <Link to="/reservation"><li>Reservation</li></Link>
                    </ul>
                </nav>
                <nav className='mobile-menu'>

                    <GiHamburgerMenu className='my-hamburger' id='hambur' onClick={alertMe} />

                    <ul className='mobile-menu-list' id='mobile-menu-list'>
                        <Link to="/" onClick={alertMe}><li>Home</li></Link>
                        <Link to="/about" onClick={alertMe}><li>About</li></Link>
                        <Link to="/menu" onClick={alertMe}><li>Menu</li></Link>
                        <Link to="/reservation" onClick={alertMe}><li>Reservation</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}