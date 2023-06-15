import React from 'react'
import "./product.css"
import icon from "../img/Ellipse 946.png"
import pro from "../img/Rectangle 24199.png"  
import eye from "../img/eye.png"
import bookmark from "../img/bookmark.png"
import chat from "../img/u_chat.png"
import share from "../img/mingcute_share-forward-line.png"
const Product = () => {
  return (
    <div className='Product'>
        <img src={icon} alt="" />
        <span className='icon'>Texnomart</span>
        <span className='follow'>Follow me</span>
        <img src={pro} alt="" className='pro' />
        <h2>Neo QLED 4K Smart TV QN90A</h2>
        <p>Samsung</p>
        <h1>1200$</h1>
        <img src={eye} alt="" /><span>335k</span>
        <div className="butFather">
          <div className="but">
        <img src={bookmark} alt="" />
        </div>
        <div className="but">
        <img src={chat} alt="" />
        </div>
        <div className="but">
        <img src={share} alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Product