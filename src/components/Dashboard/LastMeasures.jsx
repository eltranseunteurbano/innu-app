import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Barras from "../Graphics/BarSeries";
import cn from 'classnames';

const LastMeasures = ({ data, className, callback, callbackTitle }) => {
  const classes = useStyles();
  return (
    <Paper className={cn(classes.root, className)}>
      <Barras title="Gráfico de cultura de innovación" data={data} callbackTitle={callbackTitle} callback={callback} />
    </Paper>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      padding: theme.spacing(2),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
    },
    dataChart: {
      width: "100%",
      boxSizing: "border-box",
      padding: 0,
    },
    legendContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
      margin: theme.spacing(2, 0),
      rowGap: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: theme.spacing(3),
      },
    },
    label: {
      ...theme.typography.caption,
    },
    legendItem: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: theme.spacing(1),
    },
  })
);

export default LastMeasures;
