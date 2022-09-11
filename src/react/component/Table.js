import * as React from 'react';
import * as MuiMaterial from '@mui/material';

// sample data
const headers = [
  {text:'Header1', align:'left'},
  {text:'Header2', align:'right'},
  {text:'Header3', align:'right'},
  {text:'Header4', align:'right'},
  {text:'Header5', align:'right'}
]

export default function DenseTable(props) {
  return (
  <MuiMaterial.Card>
    <MuiMaterial.CardHeader title={props.title} />
    <MuiMaterial.CardContent>
      <MuiMaterial.TableContainer component={MuiMaterial.Paper}>
        <MuiMaterial.Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <MuiMaterial.TableHead>
            <MuiMaterial.TableRow>
              {headers.map(header => {
                return (
                  <MuiMaterial.TableCell align={header.align}>{header.text}</MuiMaterial.TableCell>
                );
              })};            
            </MuiMaterial.TableRow>
          </MuiMaterial.TableHead>
          <MuiMaterial.TableBody>
            {props.items.map((row) => (
              <MuiMaterial.TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <MuiMaterial.TableCell component="th" scope="row">
                  {row.name}
                </MuiMaterial.TableCell>
                <MuiMaterial.TableCell align="right">{row.name}</MuiMaterial.TableCell>
                <MuiMaterial.TableCell align="right">{row.number}</MuiMaterial.TableCell>
                <MuiMaterial.TableCell align="right">{row.amount}</MuiMaterial.TableCell>
                <MuiMaterial.TableCell align="right">{row.due}</MuiMaterial.TableCell>
              </MuiMaterial.TableRow>
            ))}
          </MuiMaterial.TableBody>
        </MuiMaterial.Table>
      </MuiMaterial.TableContainer>
    </MuiMaterial.CardContent>
    <MuiMaterial.CardActions>
      <MuiMaterial.Button>Save</MuiMaterial.Button>
      <MuiMaterial.Button>Cancel</MuiMaterial.Button>
    </MuiMaterial.CardActions>
  </MuiMaterial.Card>
  );
}
