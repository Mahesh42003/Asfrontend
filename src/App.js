import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Orders from './components/Orders'
import Products from './components/Products'
import Tracking from './components/OrderTracking'
import Admin from './components/Admin'
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
        <Route exact path='/tracking' element={<Tracking/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App