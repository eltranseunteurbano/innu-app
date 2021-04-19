import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import cn from "classnames";
import TextField from "../TextField/TextField";
import variables from "../../data/variables";

const CompareScores = () => {
  const classes = useStyles();

  return (
    <Paper className={cn(classes.root)}>
      <Typography className={classes.title}>Compara tus resultados</Typography>
      <Box className={classes.datesBox}>
        <TextField fullWidth label="Medición 1" />
        <TextField fullWidth label="Medición 2x" />
      </Box>
      <Box style={{ width: "100%", overflow: "overlay" }}>
        <Table>
          <TableHead style={{ position: "sticky", top: 0 }}>
            <TableRow>
              <TableCell style={{ padding: 0 }} />
              <TableCell className={classes.HeaderCell}>
                Variable de innovación
              </TableCell>
              <TableCell align="center" className={classes.HeaderCell}>
                Med 1
              </TableCell>
              <TableCell align="center" className={classes.HeaderCell}>
                Med 2
              </TableCell>
              <TableCell align="center" className={classes.HeaderCell}>
                %
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {variables.map(({ color, name, med1, med2, id }) => (
              <TableRow key={id} hover>
                <TableCell className={classes.tableColorContent}>
                  <Box
                    className={classes.tableColor}
                    style={{
                      backgroundColor: color,
                      padding: 0,
                      boxShadow: `0px 0px 5px ${color}75`,
                    }}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell align="center">{med1}</TableCell>
                <TableCell align="center">{med2}</TableCell>
                <TableCell align="center" className={classes.cellItem}>
                  {med1 + med2 / 2}
                </TableCell>
              </TableRow>
            ))}
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
      padding: theme.spacing(2, 2.5),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      transition: "all .4s",
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
      },
    },
    title: {
      ...theme.typography.subtitle1,
      color: theme.palette.deepGrey.main,
      marginBottom: theme.spacing(2),
    },
    tableColor: {
      width: theme.spacing(0.5),
      height: theme.spacing(8),
      transition: "all .4s",
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(6),
        height: theme.spacing(1),
        borderRadius: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5),
      },
    },
    HeaderCell: {
      ...theme.typography.body1,
      fontWeight: 600,
    },
    cellItem: {
      "&::after": {
        content: "'%'",
        marginLeft: theme.spacing(0.5),
      },
    },
    datesBox: {
      display: "flex",
      justifyContent: "space-between",
      columnGap: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    tableColorContent: {
      padding: 0,
    },
  })
);

export default CompareScores;
