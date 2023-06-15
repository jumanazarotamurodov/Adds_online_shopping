import { useEffect, useState } from 'react'
import Product from './Product'

const Post = () => {
    const[post,setPost] = useState()
    useEffect(() => {
        setPost(produkt)
    },[])
    let produkt = [
        {id:1},
        {id:2},
        {id:3},
        {id:4}
    ]
  return (
    <div>
        {
        post && post.map((item,inex) => (
            <Product />
        ))
        }
    </div>
  )
}

export default Post