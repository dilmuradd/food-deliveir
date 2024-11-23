import './Cart.css'
type CartProps = {
    children: React.ReactNode
}
const Cart = ({children}:CartProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Cart
