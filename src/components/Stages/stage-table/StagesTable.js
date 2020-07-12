import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PersonIcon from '@material-ui/icons/Person';

import { TablePaginationActions } from './PaginationActions';
import { columns, rowstab } from '../stage-data/StageData';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 475,
    boxShadow: "none"
  },
  container: {
    maxHeight: 475
  },
  table: {
      
  }
});

export default function StagesTable(props) {

  const { t } = useTranslation();

    let label = props.label;
    let rows = rowstab.filter(rows => rows.status === label);
    if (label === "All")
        rows = rowstab ;

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.table}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , backgroundColor: "white", fontSize:"15px" ,fontWeight:"bold", borderBottom:"none"}}
                >
                  {t(column.label)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ borderBottom:"none", paddingTop:"25px" }}>
                        {column.id === 'name' ? <span className="mr-2"><PersonIcon color="primary"/></span> : <span></span>}
                        { value }
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className="pt-5"
        colSpan={3}
        ActionsComponent={TablePaginationActions}
      />
    </div>
  );
}