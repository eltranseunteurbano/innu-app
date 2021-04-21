import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell, Box } from "@material-ui/core";
import cn from "classnames";
import variables from '../../data/variables';

const TableTeamsPosition = ({ className, isCompany }) => {
  const classes = useStyles();
  const teams = [
    'Área de diseño',
    'Área de mercadeo',
    'Área de innovación',
    'Área administrativa',
    'Producción',
    'Ventas',
    'Logística',
    'Profesores'
  ];

  return (
    <Paper className={cn(classes.root, className)}>
      <Typography className={classes.title}>Ranking de equipos</Typography>
      <Box className={classes.tableBox}>
        <Table cclassName={classes.table}>
          <TableHead>
            <TableRow className={classes.headerTable}>
              <TableCell size="small" className={classes.headerTableCell}><Typography className={classes.headerTableCellText}>Posición</Typography></TableCell>
              <TableCell size="small" className={classes.headerTableCell}><Typography className={classes.headerTableCellText}>Equipo</Typography></TableCell>
              <TableCell size="small" className={classes.headerTableCell}><Typography className={classes.headerTableCellText}>Promedio</Typography></TableCell>
              <TableCell size="small" className={classes.headerTableCell}><Typography className={classes.headerTableCellText}>Variable por mejorar</Typography></TableCell>
              <TableCell size="small" className={classes.headerTableCell}><Typography className={classes.headerTableCellText}>Variable más fuerte</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              teams.map((item, index) => {
                const random = Math.floor(Math.random() * variables.length -1);
                const randomDos = Math.floor(Math.random() * variables.length -1);
                
                return(
                  <TableRow hover>
                    <TableCell size="small" align="center">{index}</TableCell>
                    <TableCell size="small">{item}</TableCell>
                    <TableCell size="small" align="center">{(Math.random() * 5).toFixed(2)}</TableCell>
                    <TableCell size="small">{variables[random] ? variables[random].name : ''}</TableCell>
                    <TableCell size="small">{variables[randomDos] ? variables[randomDos].name : ''}</TableCell>
                  </TableRow>
                )}
              )
            }
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      padding: theme.spacing(4, 2.5),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
      },
    },
    table: {
      position: 'sticky',
    },
    tableBox: {
      overflow: 'hidden',
      overflowX: 'scroll',
    },
    headerTable: {
      backgroundColor: theme.palette.sky.main,
    },
    headerTableCellText: {
      ...theme.typography.subtitle2,
      fontWeight: 700,
    },
    title: {
      ...theme.typography.subtitle1,
      color: theme.palette.deepGrey.main,
      marginBottom: theme.spacing(2),
      position: 'sticky',
      left: '20px',
    }
  })
);

export default TableTeamsPosition;
