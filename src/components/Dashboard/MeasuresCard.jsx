import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Box, Typography, Tooltip, Zoom } from "@material-ui/core";
import cn from "classnames";
import { Skeleton } from "@material-ui/lab";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";

const MeasuresCard = ({ className, isCompany }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { user } = useAuth();
  const [measure, setMeasure] = React.useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/results/Eixw2cYg85wdIusxzjLq`)
    .then(( { data: { measures } } ) => {      
      if(!!user){
        setMeasure(() => measures[measures.length - 1].rawData.members.find(item => item.user === user.uid));
      }
    });
    
  }, [user])

  return (
    <Paper className={cn(classes.root, className)}>
      {
        !!measure ?
        <Box className={classes.measures}>
          <Box className={classes.measuresItem}>
            <Typography className={classes.measuresItemTitle}>
              Promedio
            </Typography>
            <Box
              className={classes.measuresItemScore}
              style={{ backgroundColor: theme.palette.lavander.main }}
            >
              <Typography
                className={classes.measuresItemScoreText}
                style={{ color: theme.palette.deepGrey.main }}
              >
                {measure?.average?.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          {!isCompany && <Box className={classes.measuresItem}>
            <Typography className={classes.measuresItemTitle}>
              Ranking de Equipo
            </Typography>
            <Box
              className={cn(classes.measuresItemScore, "px-2")}
              style={{ backgroundColor: theme.palette.sky.main }}
            >
              <Typography
                className={classes.measuresItemScoreText}
                style={{ color: theme.palette.midGrey.main }}
              >
                14 <span style={{ color: theme.palette.blue.main }}>/ 15</span>
              </Typography>
            </Box>
          </Box>}
          {isCompany && <Box className={classes.measuresItem}>
            <Typography className={classes.measuresItemTitle}>
              Ranking de Empresas
            </Typography>
            <Box
              className={cn(classes.measuresItemScore, "px-2")}
              style={{ backgroundColor: theme.palette.sky.main }}
            >
              <Typography
                className={classes.measuresItemScoreText}
                style={{ color: theme.palette.midGrey.main }}
              >
                14 <span style={{ color: theme.palette.blue.main }}>/ +400</span>
              </Typography>
            </Box>
          </Box>}
          <Tooltip
            title={`Variable a mejorar: ${measure.min?.name}`}
            arrow
            TransitionComponent={Zoom}
          >
            <Box className={classes.measuresItem}>
              <Typography className={classes.measuresItemTitle}>
                Variable a mejorar: {measure.min?.name}
              </Typography>
              <Box
                className={classes.measuresItemScore}
                style={{ backgroundColor: theme.palette.rose.main }}
              >
                <Typography
                  className={classes.measuresItemScoreText}
                  style={{ color: theme.palette.red.main }}
                >
                  {measure.min?.average}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
          <Tooltip
            title={`Fortaleza: ${measure.max?.name}`}
            arrow
            TransitionComponent={Zoom}
          >
            <Box className={classes.measuresItem}>
              <Typography className={classes.measuresItemTitle}>
                Fortaleza: {measure.max?.name}
              </Typography>
              <Box
                className={classes.measuresItemScore}
                style={{ backgroundColor: theme.palette.esmerald.main }}
              >
                <Typography
                  className={classes.measuresItemScoreText}
                  style={{ color: theme.palette.deepGrey.main }}
                >
                  {measure.max?.average}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        </Box>
      :
      <Box className={classes.measures}>
        <Box className={classes.measuresItem}>
          <Skeleton width="100px" variant="text" className="mb-1" />
          <Skeleton width="48px" height="48px" variant="rect" />
        </Box>
        <Box className={classes.measuresItem}>
          <Skeleton width="100px" variant="text" className="mb-1" />
          <Skeleton width="48px" height="48px" variant="rect" />
        </Box>
        <Box className={classes.measuresItem}>
          <Skeleton width="100px" variant="text" className="mb-1" />
          <Skeleton width="48px" height="48px" variant="rect" />
        </Box>
        <Box className={classes.measuresItem}>
          <Skeleton width="100px" variant="text" className="mb-1" />
          <Skeleton width="48px" height="48px" variant="rect" />
        </Box>
      </Box>
      }
    </Paper>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      padding: theme.spacing(4, 2.5),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
      },
    },
    measures: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      rowGap: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
    measuresItem: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      minWidth: 0,
    },
    measuresItemTitle: {
      ...theme.typography.subtitle2,
      color: theme.palette.deepGrey.main,
      marginBottom: theme.spacing(1),
      textAlign: "center",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "90%",
    },
    measuresItemScore: {
      minWidth: theme.spacing(6),
      minHeight: theme.spacing(6),
      borderRadius: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    measuresItemScoreText: {
      ...theme.typography.subtitle1,
    },
  })
);

export default MeasuresCard;
