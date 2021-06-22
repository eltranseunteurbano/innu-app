import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import UserCard from "../../components/Dashboard/UserCard";
import CompareScores from "../../components/Dashboard/CompareScores";
import LastMeasures from "../../components/Dashboard/LastMeasures";
import { mediciones } from "../../data/lastMeasures";
import { NavBarContext } from "../../context/NavBarContext";
import TableTeamsPosition from "../../components/Dashboard/TableTeamsPosition";
import firebase from '../../firebase/firebase';
import axios from "axios";

const CollaboratorDashboard = () => {
  const classes = useStyles();

  const { onHandleChangeTite } = React.useContext(NavBarContext);
  const isCollaborator = false;
  const [measures, setMeasures] = React.useState([]);
  const [measuresFB, setMeasuresFB] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    onHandleChangeTite('Dashboard')
  }, [onHandleChangeTite]);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/results/Eixw2cYg85wdIusxzjLq`)
    .then(( { data: { measures } } ) => {      
      setMeasures(measures);
    });
  }, [])

  const getData = async() => {
    await firebase.firestore().collection('companies')
    .doc('Eixw2cYg85wdIusxzjLq').collection('measures')
    .onSnapshot((quertSnapshot) => {
      let temp = [];
      quertSnapshot.forEach((doc) => {
        temp.push(doc.data());
      })
      setMeasuresFB(temp);
    });    
  }

  React.useEffect(() => {
    getData();
  }, [])
  console.log(measures)

  React.useEffect(() => {
    let finalData = []
    measures.forEach((measure, count) => {
      let measureUser = measure.rawData.members.find(item => item.user === "u3JWROMTdCQHetrWDfITMHz4i8l1");
      let temp = {
        name: measuresFB[count].name,
        own: measureUser?.average || 1,
        team: measuresFB[count].isFinished ? Math.floor(Math.random()*(5 - 1) + 1) : 0,
        company: measuresFB[count].isFinished ? Math.floor(Math.random()*(5 - 1) + 1) : 0,
        colors: {
          own: '#F5B840',
          team: '#FF5F21',
          company: '#2D75E1',
        }
      }
      finalData.push(temp);
    })
    setData(finalData)
  }, [measures])

  return (
    <Container disableGutters className={classes.root}>
      <UserCard />
      <LastMeasures data={!!data ? data : []} />
      { !isCollaborator && <TableTeamsPosition />}
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
