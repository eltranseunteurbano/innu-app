import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, Divider, Typography, Box } from "@material-ui/core";
import Button from '../Button/Button';
import cn from 'classnames';
import { getFormatDate, getTimerDate } from "../../utils/getFormatDate";
import moment from 'moment';

const MeasureCard = (props) => {
  const { createdAt, startDate, endDate, isFinished, name } = props;
  const classes = useStyles();
  const [differenceTime, setDifferenceTime] = React.useState(moment());

  React.useEffect(() => {
    const now = moment();
    const finish = moment(endDate.toDate());

    let timer;
    timer =setTimeout( () => setDifferenceTime(moment(finish.diff(now))), 1000);

    return () => {
      if(timer) clearTimeout(timer)
    }
    
  }, [endDate, differenceTime])

  return(
    <Card className={cn(classes.root)}>
      <Typography className={classes.date}>{getFormatDate(createdAt.toDate())}</Typography>
      <Typography className={classes.name}>{name}</Typography>
      <Divider className="my-2" />
      <Box className={classes.content}>
        <Box>
          <Typography className={classes.titleText}>Tiempo restante</Typography>
          <Typography className={classes.contentText}>{isFinished ? 'Terminada' : getTimerDate(differenceTime)}</Typography>
        </Box>

        <Box>
          <Typography className={classes.titleText}>Fecha de inicio</Typography>
          <Typography className={classes.contentText}>{getFormatDate(startDate.toDate())}</Typography>
        </Box>

        <Box>
          <Typography className={classes.titleText}>Fecha de finalización</Typography>
          <Typography className={classes.contentText}>{getFormatDate(endDate.toDate())}</Typography>
        </Box>

        <Box>
          <Typography className={classes.titleText}>Cuestionarios resueltos</Typography>
          <Typography className={classes.contentText}>150/200 cola...</Typography>
        </Box>
      </Box>
      <Box className={classes.btnWrapper}>
        {isFinished && <Button color="primary" variant="contained">GENERAR REPORTE</Button>}
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
      textTransform: 'capitalize',
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