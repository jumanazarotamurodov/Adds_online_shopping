import { useEffect, useState } from "react"
import "./Subscribed.css"
import Category from './category'
import Product from "./Product"
import Post from "./Post"
import Rec from "./Rec"

const Subscribed = () => {
  const[post,setPost] = useState([])
  useEffect(() => {
    setPost(data)
  },[])
  let data = [
    {title:"Toys" ,class:"box"},
    {title:"Wealthy",class:"boy"},
    {title:"Wealthys",class:"boy"},
    {title:"Wealthy",class:"boy"},
    {title:"Wealthy",class:"boy"},
    {title:"Wealthy",class:"boy"},
    {title:"Wealthy",class:"boy"},
    {title:"Wealthy",class:"boy"}

  ]
  return (
    <div className="subscribed">
      <div className="hover1"></div>
      <div>
      <div className='Subscribed'>
        <div className="catigory">
          <span>Filter: <span>BMW X6</span></span>
          <span>Sort by: <span>Price</span></span>
          <span className='data'>321: last updated</span>
        </div>
        <div className="rows">
        {
          post && post.map((item,index) =>(
            <Category key={index} item={item} />
          ))
        }
        </div>
        
      </div>
      <div className="boproducts">
        <Post />
      </div>
    </div>
    <Rec />
    </div>
    
  )
}

export default Subscribed