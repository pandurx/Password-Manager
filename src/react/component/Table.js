import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


// name: "Wide Open Spaces",
// number: 1998,
// amount: "$4,600",
// due: "01/27/2998"


export default function DenseTable(props) {
  return (
    <Card>
        <CardHeader title={props.title} />
        <CardContent>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Socials </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Due</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((row) => (
            <TableRow
              key={row.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.due}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
    <CardActions>
        <Button>Learn More?</Button>
    </CardActions>
    </Card>
  );
}
