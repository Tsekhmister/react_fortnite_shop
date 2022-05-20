import { GoodsItem } from "./GoodsItem";

export function GoodsList({ goods = [], addToCart = Function.prototype }) {
  if (!goods.length) {
    return <h3>Nothing found</h3>
  }
  return (
    <div className="goods">
      {goods.map(good => (
        <GoodsItem 
          key={good.id} 
          {...good}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}