import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import API_PATHS from '../../../../constants/apiPaths';
import CSVFileImport from './components/CSVFileImport';
import ProductsTable from './components/ProductsTable';

export default function PageProductImport() {
  return (
    <Box py={3}>
      <Box mb={2} display='flex' justifyContent='space-between'>
        <CSVFileImport url={`${API_PATHS.import}/import`} title='Import Products CSV' />
        <Button
          size='small'
          color='primary'
          variant='contained'
          sx={{ alignSelf: 'end' }}
          component={Link}
          to={'/admin/product-form'}
        >
          Create product
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}
