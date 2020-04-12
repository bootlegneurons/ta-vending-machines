import React from 'react';
import ColumnLabels from './ColumnLabels';

export default () => (
  <ColumnLabels
    labels={[
      { label: 'Product', offset: 1, columns: 12 },
      { label: 'Price', columns: 3 },
      { label: 'Vends', columns: 3 },
      { label: 'Revenue', columns: 3 },
      { label: 'Net Gain', columns: 2 },
    ]}
  />
);
