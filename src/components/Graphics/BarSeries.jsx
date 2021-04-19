import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Chart,
  BarSeries as Series,
  Title,
  ArgumentAxis,
  ValueAxis,
  Legend,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import {
  Stack,
  Animation,
  ArgumentScale,
  ValueScale,
  EventTracker,
} from "@devexpress/dx-react-chart";
import { scaleBand } from "@devexpress/dx-chart-core";
import cn from "classnames";

const BarSeries = (props) => {
  const classes = useStyles();
  const { data, className, title = "Titulo de la gráfica" } = props;
  const finalData = data.slice(-3).reverse();
  const fields = finalData[0].ejeY.map((itemY) => itemY.field);

  return (
    <Chart
      data={finalData}
      className={cn(classes.dataChart, classes.root, className)}
      height={300}
    >
      <ArgumentScale factory={scaleBand} />
      <ArgumentAxis />
      <ValueAxis showTicks />
      <ValueScale />

      {fields.map((item, i) => (
        <Series
          name={finalData[0].ejeY[i].name}
          valueField={item}
          argumentField="ejeX"
          color={finalData[0].ejeY[i].color}
          key={item + i}
        />
      ))}

      <Animation />
      <Legend
        position="bottom"
        rootComponent={LegendRoot}
        labelComponent={LegendLabel}
        itemComponent={LegendItem}
      />
      <Title text={title} textComponent={CustomTitle} />
      <EventTracker />
      <Tooltip />
      <Stack />
    </Chart>
  );
};

const LegendRoot = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.legendContent}>{children}</Box>;
};

const LegendItem = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.legendItem}>{children}</Box>;
};

const LegendLabel = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.label}>{text}</Typography>;
};

const CustomTitle = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.title}>{text}</Typography>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .Component-root-204": {
        strokeDasharray: 3,
      },
      "& .Component-root-66": {
        ...theme.typography.overline,
      },
      "& #top-container": {
        justifyContent: "center",
      },
    },
    dataChart: {
      width: "100%",
      boxSizing: "border-box",
      padding: 0,
    },
    title: {
      ...theme.typography.subtitle1,
      margin: theme.spacing(1, 0, 2),
      textAlign: "center",
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
      textAlign: "center",
    },
    legendItem: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: theme.spacing(1),
    },
    LabelArgument: {
      ...theme.typography.overline,
    },
  })
);

export default BarSeries;
