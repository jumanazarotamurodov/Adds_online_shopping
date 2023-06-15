import React from 'react'
import bear from "../img/Ellipse 956.png"

const Category = ({item}) => {
  return (
    <div className='boxs'>
        <div className={item.class}>
            <img src={bear} alt="" />
            <p>{item.title}</p>
        </div>
    </div>
  )
}

export default Category