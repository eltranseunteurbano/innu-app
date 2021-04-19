import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";
import cn from 'classnames';

const VariablesResultsCard = ({ subtitle, className, data }) => {
  const classes = useStyles();

  return (
    <Paper className={cn(classes.root, className)}>
      <Typography className={classes.subtitle}>{subtitle}</Typography>
      <Typography className={classes.title}>Variables de cultura de innovación</Typography>
    
      <Box className={classes.box}>
        {
          data.map(({ id, name, color }) => 
          <Box key={id} className={classes.boxItem}>
            <Typography className={classes.itemName}>{name}</Typography>
            <Box className={classes.boxWrapper} style={{ backgroundColor: `${color}30`}}>
              <Box className={classes.boxContent} style={{ backgroundColor: color, width: `${ ( ( Math.random() * 100 ) + 1 ) * 100 / 100}%`}} />
            </Box>
          </Box>
          )
        }
      </Box>
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
    subtitle: {
      ...theme.typography.body2,
      color: theme.palette.midGrey.main,
      textAlign: 'center',
      [theme.breakpoints.up("sm")]: {
        textAlign: 'left'
      },
    },
    title: {
      ...theme.typography.h4,
      marginBottom: theme.spacing(2),
      textAlign: 'center',
      [theme.breakpoints.up("sm")]: {
        textAlign: 'left'
      },
    },
    box: {
      width: '100%',
    },
    boxItem: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      alignItems: 'center',
      columnGap: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        columnGap: theme.spacing(2),
      },
    },
    itemName: {
      ...theme.typography.body1,
    },
    boxWrapper: {
      width: '100%',
      height: theme.spacing(2),
      borderRadius: theme.spacing(0.5),
      overflow: 'hidden',
    },
    boxContent: {
      height: '100%',
      transition: 'all .4s',
    }
  })
);

export default VariablesResultsCard;
