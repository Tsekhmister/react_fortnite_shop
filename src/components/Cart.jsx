export const Cart = ({ quantity, handleCartShow = Function.prototype }) => {

  return (
    <div className="cart blue accent-4 white-text" onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
    
  );
}