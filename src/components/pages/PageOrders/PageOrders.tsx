import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Orders from './components/Orders';

export default function PageOrders() {
  return (
    <Box py={3}>
      <Typography variant='h6' gutterBottom>
        Manage orders
      </Typography>
      <Orders />
    </Box>
  );
}
