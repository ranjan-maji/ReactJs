import { Link } from "react-router-dom";


const Navigation = () => {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '4px 5px',
        borderRadius: '20px'
    }
  return (
    <>
        
        <nav style={{padding:30}} className="container mx-auto flex items-center justify-between py-4">

        
            <Link to = "/">
                <img style={{ height: 45}} src="/images/logo.png" alt="logo" />
            </Link>
            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li className="ml-6"><Link to="/products">Products</Link></li>
                <li className="ml-6"><Link to="/login">Login</Link></li>
                <li className="ml-6">
                    <Link to="/cart">
                        <div style={cartStyle}>
                            <span>10</span>
                            <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                        </div>
                    </Link>
                    
                </li>
            </ul>
        </nav>

    </>
  )
}

export default Navigation;