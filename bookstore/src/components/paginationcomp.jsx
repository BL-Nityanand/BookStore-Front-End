import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent() {
    return (
      <Stack  >
        <Pagination count={28} shape="rounded" style={{color:'#8F2B2F'  , borderRadius:100}} />
      </Stack>
    );
  }