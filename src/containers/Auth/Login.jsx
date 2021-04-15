import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import LoginForm from "../../components/Auth/LoginForm";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Header />
      <Container disableGutters className={classes.root}>
        <Container disableGutters maxWidth="sm" className={classes.header}>
          <Box
            style={{ minHeight: theme.spacing(7) }}
            className={classes.contentDisappear}
          />
          <Box>
            <Typography className={classes.headerTitle}>
              Eleva tu organización
            </Typography>
            <Typography className={classes.headerText}>
              Con INNU la innovación está mucho más cerca de lo que crees
            </Typography>
          </Box>
          <img
            src={process.env.PUBLIC_URL + "/img/rectangleColors.svg"}
            alt="Imagen de decoración"
            className={classes.contentDisappear}
          />
        </Container>
        <LoginForm />
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 80px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
    },
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(4, 5),
      boxSizing: "border-box",
      minHeight: "calc(100vh - 80px - 475px)",
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 5),
        justifyContent: "space-between",
        minHeight: "calc(100vh - 72px)",
      },
    },
    headerTitle: {
      ...theme.typography.h4,
      color: theme.palette.red.main,
      marginBottom: theme.spacing(1),
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        ...theme.typography.large,
        textAlign: "left",
        marginBottom: theme.spacing(3),
      },
    },
    headerText: {
      ...theme.typography.subtitle2,
      color: theme.palette.deepGrey.main,
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        ...theme.typography.h3,
        textAlign: "left",
      },
    },
    contentDisappear: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  })
);

export default Login;
