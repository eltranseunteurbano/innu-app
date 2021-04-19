import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, Typography, FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel } from "@material-ui/core";
import cn from 'classnames';

const VariablesSelector = ({ data, className }) => {
  const classes = useStyles();
  const [variablesState, setVariablesState ] = React.useState({});

  const handleChange = (value, id) => {
    setVariablesState(prev => ({...prev, [id]: value}))
  };

  return (
    <Paper className={cn(classes.root, className)}>
      <Typography className={classes.variablesTitle}>Variables de medición</Typography>
      <FormControl>
        <FormGroup >
          <FormLabel className={classes.variablesSubtitle}>Selecciona las variables</FormLabel>
          {
            data.map(({ id, name }) => 
              (<FormControlLabel label={name} key={name} className="mr-0"
                control={<Checkbox checked={variablesState[id] ? variablesState[id] : false}
                onChange={(event) =>handleChange(event.target.checked, id)} name={name} color="default" classes={{ checked: classes.checkbox}}
                />}
              />)
            )
          }
        </FormGroup >
      </FormControl>
    </Paper>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      padding: theme.spacing(2),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
    },
    variablesTitle: {
      ...theme.typography.h4,
    },
    variablesSubtitle: {
      ...theme.typography.body2,
      color: theme.palette.midGrey.main,
      marginBottom: theme.spacing(2),
    },
    charts: {
      height: 'fit-content'
    },
    checkbox: {
      color: theme.palette.blue.main,
    }
  })
);

export default VariablesSelector;
