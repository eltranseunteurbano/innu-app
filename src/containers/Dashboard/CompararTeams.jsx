import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { Container, Paper, Typography,Table, TableHead, TableBody, TableRow, TableCell, Box, useMediaQuery } from "@material-ui/core";
import { ArrowBackIosRounded as ArrowBackIosRoundedIcon, CancelRounded as CancelRoundedIcon} from '@material-ui/icons';
import { NavBarContext } from "../../context/NavBarContext";
import { APP, APP_TEAMS } from '../../Routes/Routes';
import { Link } from 'react-router-dom';
import variables from '../../data/variables';
import { Radar } from 'react-chartjs-2';
import cn from 'classnames';

const CompararTeams = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { onHandleChangeTite } = React.useContext(NavBarContext);
  const teams = ['Diseño', 'Ventas', 'Mercadeo'];
  const matchMDQuery = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    onHandleChangeTite('Comparación de equipos')
  }, [onHandleChangeTite]);

  return (
    <Container disableGutters className={classes.root}>
      <Typography className={classes.goBack} component={Link} to={`${APP}${APP_TEAMS}`}><ArrowBackIosRoundedIcon style={{ color: theme.palette.red.main, fontSize: '0.85rem' }} />Ver todos los equipos</Typography>
      <Paper className={classes.paper}>
        <header className={classes.header}>
          <Typography className={classes.subtitle}>Escala del 1 al 5</Typography>
          <Typography className={classes.title}>Comparación Detallada variables innu</Typography>
        </header>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ borderBottom: 'none' }} />
              {
                teams.map(item => <TableCell
                  align="center"
                  className={classes.customHeaderRow}
                  >
                    <Box className={classes.customHeaderColumn}>
                      <CancelRoundedIcon className={classes.deleteItem} />
                      <Typography className={classes.titleGraph}>{item}</Typography>
                      <Typography className={classes.textGraph}>Resultados: <strong>12/40</strong> colaboradores</Typography>
                      {matchMDQuery && <Box style={{maxWidth: 270}}>
                        <Radar
                          data={data}
                          options={{
                            maintainAspectRatio: true,
                            animations: {
                              tension: {
                                duration: 1000,
                                easing: 'linear',
                                from: 1,
                                to: 0,
                              }
                            },
                            plugins: {
                              legend: {
                                display: false
                              },
                            },
                            elements: {
                              point: {
                                backgroundColor: theme.palette.red.main,
                                hoverBorderWidth: 4,
                                hoverRadius: 10,
                              },
                              line: {
                                borderWidth: 1,
                                borderColor: theme.palette.red.main,
                              },
                            }
                          }}
                        />
                      </Box>}
                    </Box>
                </TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {
              variables.map((item, index) => {
                console.log(index, variables.length - 1)
                return(
                <TableRow hover className={cn(classes.customRow, 'row')}>
                  <TableCell style={{padding: 0}} className="cell">
                    {item.name}
                  </TableCell>
                  <TableCell align="center" className={cn(classes.customCell, "cell")}>
                    <Box className={cn(classes.customColor, "cell-box")}
                      style={
                        index === variables.length - 1 ? {
                          borderBottomLeftRadius: theme.spacing(1),
                          borderBottomRightRadius: theme.spacing(1),
                        } : undefined
                      }>
                      4
                    </Box>
                    </TableCell>
                  <TableCell align="center" className={cn(classes.customCell, "cell")}>
                    <Box className={cn(classes.customColor, "cell-box")}
                      style={
                        index === variables.length - 1 ? {
                          borderBottomLeftRadius: theme.spacing(1),
                          borderBottomRightRadius: theme.spacing(1),
                        } : undefined
                      }>
                      4
                    </Box>
                    </TableCell>
                  <TableCell align="center" className={cn(classes.customCell, "cell")}>
                    <Box className={cn(classes.customColor, "cell-box")}
                      style={
                        index === variables.length - 1 ? {
                          borderBottomLeftRadius: theme.spacing(1),
                          borderBottomRightRadius: theme.spacing(1),
                        } : undefined
                      }>
                      4
                    </Box>
                    </TableCell>
                </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
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
      rowGap: theme.spacing(2),
    },
    paper: {
      width: '100%',
      padding: theme.spacing(3),
      boxSizing: 'border-box',
      overflow: 'auto',
    },
    header: {
      position: 'sticky',
      left: theme.spacing(0),
    },
    subtitle: {
      ...theme.typography.body2,
      color: theme.palette.midGrey.main,
    },
    title: {
      ...theme.typography.subtitle1,
      color: theme.palette.deepGrey.main,
      marginBottom: theme.spacing(2),
    },
    goBack: {
      ...theme.typography.body2,
      color: theme.palette.red.main,
      textDecoration: 'underline',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems:'center',
      columnGap: theme.spacing(0.5),
      '&:hover': {
        columnGap: theme.spacing(1),
      }
    },
    customColor: {
      backgroundColor: theme.palette.lavander.main,
      width: 'calc(100% - 8px)',
      height: '100%',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% - 16px)',
      }
    },
    customHeaderColumn: {
      backgroundColor: theme.palette.lavander.main,
      borderTopLeftRadius: theme.spacing(1),
      borderTopRightRadius: theme.spacing(1),
      width: 'calc(100% - 8px)',
      margin: 'auto',
      padding: theme.spacing(3),
      boxSizing: 'border-box',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% - 16px)',
      }
    },
    customCell: {
      padding: 0,
      borderBottom: 'none',
      height: theme.spacing(7),
      '&:last-child': {
        padding: 0,
      }
    },
    customRow: {
      minHeight: theme.spacing(7),
      '&:last-child': {
        '& > td': {
          borderBottom: 'none',
        }
      }
    },
    customHeaderRow: {
      padding: 0,
      borderBottom: 'none',
      '&:last-child': {
        padding: 0,
      }
    },
    deleteItem: {
      position: 'absolute',
      color: theme.palette.red.main,
      top: -12,
      right: -12,
      cursor: 'pointer',
    },
    titleGraph: {
      ...theme.typography.subtitle1,
      color: theme.palette.red.main,
    },
    textGraph: {
      ...theme.typography.body2,
    },
    tableBody: {
      '& .row:hover': {
        '& .cell:first-child': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '& .cell:not(:first-child)':{
          '& .cell-box': {
            backgroundColor: `${theme.palette.blue.main}30`,
            borderBottom: 'none',
          },
        },
      }
    }
  })
);

export default CompararTeams;

const data = {
  labels: variables.map((item) => item.name),
  datasets: [
    {
      label: ' Valor de la variable',
      data: variables.map((item) => item.med1),
      backgroundColor: '#FF5F2150',
    },
  ],
};