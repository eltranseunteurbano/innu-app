import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import LoginForm from "../../components/Auth/LoginForm";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const Login = () => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.root}>
      <Box className={classes.header}>
        <Typography className={classes.headerTitle}>
          Eleva tu organización
        </Typography>
        <Typography className={classes.headerText}>
          Con INNU la innovación está mucho más cerca de lo que crees
        </Typography>
      </Box>
      <LoginForm />
    </Container>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(0, 5),
      boxSizing: "border-box",
      marginBottom: theme.spacing(3),
    },
    headerTitle: {
      ...theme.typography.h4,
      color: theme.palette.red.main,
      marginBottom: theme.spacing(1),
    },
    headerText: {
      ...theme.typography.subtitle2,
      color: theme.palette.deepGrey.main,
    },
  })
);

export default Login;
