import { Routes, Route } from 'react-router-dom';

import { Typography } from '@mui/material';
import MainLayout from '../MainLayout/MainLayout';
import PageProductImport from '../pages/admin/PageProductImport/PageProductImport';
import PageCart from '../pages/PageCart/PageCart';
import PageOrder from '../pages/PageOrder/PageOrder';
import PageOrders from '../pages/PageOrders/PageOrders';
import PageProductForm from '../pages/PageProductForm/PageProductForm';
import PageProducts from '../pages/PageProducts/PageProducts';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<PageProducts />} />
        <Route path='cart' element={<PageCart />} />
        <Route path='admin/orders'>
          <Route index element={<PageOrders />} />
          <Route path=':id' element={<PageOrder />} />
        </Route>
        <Route path='admin/products' element={<PageProductImport />} />
        <Route path='admin/product-form'>
          <Route index element={<PageProductForm />} />
          <Route path=':id' element={<PageProductForm />} />
        </Route>
        <Route path='*' element={<Typography variant='h1'>Not found</Typography>} />
      </Routes>
    </MainLayout>
  );
}

export default App;
