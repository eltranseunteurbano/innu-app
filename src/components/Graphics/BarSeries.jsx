import React from "react";
import { Box, ButtonBase, Typography } from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import cn from "classnames";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarSeries = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { data, className, title = "Titulo de la gráfica", callback, callbackTitle = 'Ver más' } = props;
  const finalData = data.slice(-3).reverse();

  return (
    <Box className={classes.root}>
      <Box className={callback ? classes.header : classes.emptyheader}>
        <Box className={classes.emptyBox} style={{color: 'transparent'}}>{callbackTitle}</Box>
        <Typography className={classes.title}>{title}</Typography>
        {callback && <ButtonBase onClick={callback} className={classes.titleBtn}>{callbackTitle}</ButtonBase>}
        {!callback && <Box className={classes.emptyBox} />}
      </Box>
    <ResponsiveContainer width="100%" className={cn(classes.chart, className)}>
      <BarChart
        data={finalData}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis allowDecimals type="number" domain={[0, 5]}/>
          <Tooltip filterNull
            itemStyle={{ ...theme.typography.body2, padding: 0, textTransform: 'capitalize'}}
            contentStyle={{ borderRadius: '8px' }}
            labelStyle={{ ...theme.typography.body2, fontWeight: 600 }}
            />
          <Legend content={<CustomLegend />} verticalAlign="bottom" />
          {
            Object.keys(finalData[0]).map((item, index) => {
              if(item === 'name' || item === 'colors') return undefined
              return(
                <Bar key={item + index} dataKey={item} fill={Object.values(finalData[0].colors)[index - 1]} />
              )
            })
          }
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

const CustomLegend = (props) => {
  const { payload } = props;
  const classes = useStyles();

  return(
    <Box className={classes.legendContent}>
      {
        payload.map((entry) => {
          let legendName = legenCustomLabel(entry.value);
          return (
          <Box className={classes.legendItem}>
            <Box style={{ backgroundColor: entry.color, width: '8px', height: '8px', borderRadius: '8px'}}/>
            <Typography className={classes.label}>{legendName}</Typography>
          </Box>
        )})
      }
    </Box>
  )

}

const legenCustomLabel = (value) => {
  switch(value){
    case 'own':
      return 'Tus resultados';
    
    case 'team':
      return 'Resultados de tu equipo';

    case 'company':
      return 'Resultados de tu empresa';

    default:
      return ''
  }
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    chart: {
      width: '100%',
      height: '300px !important',
      marginLeft: theme.spacing(-2.5),
      '& tspan': {
        ...theme.typography.body2,
      }
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]:{
        marginBottom: theme.spacing(4),
      }
    },
    emptyheader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]:{
        marginBottom: theme.spacing(4),
      }
    },
    emptyBox:{
      display: 'block',
    },
    title: {
      ...theme.typography.subtitle1,
    },
    titleBtn: {
      ...theme.typography.body2,
      color: theme.palette.blue.main,
    },
    dataChart: {
      width: "100%",
      boxSizing: "border-box",
      padding: 0,
    },
    legendContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      rowGap: theme.spacing(0.5),
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
    Tooltip: {
      background: 'red',
    }
  })
);

export default BarSeries;
