import * as React from 'react';
import * as MuiMaterial from '@mui/material';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function DenseTable(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  let items = props.items.data;
  let headers = props.items.headers; 
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = items.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;


  return (
  <MuiMaterial.Card>
    <MuiMaterial.CardHeader title={props.title} />
    <MuiMaterial.CardContent>
      <MuiMaterial.TableContainer component={MuiMaterial.Paper}>
        <MuiMaterial.Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <MuiMaterial.TableHead>
            <MuiMaterial.TableRow>
              { headers.map(header => {
                return (
                  <MuiMaterial.TableCell key={header.field} align={header.align}>{header.headerName}</MuiMaterial.TableCell>
                );
              })
              }            
            </MuiMaterial.TableRow>
          </MuiMaterial.TableHead>
          <MuiMaterial.TableBody>
            { stableSort(items, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => {
                return(
                  <MuiMaterial.TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    { headers.map(header => {return <MuiMaterial.TableCell onClick={event => props.handleAccountSelect(item.Id)} key={header.field} align="right">{item[header.field]}</MuiMaterial.TableCell>}) }
                  </MuiMaterial.TableRow>
                );
              })
            }

          </MuiMaterial.TableBody>
        </MuiMaterial.Table>
      </MuiMaterial.TableContainer>

      <MuiMaterial.TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="div"
          count={items.length}
          rowsPerPage={2}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

    </MuiMaterial.CardContent>
    <MuiMaterial.CardActions>
      <MuiMaterial.Button>Save</MuiMaterial.Button>
      <MuiMaterial.Button>Cancel</MuiMaterial.Button>
    </MuiMaterial.CardActions>
  </MuiMaterial.Card>
  );
}
