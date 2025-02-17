import { PropTypes } from "prop-types";
import { formatCurrency } from "../../utils/helpers";

//eslint-disable-next-line
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">{
        isLoadingIngredients ? 'Loading ingredients...' : ingredients?.join(', ')
      }</p>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array,
};

export default OrderItem;
