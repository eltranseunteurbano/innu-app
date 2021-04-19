import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import UserCard from "../../components/Dashboard/UserCard";
import CompareScores from "../../components/Dashboard/CompareScores";
import LastMeasures from "../../components/Dashboard/LastMeasures";
import { mediciones } from "../../data/lastMeasures";

const CollaboratorDashboard = () => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.root}>
      <UserCard />
      <LastMeasures data={mediciones} />
      <CompareScores />
    </Container>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "calc(100vh - 80px)",
      padding: theme.spacing(2),
      boxSizing: "border-box",
      backgroundColor: theme.palette.clearGrey.main,
      display: "flex",
      flexDirection: "column",
      rowGap: theme.spacing(3),
    },
  })
);

export default CollaboratorDashboard;
