import { CartItem } from "./CartItem";

export const CartList = ({ 
  order,
  handleCartShow = Function.prototype,
  removeFromCart = Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) => {

  const totalCost = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Shopping cart
      </li>
      {
        order.length ? order.map(item => (
          <CartItem 
            key={item.id} {...item}
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )) : <li className="collection-item">Cart is empty</li>
      }
      <li className="collection-item active" style={{ fontWeight: 'bold', fontSize: '1.3rem'}}>Total cost: {totalCost} usd</li>
      <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
    </ul>
  );
};
