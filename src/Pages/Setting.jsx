import React from 'react'
import user2 from "../img/Group 48097278.png"
import copy from "../img/u_copy.png"
import edit from "../img/edit2.png"
import "./fontawesome-free-6.4.0-web/fontawesome-free-6.4.0-web/css/all.css"
import "./setting.css"

const Setting = () => {
    return (
        <div className='Setting'>
            <div className="hover4"></div>
            <img src={user2} alt="" />
            <span className='name'>Shaxriyor Oripov</span>
            <span className='id'>#2389955</span>
            <img src={copy} alt="" />
            <img src={edit} alt="" className='edit' />
            <p>Edit profile</p>
            <hr />
            <h1>Peronal data:</h1>
            <div className="inouts">
                <div>
                    <label htmlFor="user"><i className='fa-solid fa-user'></i></label>
                    <input type="text" name="name" id="user" placeholder='Name:'/>
                </div>
                <div>
                    <label htmlFor="pass"><i class="fa-solid fa-key"></i></label>
                    <input type="Password" name="Password" id="pass" placeholder='Password:'/>
                </div>
                <div>
                    <label htmlFor="tel"><i class="fa-solid fa-phone"></i></label>
                    <input type="tel" name="" id="tel" placeholder='+998 (90) ___ __ __'/>
                </div>

            </div>
            <h1>Interface settings:</h1>
            <div className="sets">
                <div>
                <select className="select1">
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Arabik">Arabik</option>
                        <option value="French">French</option>
                    </select>
                </div>
                <div>
                    <p>Notification</p>
                    <button onClick={() => document.querySelector(".circle").classList.toggle("cirlce_active") }>
                        <div className="circle"></div>
                    </button>
                </div>
                <div>
                    <p>Dark theme</p>
                    <button onClick={() => document.querySelector(".circle2").classList.toggle("cirlce_active2")}>
                        <div className="circle2"></div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Setting