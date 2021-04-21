import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Box, Typography, Tooltip, Zoom } from "@material-ui/core";
import cn from "classnames";

const MeasuresCard = ({ className, isCompany }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper className={cn(classes.root, className)}>
      <Box className={classes.measures}>
        <Box className={classes.measuresItem}>
          <Typography className={classes.measuresItemTitle}>
            Puntaje Global
          </Typography>
          <Box
            className={classes.measuresItemScore}
            style={{ backgroundColor: theme.palette.rose.main }}
          >
            <Typography
              className={classes.measuresItemScoreText}
              style={{ color: theme.palette.red.main }}
            >
              3.5
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
          title="Debilidad en Educación"
          arrow
          TransitionComponent={Zoom}
        >
          <Box className={classes.measuresItem}>
            <Typography className={classes.measuresItemTitle}>
              Debilidad en Educación
            </Typography>
            <Box
              className={classes.measuresItemScore}
              style={{ backgroundColor: theme.palette.esmerald.main }}
            >
              <Typography
                className={classes.measuresItemScoreText}
                style={{ color: theme.palette.deepGrey.main }}
              >
                1.3
              </Typography>
            </Box>
          </Box>
        </Tooltip>
        <Tooltip
          title="Fortaleza de Comunicación"
          arrow
          TransitionComponent={Zoom}
        >
          <Box className={classes.measuresItem}>
            <Typography className={classes.measuresItemTitle}>
              Fortaleza de Comunicación
            </Typography>
            <Box
              className={classes.measuresItemScore}
              style={{ backgroundColor: theme.palette.lavander.main }}
            >
              <Typography
                className={classes.measuresItemScoreText}
                style={{ color: theme.palette.deepGrey.main }}
              >
                3.3
              </Typography>
            </Box>
          </Box>
        </Tooltip>
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
