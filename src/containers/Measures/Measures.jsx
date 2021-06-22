import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Button, Container } from "@material-ui/core";
import { NavBarContext } from "../../context/NavBarContext";
import { AddRounded as AddRoundedIcon } from '@material-ui/icons';
import MeasureCard from '../../components/Measure/MeasureCard';
import useCompany from "../../hooks/useCompany";
import NewMeasure from "../../components/Measure/NewMeasure";

const Measures = () => {
  const classes = useStyles();
  const { onHandleChangeTite } = React.useContext(NavBarContext);
  const [ showDialog, setShowDialog ] = React.useState(false);
  const { measures } = useCompany();

  React.useEffect(() => {
    onHandleChangeTite('Mediciones')
  }, [onHandleChangeTite]);

  const onCloseDialog = () => {
    setShowDialog(!showDialog);
  }

  return(
    <Container disableGutters className={classes.root}>
      <Button
        className={classes.newMeasureBtn}
        endIcon={<AddRoundedIcon />}
        onClick={onCloseDialog}
      >
        Programar nueva medición</Button>
        <Box className={classes.boxMeasures}>
          {
            measures.map(({ id, isFinished, ...item }) => <MeasureCard key={id} isFinished={true} {...item}/>)
          }
        </Box>
        <NewMeasure onClose={onCloseDialog} open={showDialog} />
    </Container>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 'fit-content',
      minHeight: "calc(100vh - 80px)",
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      backgroundColor: theme.palette.clearGrey.main,
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
      },
    },
    newMeasureBtn: {
      ...theme.typography.button.main,
      backgroundColor: theme.palette.white.main,
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      color: theme.palette.deepGrey.main,
      textTransform: 'inherit',
    },
    boxMeasures: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: theme.spacing(2),
      marginTop: theme.spacing(2),
    }
  })
);


export default Measures;