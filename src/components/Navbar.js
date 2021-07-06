import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../components/Navbar.css'


function Navbar() {
    return (
     
        <div className="navmain">
            <nav className="navBox">
                <div className="first-div">
            <span className="logo">
                    <Link to='/'>
                    {/* <img className='logo-img' src="https://i.pinimg.com/originals/a9/4e/ed/a94eedba4571e9a93eff1f51db48c39f.png"></img> */}
                    <img className='logo-img' src="https://www.surprisetechguy.com/wp-content/uploads/2018/01/cropped-Surprise-Tech-Guy-Favicon-Light-512x512-1.png"></img>
                    </Link>
                    </span>
                <ul className="first-split">
                    <li>
                <Link to='/' className="home-link">
                    Home
                </Link>
                </li>
                <li className="gaming-link">
                <Link to='/gaming' className="gamings-link">
                    Gaming
                </Link>
                </li>
                <li className="gaming-link">
                <Link to='/contact' className="contact-link">
                    Contact
                </Link>
                </li>
               
                </ul>
                </div>
                <ul className="split">
               <li> <Link to='/login' className="login-link">
                    Login/Sign Up
                </Link>
                </li>
                <li>
                <Link to='/cart' className="cart-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                    Cart
                    <span className="cart-batch"></span>
                    </span>
                  
                </Link>
                </li>
                </ul>
             
               


            </nav>
            <h1 className="nav-heading">Welcome to AK Tech</h1>
              
           
            
             
           
            
        </div>
    )
}

export default Navbar
