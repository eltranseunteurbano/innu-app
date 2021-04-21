import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import CompanyCard from "../../components/Dashboard/CompanyCard";
import { NavBarContext } from "../../context/NavBarContext";
import TableTeamsPosition from "../../components/Dashboard/TableTeamsPosition";

const DashboardTeam = () => {
  const classes = useStyles();

  const { onHandleChangeTite } = React.useContext(NavBarContext);

  React.useEffect(() => {
    onHandleChangeTite('Detalles de equipo')
  }, [onHandleChangeTite]);

  return (
    <Container disableGutters className={classes.root}>
      <CompanyCard />
      <TableTeamsPosition />
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

export default DashboardTeam;
