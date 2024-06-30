import { useFetcher } from 'react-router-dom';
import Button from '../../components/Button';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
};

export const action = async ({ params }) => {
  const update = { priority: true };
  await updateOrder(params.orderId, update);
  return null;
};

export default UpdateOrder;
