import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, Container, Typography, Box, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox, Paper } from "@material-ui/core";
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { ToggleButtonGroup, ToggleButton  } from '@material-ui/lab';
import { NavBarContext } from "../../context/NavBarContext";

const Quiz = () => {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState(null);
  const questions = [1,2,3,4,6,7,8,9,10,11,12,13,14,15]
  const [variablesState, setVariablesState ] = React.useState({});

  const { onHandleChangeTite } = React.useContext(NavBarContext);

  React.useEffect(() => {
    onHandleChangeTite('Cuestionario')
  }, [onHandleChangeTite]);

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
      <Card className={classes.card}>
        <Box style={{width: '100%'}}>
          <Typography className={classes.nameVariable}>Nombre de la variable</Typography>
          <Typography className={classes.progressBarTitle}>Progreso General</Typography>
          <Box className={classes.progressBar} >
            <Box className={classes.progressBarContent} style={{width: '40%'}} />
          </Box>
        </Box>
        <Box className={classes.questionBox} >
          <Typography className={classes.escala}>En una escala del 1 al 5, <br /><strong>siendo 1 el más bajo y el 5 el más alto</strong></Typography>
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
    </Container>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 'fit-content',
      minHeight: "calc(100vh - 80px)",
      display: 'grid',
      gridTemplateColumns: '1fr',
      columnGap: theme.spacing(2),
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
        gridTemplateColumns: 'minmax(auto, 1fr) 4fr',
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
    questionBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    nameVariable: {
      ...theme.typography.caption,
      color: theme.palette.mistGrey.main,
      marginBottom: theme.spacing(1),
    },
    progressBar: {
      width: '100%',
      borderRadius: theme.spacing(1),
      height: theme.spacing(1),
      backgroundColor: theme.palette.rose.main,
      overflow: 'hidden',
    },
    progressBarContent: {
      backgroundColor: theme.palette.red.main,
      height: '100%',
    },
    progressBarTitle: {
      ...theme.typography.body2,
      color: `${theme.palette.red.main} !important`,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    escala: {
      ...theme.typography.subtitle2,
      color: theme.palette.midGrey.main,
      textAlign: 'center',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        ...theme.typography.subtitle1,
      },
      '& strong': {
        fontWeight: 400,
      }
    },
    question: {
      ...theme.typography.body1,
      fontWeight: 700,
      color: theme.palette.black.main,
      textAlign: 'center',
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        ...theme.typography.h4,
      },
    },
    toggleButton: {
      padding: theme.spacing(1, 3),
      ...theme.typography.body1,
      backgroundColor: theme.palette.white.main,
      border: `solid 1px ${theme.palette.red.main}`,
      borderLeft: `solid 1px ${theme.palette.red.main} !important`,
      color: theme.palette.red.main,
      fontWeight: 700,
      fontSize: '1rem', 
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3, 6),
        fontSize: '1.5rem', 
      },
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
      height: 'fit-content',
      paddingBottom: 0,
      [theme.breakpoints.up("md")]: {
        display: 'block',
      },
    }
  })
);

export default Quiz;
