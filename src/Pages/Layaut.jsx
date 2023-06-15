import { Link, Outlet } from "react-router-dom"
import userImg from "../img/Subtract.png"
import userIcon from "../img/mdi_account-tick-outline.png"
import chat from "../img/u_chat.png"
import news from "../img/u_newspaper.png"
import sale from "../img/iconmonstr-tag-21 (1) 1.png"
import setting from "../img/fi_settings.png"
import "./layaut.css"

const Layaut = () => {
  return (
    <div>
      <div className='layaut'>
        <div className="user">
        <img src={userImg} alt="" />
        <span><b>Dilfuza Qodirova</b></span>
        <p>@username</p>
        </div>
        <div className="hover">
            <ul>
                <li><Link to="/" ><img src={userIcon} alt="" /> Subscribed</Link></li>
                <li><Link to="/Chat"><img src={chat} alt="" /> Chat</Link></li>
                <li><Link to="/News"><img src={news} alt="" /> News</Link></li>
                <li><Link to="/Sale"><img src={sale} alt="" /> Sale</Link></li>
                <li><Link to="/Setting"><img src={setting} alt="" /> Setting</Link></li>
            </ul>
        </div>
    </div>
    <div className="outlet">
    <Outlet />
    </div>
    </div>
    
    
  )
}

export default Layaut