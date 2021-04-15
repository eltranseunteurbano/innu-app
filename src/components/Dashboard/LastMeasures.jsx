import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Barras from "../Graphics/BarSeries";

const LastMeasures = () => {
  const classes = useStyles();

  const data = [
    {
      date: "20/03/2020",
      results: 3,
      team: 4,
      company: 5,
    },
    {
      date: "20/04/2020",
      results: 3,
      team: 4,
      company: 5,
    },
    {
      date: "20/05/2020",
      results: 3,
      team: 4,
      company: 5,
    },
    {
      date: "20/06/2020",
      results: 3,
      team: 4,
      company: 5,
    },
    {
      date: "20/07/2020",
      results: 3,
      team: 4,
      company: 5,
    },
    {
      date: "20/08/2020",
      results: 3,
      team: 4,
      company: 5,
    },
  ];

  return (
    <Paper className={classes.root}>
      <Barras title="Gráfico de cultura de innovación" data={data} />
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
