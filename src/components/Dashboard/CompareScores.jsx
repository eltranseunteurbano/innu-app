import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import cn from "classnames";
import TextField from "../TextField/TextField";
import variables from "../../data/variables";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CompareScores = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const [measures, setMeasure] = React.useState([]);
  const [compareScore, setCompareScore] = React.useState([]);
  const [variables, setVariables] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/results/Eixw2cYg85wdIusxzjLq`)
    .then(( { data: { measures } } ) => {      
      setMeasure(measures);
    });
  }, [])

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/variables`)
    .then(( { data } ) => {      
      setVariables(data);
    });
  }, []);

  React.useEffect(() => {
    const tableMeasure = [];

    variables.forEach(({ color, id, name}) => {
      let measureItem = {};

      measureItem.id = id;
      measureItem.color = color;
      measureItem.name = name;

      measureItem.measureOne = measures[measures.length - 1]?.rawData.members.find(item => item.user === user?.uid).subvariables?.find(item => item.id === id)?.average;
      // measureItem.measureTwo = measures[measures.length - 2].rawData.find(item => item.user === user.uid).subvariables.find(item => item.id === id).average;
      if(!!measureItem.measureOne){
        tableMeasure.push(measureItem);
      }
    });

    setCompareScore(tableMeasure);

    console.log(tableMeasure);
  }, [measures, user, variables])


  return (
    <Paper className={cn(classes.root)}>
      <Typography className={classes.title}>Compara tus resultados</Typography>
      <Box className={classes.datesBox}>
        <TextField fullWidth label="Medición 1" placeholder=""/>
        <TextField fullWidth label="Medición 2x" placeholder=""/>
      </Box>
      <Box style={{ width: "100%", overflow: "overlay" }}>
        <Table>
          <TableHead style={{ position: "sticky", top: 0 }}>
            <TableRow>
              <TableCell style={{ padding: 0 }} />
              <TableCell className={classes.HeaderCell}>
                Variable de innovación
              </TableCell>
              <TableCell align="center" className={classes.HeaderCell}>
                Med 1
              </TableCell>
              {
                measures.length > 1 && <>
                <TableCell align="center" className={classes.HeaderCell}>
                  Med 2
                </TableCell>
                <TableCell align="center" className={classes.HeaderCell}>
                  %
                </TableCell>
                </>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {compareScore.map(({ color, name, measureOne, measureTwo, id }) => (
              <TableRow key={id} hover>
                <TableCell className={classes.tableColorContent}>
                  <Box
                    className={classes.tableColor}
                    style={{
                      backgroundColor: color,
                      padding: 0,
                      boxShadow: `0px 0px 5px ${color}75`,
                    }}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell align="center">{measureOne}</TableCell>
                {measureTwo && <>
                  <TableCell align="center">{measureTwo}</TableCell>
                  <TableCell align="center" className={classes.cellItem}>
                    {measureOne + measureTwo / 2}
                  </TableCell>
                  </>
                }
              </TableRow> 
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      padding: theme.spacing(2, 2.5),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      transition: "all .4s",
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
      },
    },
    title: {
      ...theme.typography.subtitle1,
      color: theme.palette.deepGrey.main,
      marginBottom: theme.spacing(2),
    },
    tableColor: {
      width: theme.spacing(0.5),
      height: theme.spacing(8),
      transition: "all .4s",
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(6),
        height: theme.spacing(1),
        borderRadius: theme.spacing(0.5),
        marginLeft: theme.spacing(0.5),
      },
    },
    HeaderCell: {
      ...theme.typography.body1,
      fontWeight: 600,
    },
    cellItem: {
      "&::after": {
        content: "'%'",
        marginLeft: theme.spacing(0.5),
      },
    },
    datesBox: {
      display: "flex",
      justifyContent: "space-between",
      columnGap: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    tableColorContent: {
      padding: 0,
    },
  })
);

export default CompareScores;
