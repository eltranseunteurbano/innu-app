import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Card } from "@material-ui/core";
import variables from '../../data/variables';
import { Radar } from 'react-chartjs-2';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import cn from 'classnames';

const SpiderChart = ({ name, onSelect, isSelected, className }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(className)
  return (
    <Card variant="outlined" className={cn(classes.root, className)}>
      <Typography className={classes.title}>Variables de cultura de innovación</Typography>
      <Typography className={classes.team}>Resultados de: <strong style={{ color: theme.palette.red.main }}>{name}</strong></Typography>
      <Radar
        data={data}
        options={{
          maintainAspectRatio: true,
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
            }
          },
          plugins: {
            legend: {
              display: false
            },
          },
          elements: {
            point: {
              backgroundColor: theme.palette.red.main,
              hoverBorderWidth: 4,
              hoverRadius: 10,
            },
            line: {
              borderWidth: 1,
              borderColor: theme.palette.red.main,
            },

          }
        }}
        />
      <ToggleButtonGroup value={isSelected} exclusive onChange={(event, value) => onSelect(event, name) }>
        <ToggleButton classes={{root: classes.btn }} value={name}>Comparar</ToggleButton>
      </ToggleButtonGroup>
    </Card>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      cursor: 'pointer',
      boxSizing: 'border-box',
      padding: theme.spacing(2),
      transition: 'all .4s',
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.white.main,
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        backgroundColor: theme.palette.clearGrey.main,
      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
      }
    },
    title: {
      ...theme.typography.subtitle1,
    },
    team: {},
    spider: {
      width: '100%',
    },
    btn: {
      margin: 'auto',
      '&.MuiToggleButton-root.Mui-selected': {
        color: theme.palette.red.main,
        backgroundColor: theme.palette.rose.main,
        border: `solid 1px ${theme.palette.red.main}`
      }
    },
  })
);
export default SpiderChart;

const data = {
  labels: variables.map((item) => item.name),
  datasets: [
    {
      label: ' Valor de la variable',
      data: variables.map((item) => item.med1),
      backgroundColor: '#FF5F2150',
    },
  ],
};