import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currItemQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-4">
      <Button
        type="round"
        clickHandler={() => dispatch(decreaseItemQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currItemQuantity}</span>
      <Button
        type="round"
        clickHandler={() => dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
};
export default UpdateItemQuantity;
