import { Link, useNavigate } from "react-router-dom";


const Navigation = () => {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '4px 5px',
        borderRadius: '20px'
    }


    const navigation = useNavigate()
  return (
    <>
        
        <nav style={{padding:30}} className="container mx-auto flex items-center justify-between py-4">

        
            <Link to = "/">
                <img style={{ height: 45}} src="/images/logo.png" alt="logo" />
            </Link>
            <div style={{padding:20}} className="flex items-center">
                <div style={{ cursor :"pointer", marginRight:20 }} onClick = {()=>{navigation('/')}}>Home</div>

                <div style={ { cursor :"pointer", marginRight:20 }} onClick = {()=>{navigation('products')}}>Products</div>
                
                <div style={ { cursor :"pointer", marginRight:20 }} onClick = {()=>{navigation('login')}}>Login</div>
                
                <div style={ { cursor :"pointer", marginRight:20 }} onClick = {()=>{navigation('cart')}}><div style={cartStyle}>
                            <span>10</span>
                            <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                        </div>
                        </div>
                
            </div>
        </nav>

    </>
  )
}

export default Navigation;