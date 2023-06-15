import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layaut from './Layaut'
import Subscribed from "./Subscribed"
import "./page.css"
import News from './News'
import Sale from './Sale'
import Setting from './Setting'
import Brand from './Brand'
import Nopage from './Nopage'

const Page = () => {
  return (
    <div className="page">
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layaut />}>
                <Route index element={<Subscribed />} />
                <Route path='/News' element={<News />} />
                <Route path='/Sale' element={<Sale />} />
                <Route path='/Setting' element={<Setting />} />
                <Route path='*' element={<Nopage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    <Brand />
    </div>
  )
}

export default Page