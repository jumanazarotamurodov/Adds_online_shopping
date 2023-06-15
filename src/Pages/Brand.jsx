import { useEffect, useState } from "react"
import "./brand.css"
import apple from "../img/Apple.png"

const Brand = () => {
    const[state,setState] = useState([])
    useEffect(() => {
        setState(brand)
    },[])
    let brand = [
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
        {id:"Apple"},
    ]
  return (
    <div className='Brand'>
        <h2>Brand</h2>
        <p className='see'>See all</p>
        
            <div className="logos">
            {
            state.map(item =>(
                <div className="apple">
                <img src={apple} alt="" />
                <p>{item.id}</p>
                </div>
                ))
            }
            </div>     
            
    </div>
  )
}

export default Brand