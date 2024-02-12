import cartImg from "./assets/cart-check.png"
import "./CartWidget.css"

const CartWidget = () => {
  
    return (
      <div className="CartWidget">
          <img src={cartImg} alt="" />
          <span>0</span>
      </div>
    )
  }

  export default CartWidget