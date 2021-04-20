import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, Container, Typography, Box, Stepper, Step, StepLabel, StepConnector, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox, Paper } from "@material-ui/core";
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { ToggleButtonGroup, ToggleButton  } from '@material-ui/lab';

const Quiz = () => {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState(null);
  const questions = [1,2,3,4,6,7,8,9,10,11,12,13,14,15]
  const [variablesState, setVariablesState ] = React.useState({});

  const handleChange = (value, id) => {
    setVariablesState(prev => ({...prev, [id]: value}))
  };
  
  const onHandleChangeAnswer = (event, value) => {
    setAnswer(value)
  }

  React.useEffect(() => {
    const keyPress = (event) => {
      if(event.key === '1') setAnswer(1);
      if(event.key === '2') setAnswer(2);
      if(event.key === '3') setAnswer(3);
      if(event.key === '4') setAnswer(4);
      if(event.key === '5') setAnswer(5);
    }
    window.addEventListener("keydown", keyPress)

  }, [answer])

  return (
    <Container disableGutters className={classes.root}>
      <Card className={classes.card}>
        <Box style={{width: '100%'}}>
          <Typography className={classes.nameVariable}>Nombre de la variable</Typography>
          <Typography className={classes.progressBarTitle}>Progreso General</Typography>
          <Stepper activeStep={3} connector={<CustomConnector />} className={classes.progressBar}>
            {
              questions.map((item) => 
                <Step key={item + 'answer'} classes={{ root: classes.stepClear}}>
                  <StepLabel StepIconComponent={CustomIcon} classes={{ iconContainer: classes.stepClear }} />
                </Step>
              )
            }
          </Stepper>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography className={classes.escala}>En una escala del 1 al 5</Typography>
          <Typography className={classes.question}>¿Cómo te sientes el día de hoy?</Typography>
          <ToggleButtonGroup exclusive value={answer} onChange={onHandleChangeAnswer} >
            {
              [1,2,3,4,5].map((item) => 
                <ToggleButton key={item + 'togglebutton'} value={item} classes={{ root: classes.toggleButton, selected: classes.toggleButtonSelected }}>{item}</ToggleButton>
              )
            }
          </ToggleButtonGroup>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Button className="mb-1">Continuar</Button>
          <Button variant="text">VOLVER A LA PREGUNTA ANTERIOR</Button>
        </Box>
      </Card>
    
      <FormControl className={cn(classes.card, classes.navigation, "px-0")}  style={{overflow: 'hidden'}} component={Paper}>
        <FormGroup  style={{width: '100%'}}>
          <FormLabel className={cn(classes.progressBarTitle, classes.customTitle)}>Cuestionario</FormLabel>
          {
            questions.map((item) => 
              (<FormControlLabel label={`Pregunta ${item}`} key={"Pregunta " + item} className={classes.navigationItem}
                control={<Checkbox checked={variablesState[item] ? variablesState[item] : false}
                onChange={(event) =>handleChange(event.target.checked, item)} color="default" classes={{ checked: classes.checkbox}}
                />}
              />)
            )
          }
        </ FormGroup>
      </FormControl>
    </Container>
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
    root: {
      width: "100%",
      height: 'fit-content',
      minHeight: "calc(100vh - 80px)",
      display: 'grid',
      gridTemplateColumns: '4fr minmax(auto, 1fr)',
      columnGap: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
    },
    card: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
    },
    nameVariable: {
      ...theme.typography.caption,
      color: theme.palette.mistGrey.main,
      marginBottom: theme.spacing(1),
    },
    progressBar: {
      padding: theme.spacing(3, 0),
    },
    progressBarTitle: {
      ...theme.typography.body2,
      color: `${theme.palette.red.main} !important`,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
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
    escala: {
      ...theme.typography.subtitle1,
      color: theme.palette.midGrey.main,
      textAlign: 'center',
      marginBottom: theme.spacing(1),
    },
    question: {
      ...theme.typography.h4,
      color: theme.palette.black.main,
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
    toggleButton: {
      padding: theme.spacing(3, 6),
      ...theme.typography.body1,
      backgroundColor: theme.palette.white.main,
      border: `solid 1px ${theme.palette.red.main}`,
      borderLeft: `solid 1px ${theme.palette.red.main} !important`,
      color: theme.palette.red.main,
      fontWeight: 700,
      fontSize: '1.5rem', 
    },
    toggleButtonSelected: {
      backgroundColor: `${theme.palette.rose.main} !important`,
      color:  `${theme.palette.red.main} !important`,
    },
    navigationItem: {
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
      backgroundColor: `${theme.palette.midGrey.main}20`,
      width: '100%',
      '&:nth-child(odd)': {
        backgroundColor: theme.palette.white.main,
      }
    },
    checkbox: {
      color: theme.palette.blue.main,
    },
    customTitle: {
      padding: theme.spacing(0, 3),
      boxSizing: 'border-box',
      marginBottom: theme.spacing(2),
    },
    navigation: {
      display: 'none',
      [theme.breakpoints.up("md")]: {
        display: 'block',
      },
    }
  })
);

export default Quiz;
