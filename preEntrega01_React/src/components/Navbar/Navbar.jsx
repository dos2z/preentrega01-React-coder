import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
  
  return (
    <nav>
        <h2>Phoenix Coffee Roasters</h2>
        <div className="navbar__menu">
            <a href="">Café</a>
            <a href="">Cafeteras</a>
            <a href="">Molinos</a>
        </div>
        <CartWidget />
    </nav>
  )
}

export default Navbar