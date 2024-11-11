import Typography from '@mui/material/Typography';
import { CartItem } from '../../../../models/CartItem';
import CartItems from '../../../CartItems/CartItems';

type ReviewCartProps = {
  items: CartItem[];
};

export default function ReviewCart({ items }: ReviewCartProps) {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <CartItems items={items} isEditable />
    </>
  );
}
