import React from 'react'
import New from "../img/Rectangle 24290.png"
import chat from "../img/u_chat.png"
import share from "../img/mingcute_share-forward-line.png"
import "./new.css"

const News = () => {
  return (
    <div className='New'>
      <div className="new1">
        <div className="news">
          <p>Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
          <div className="newIcon">
          <img src={chat} alt="" />
          <img src={share} alt="" />
        </div>
        </div>
        <div className="news">
          <p>Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
          <div className="newIcon">
          <img src={chat} alt="" />
          <img src={share} alt="" />
        </div>
        </div>
      </div>
      <div className="new2">
        <div className="news">
          <p>Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
          <img src={New} alt="" className='newImg'/>
        </div>
        <div className="newIcon">
          <img src={chat} alt="" />
          <img src={share} alt="" />
        </div>
      </div>
      <div className="new1">
        <div className="news">
          <p>Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
          <div className="newIcon">
          <img src={chat} alt="" />
          <img src={share} alt="" />
        </div>
        </div>
        <div className="news">
          <p>Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini </p>
          <div className="newIcon">
          <img src={chat} alt="" />
          <img src={share} alt="" />
        </div>
        </div>
      </div>
      <div className="hover2"></div>
    </div>
  )
}

export default News