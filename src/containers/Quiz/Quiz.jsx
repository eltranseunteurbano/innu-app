import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, Container, Typography, Box, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox, Paper } from "@material-ui/core";
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { ToggleButtonGroup, ToggleButton  } from '@material-ui/lab';
import { NavBarContext } from "../../context/NavBarContext";
import firebase from '../../firebase/firebase';

const Quiz = () => {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState(null);
  const [valuesAnswer, setValuesAnswer] = React.useState([]);
  const [variablesState, setVariablesState ] = React.useState({});
  const [ questions, setQuestions ] = React.useState([]);
  const [contador, setContador] = React.useState(0);

  const { onHandleChangeTite } = React.useContext(NavBarContext);

  React.useEffect(() => {
    onHandleChangeTite('Cuestionario');
  }, [onHandleChangeTite]);

  const handleChange = (value, id) => {
    setVariablesState(prev => ({...prev, [id]: value}))
  };
  
  const onHandleChangeAnswer = (event, value) => {
    setAnswer(value);
  }

  const getData = async() => {
    await firebase.firestore().collection('variables')
    .onSnapshot((quertSnapshot) => {
      // localMeasures.push(doc.data());
      let variables = [];
      let questions = [];
      quertSnapshot.forEach((doc) => {
        variables.push(doc.data());
      })

      variables.forEach(subVariable => {
        subVariable.subvariables.forEach(ques => {
          ques.questions.forEach(question => questions.push(question))
        })
      })

      setQuestions(questions);
    });    
  }

  const next = () => {
    let temp = valuesAnswer;
    temp.push(answer);
    setValuesAnswer(temp);

    if(contador < 20) {
      setContador(prev => prev + 1);
      setAnswer(null);
    }
  }

  const back = () => {
    if(contador > 0){
      setContador(prev => prev - 1);
      setAnswer(valuesAnswer[contador])
    }
  }

  React.useEffect(() => {
    getData();
  }, [])

  // React.useEffect(() => {
  //   firebase.firestore().collection('companies').doc('Eixw2cYg85wdIusxzjLq').collection('measures').doc('0VgLGubRPCLTEuWQfPbH').get()
  //   .then((doc) => {
      
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, " => ", doc.data());
  //           firebase.firestore().collection('companies').doc('Eixw2cYg85wdIusxzjLq').collection('measures').doc('AVDFnd92CrueYz5wk3bv').update(doc.data())
  //   })
  // }, [])

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
      <FormControl className={cn(classes.card, classes.navigation, "px-0")}  style={{overflow: 'auto'}} component={Paper}>
        <FormGroup  style={{width: '100%'}}>
          <FormLabel className={cn(classes.progressBarTitle, classes.customTitle)}>Cuestionario</FormLabel>
          {
            questions.slice(0, 20).map((item, pos) => 
              (<FormControlLabel label={item.question} key={item.id} className={classes.navigationItem}
                control={<Checkbox checked={pos < contador ? true: false}
                onChange={(event) =>handleChange(event.target.checked, item)} 
                onClick={() => setContador(pos)}
                color="default" classes={{ checked: classes.checkbox}}
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
            <Box className={classes.progressBarContent} style={{width: `${contador * 100 / 20}%`}} />
          </Box>
        </Box>
        <Box className={classes.questionBox} >
          <Typography className={classes.escala}>En una escala del 1 al 5, <br /><strong>siendo 1 el más bajo y el 5 el más alto</strong></Typography>
          <Typography className={classes.question}>{questions[contador]?.question}</Typography>
          <ToggleButtonGroup exclusive value={answer} onChange={onHandleChangeAnswer} >
            {
              [1,2,3,4,5].map((item) => 
                <ToggleButton
                  key={item + 'togglebutton'}
                  value={item}
                  classes={{ root: classes.toggleButton, selected: classes.toggleButtonSelected }}
                >{item}</ToggleButton>
              )
            }
          </ToggleButtonGroup>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Button className="mb-1" onClick={next} disabled={!answer}>Continuar</Button>
          <Button variant="text" onClick={back} disabled={contador === 0}>VOLVER A LA PREGUNTA ANTERIOR</Button>
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
      maxHeight: 40,
      overflow: 'hidden',
      display: 'block',
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
      maxHeight: '85vh',
      paddingBottom: 0,
      [theme.breakpoints.up("md")]: {
        display: 'block',
      },
    }
  })
);

export default Quiz;
