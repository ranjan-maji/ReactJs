import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import Login from './pages/login';





const App =() => {

    return (
       
        <>
            <Router>

            <Navigation/>

                           
                <Routes>

                    <Route path='/' element={<Home/>} exact/>
                    {/* <Route path='/about' component={About}></Route> */}
                    <Route path='/products' element={<Products/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/login' element= {<Login/>} />
                    
                </Routes>
              

            </Router>
        </>



    )
}


export default App;