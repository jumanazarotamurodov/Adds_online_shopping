import React from 'react'
import location from "../img/pin.png"
import logo from "../img/Frame 48097284.png"
import search from "../img/search.png"
import rov from "../img/Group 48097294.png"
import rov2 from "../img/Group 48097355.png"
import "./nav.css"

const Nav = () => {
  return (
    <div className='Nav'>
        <div className="ragion">
            <ul>
                <li className='li1'><img src={location} /> Ташкент</li>
                <li>About marketplace</li>
                <li>Privacy policy</li>
                <li>Terms of use</li>
                <li>Public offering</li>
            </ul>
            <span className='span1'>Interface language</span>
            <span>Have a question?</span>
        </div>
        <nav>
            <img src={logo} alt="" className='logo' />
            <input type="text" placeholder='Search... ' id='search' />
            <label htmlFor="search">
            <img src={search} alt=""  className='search' />
            </label>
            <img src={rov} alt="" className='rov' />
            <img src={rov2} alt="" />
        </nav>
    </div>
  )
}

export default Nav