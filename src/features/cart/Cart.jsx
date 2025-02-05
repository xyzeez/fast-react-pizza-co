import { useDispatch, useSelector } from 'react-redux';
import Button, { LinkButton } from '../../components/Button';
import CartItem from './CartItem';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { username } = useSelector((store) => store.user);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" clickHandler={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
