import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import Button from "../../components/Button/Button";
import thousandSeparator from "../../utils/thousandsSeparator";

const PricesCard = ({ title, price, measures, questions,team }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="outlined">
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.price}>$ {thousandSeparator(price)} / mes</Typography>
      <Typography className={classes.pagos}>Un pago anual de <strong>$ {thousandSeparator(price * 12)}</strong></Typography>
      <Typography className={classes.terms}>*Aplican términos y condiciones</Typography>
      {
        team === 'Ilimitado' ?
        <Typography className={classes.team}>Colaboradores ilimitados</Typography>
        :
        <Typography className={classes.team}>{team} colaboradores</Typography>
      }

      {
        measures === 'Ilimitado' ?
        <Typography className={classes.measures}>Mediciones ilimitadas por año</Typography>
        :
        <Typography className={classes.measures}>{measures} mediciones por año</Typography>
      }
      {
        questions === 'Ilimitado' ?
        <Typography className={classes.questions}> Acompañamiento en las preguntas a realizar</Typography>
        :
        <Typography className={classes.questions}>{questions} preguntas por medición</Typography>
      }
      <Button>Adquirir plan</Button>
    </Paper>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    team: {
      ...theme.typography.body1,
      textAlign: 'center',
    },
    measures: {
      ...theme.typography.body1,
      textAlign: 'center',
    },
    questions: {
      ...theme.typography.body1,
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
    root: {
      width: "100%",
      backgroundColor: theme.palette.clearGrey.main,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      [theme.breakpoints.up('md')] : {
        padding: theme.spacing(5, 2),
      },
    },
    title: {
      ...theme.typography.h4,
      textAlign: 'center',
      color: theme.palette.midGrey.main,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')] : {
        ...theme.typography.h3,
        color: theme.palette.midGrey.main,
      },
    },
    price: {
      ...theme.typography.h3,
      textAlign: 'center',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')] : {
        ...theme.typography.h2,
        marginBottom: theme.spacing(4),
      },
    },
    pagos: {
      ...theme.typography.subtitle1,
      textAlign: 'center',
      marginBottom: theme.spacing(0.5),
    },
    terms: {
      ...theme.typography.caption,
      color: theme.palette.midGrey.main,
      textAlign:  'center',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')] : {
        marginBottom: theme.spacing(4),
      },
    }
  })
);

export default PricesCard;
