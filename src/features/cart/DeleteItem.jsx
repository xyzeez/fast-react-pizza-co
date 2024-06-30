import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button type="small" clickHandler={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};
export default DeleteItem;
