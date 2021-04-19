import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LastMeasures from "../../components/Dashboard/LastMeasures";
import { mediciones, medicionesVariables } from "../../data/lastMeasures";
import VariablesSelector from "../../components/Dashboard/VariablesSelector";
import VariablesResultsCard from "../../components/Dashboard/VariablesResultsCard";

const DashboardDetails = () => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.root}>
      <LastMeasures data={mediciones} className={classes.charts}/>
      <VariablesSelector data={medicionesVariables} className={classes.selector} />
      <VariablesResultsCard subtitle="Mis resultados" data={medicionesVariables} className={classes.firstResults} />
      <VariablesResultsCard subtitle="Resultados del equipo" data={medicionesVariables} className={classes.secondResults} />
    </Container>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "calc(100vh - 80px)",
      padding: theme.spacing(2),
      boxSizing: "border-box",
      backgroundColor: theme.palette.clearGrey.main,
      display: "grid",
      gridGap: theme.spacing(3),
      gridTemplate: 'auto / auto',
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
      [theme.breakpoints.up("md")]: {
        gridTemplate: 'repeat(2, auto)/repeat(8, 1fr)',
      },
    },
    charts: {
      height: 'fit-content',
      [theme.breakpoints.up("md")]: {
        gridColumnStart: 1,
        gridColumnEnd: 7,
        gridRowStart: 1,
        gridRowEnd: 2,
      },
    },
    selector: {
      display: 'none',
      [theme.breakpoints.up("md")]: {
        gridRowStart: 1,
        gridRowEnd: 3,
        gridColumnStart: 7,
        gridColumnEnd: 9,
        display: 'block',
      },
    },
    firstResults: {
      [theme.breakpoints.up("md")]: {
        gridRowStart: 2,
        gridRowEnd: 3,
        gridColumnStart: 1,
        gridColumnEnd: 4,
      },
    },
    secondResults: {
      [theme.breakpoints.up("md")]: {
        gridRowStart: 2,
        gridRowEnd: 3,
        gridColumnStart: 4,
        gridColumnEnd: 7,
      },
    }
  })
);

export default DashboardDetails;
