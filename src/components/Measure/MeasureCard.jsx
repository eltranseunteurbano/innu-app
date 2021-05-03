import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, Divider, Typography, Box } from "@material-ui/core";
import { AddRounded as AddRoundedIcon } from '@material-ui/icons';
import Button from '../Button/Button';
import cn from 'classnames';

const MeasureCard = () => {
  const classes = useStyles();

  return(
    <Card className={cn(classes.root)}>
      <Typography className={classes.date}>04 Marzo del 2021</Typography>
      <Typography className={classes.name}>Medición de Marzo</Typography>
      <Divider className="my-2" />
      <Box className={classes.content}>
        <Box>
          <Typography className={classes.titleText}>Tiempo restante</Typography>
          <Typography className={classes.contentText}>10d:20h:40m:30s</Typography>
        </Box>

        <Box>
          <Typography className={classes.titleText}>Fecha de inicio</Typography>
          <Typography className={classes.contentText}>1 Mayo 2021</Typography>
        </Box>

        <Box>
          <Typography className={classes.titleText}>Fecha de finalización</Typography>
          <Typography className={classes.contentText}>15 Mayo 2021</Typography>
        </Box>

        <Box>
          <Typography className={classes.titleText}>Cuestionarios resueltos</Typography>
          <Typography className={classes.contentText}>150/200 cola...</Typography>
        </Box>
      </Box>
      <Box className={classes.btnWrapper}>
        <Button color="primary" variant="contained">GENERAR REPORTE</Button>
        <Button color="secondary" variant="text">VER DETALLES</Button>
      </Box>
    </Card>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      backgroundColor: theme.palette.white.main,
      boxShadow: '0px 2px 30px rgba(13, 52, 81, 0.05)',
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
      },
    },
    isCancel: {
      border: `solid 2px ${theme.palette.red.main}`,
      backgroundColor: theme.palette.rose.main,
    },
    isActive: {
      border: `solid 2px ${theme.palette.esmerald.tag}`,
      backgroundColor: theme.palette.esmerald.main,
    },
    newMeasureBtn: {
      ...theme.typography.button.main,
      backgroundColor: theme.palette.white.main,
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      color: theme.palette.deepGrey.main,
      textTransform: 'inherit',
    },
    content: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat( auto-fill, minmax(250px, 1fr))',
      marginBottom: theme.spacing(4),
      gap: theme.spacing(2),
    },
    date: {
      ...theme.typography.body2,
      fontSize: '0.7rem',
    },
    name: {
      ...theme.typography.subtitle1,
    },
    titleText: {
      ...theme.typography.subtitle2,
      color: theme.palette.mistGrey,
    },
    contentText: {
      ...theme.typography.h3,
      color: '#28235D',
    },
    btnWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }
    }
  })
);


export default MeasureCard;