import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Button, Container } from "@material-ui/core";
import { NavBarContext } from "../../context/NavBarContext";
import { AddRounded as AddRoundedIcon } from '@material-ui/icons';
import MeasureCard from '../../components/Measure/MeasureCard';

const Measures = () => {
  const classes = useStyles();
  const { onHandleChangeTite } = React.useContext(NavBarContext);

  React.useEffect(() => {
    onHandleChangeTite('Mediciones')
  }, [onHandleChangeTite]);

  return(
    <Container disableGutters className={classes.root}>
      <Button
        className={classes.newMeasureBtn}
        endIcon={<AddRoundedIcon />}
      >
        Programar nueva medición</Button>
        <Box className={classes.boxMeasures}>
          {
            [0,0,0,0,0].map((item) => <MeasureCard />)
          }
        </Box>
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