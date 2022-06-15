import React from 'react';
import { AdvTable } from 'dan-components';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {
    id: counter,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

function AdvTableDemo() {
  const order = 'asc';
  const orderBy = 'calories';
  const selected = [];
  const columnData = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)'
    }, {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories'
    }, {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)'
    }, {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)'
    }, {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)'
    },
  ];
  const data = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));
  const page = 0;
  const rowsPerPage = 5;
  const defaultPerPage = 5;
  const filterText = '';

  return (
    <AdvTable
      order={order}
      orderBy={orderBy}
      selected={selected}
      data={data}
      page={page}
      rowsPerPage={rowsPerPage}
      defaultPerPage={defaultPerPage}
      filterText={filterText}
      columnData={columnData}
    />
  );
}

export default AdvTableDemo;
