import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Stepper as StepperComponent, Step, StepLabel, StepConnector } from "@material-ui/core";
import cn from 'classnames';

const Stepper = ({ questions}) => {
  const classes = useStyles();

  return (
    <StepperComponent activeStep={3} connector={<CustomConnector />} className={classes.progressBar}>
      {
        questions.map((item) => 
          <Step key={item + 'answer'} classes={{ root: classes.stepClear}}>
            <StepLabel StepIconComponent={CustomIcon} classes={{ iconContainer: classes.stepClear }} />
          </Step>
        )
      }
    </StepperComponent>
  );
};

const CustomIcon = ({ active, completed }) => {
  const classes = useStyles();

  return (
    <Box
      className={cn(classes.step, active && classes.activeStep, completed && classes.completedStep)} />
  )
}

const CustomConnector = ({ active, completed }) => {
  const classes = useStyles();

  return (
    <StepConnector className={cn( classes.connector, completed && classes.completedConnector, active && classes.completedConnector )}/>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    stepClear:{
      margin: 0,
      padding: 0,
    },
    step: {
      border: `solid 1px ${theme.palette.midGrey.main}`,
      backgroundColor: `${theme.palette.midGrey.main}40`,
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      borderRadius: theme.spacing(1.5),
    },
    activeStep: {
      border: `solid 1px ${theme.palette.red.main}`,
      backgroundColor: `${theme.palette.red.main}40`,
      boxShadow: `0px 0px 5px 0px ${theme.palette.red.main}`,
    },
    completedStep: {
      backgroundColor: theme.palette.red.main,
      border: 'transparent',
    },
    connector: {
      borderColor: theme.palette.midGrey.main,
    },
    completedConnector: {
      '& .MuiStepConnector-line': {
        borderColor: theme.palette.red.main,
      }
    }, 
  })
);

export default Stepper;
