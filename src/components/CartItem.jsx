export const CartItem = ({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  incQuantity,
  decQuantity,
}) => {
  return (
    <li href="#!" className="collection-item">
      {/* <button
        className="waves-effect waves-light btn add-quantity"
        onClick={() => incQuantity(id)}
      >
        +
      </button>
      <button 
        className="waves-effect waves-light btn add-quantity"
        onClick={() => decQuantity(id)}
      >
        -
      </button> */}
      {name} {price} x{" "}
      <i className="material-icons cartIcon-quantity" onClick={() => decQuantity(id)}>
        remove
      </i>{" "}
      {quantity}{" "}
      <i className="material-icons cartIcon-quantity" onClick={() => incQuantity(id)}>
        add
      </i>{" "}
      = {price * quantity} usd
      <span class="secondary-content" onClick={() => removeFromCart(id)}>
        <i class="material-icons cartItem-close">close</i>
      </span>
    </li>
  );
};
