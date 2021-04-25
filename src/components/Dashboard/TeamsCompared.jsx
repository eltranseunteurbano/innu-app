import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { Container, Typography, Box, Snackbar, Slide, Collapse, Fade, Portal } from "@material-ui/core";
import Autocomplete from '../AutoComplete/AutoComplete';
import SpiderChart from "../Graphics/SpiderChart";
import Chip from '../Chips/Chips';
import { CancelRounded as CancelRoundedIcon } from '@material-ui/icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const TeamsCompared = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [teamsFiltered, setTeamsFiltered] = React.useState(teams);
  const [comparedTeams, setComparedTeams] = React.useState([]);
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const onChangeAutoComplete = React.useCallback(( event, value ) => {
    setTeamsFiltered(value);
  }, []);

  const onChangeSelectedItems = (event, value) => {
    if(!comparedTeams.find(item => item === value)){
      if(comparedTeams.length < 3){
        setComparedTeams((old) => {
          return [...old, value ]
        })
      } else {
        setShowSnackbar(true);
      }
    } else {
      setComparedTeams((old) => {
        return comparedTeams.filter(item => item !== value)
      })
    }
  }

  const onHandleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  React.useEffect(() => {
    if(teamsFiltered.length === 0) {
      onChangeAutoComplete(null, teams)
    }
  }, [onChangeAutoComplete, teamsFiltered.length])

  return (
    <Container disableGutters className={classes.root}>
      <Typography className={classes.subtitle}>Escala del 0 al 5 - Todas las gráficas de los equipos estan comparadas con la de la empresa</Typography>
      <Typography className={classes.title}>Ranking de equipos</Typography>
      <Autocomplete
        options={teams}
        isCheckbox={true}
        placeholder="Buscar equipo"
        label="Equipos"
        onChange={onChangeAutoComplete}
      />
      <Box className={classes.spiderBox}>
        {
          teamsFiltered.map(({ id, title, values }, index) => 
            <SpiderChart
              name={title}
              isSelected={comparedTeams.find(item => item === title)}
              onSelect={onChangeSelectedItems}
              key={id}
              className={title === 'Empresa' && classes.customSpiderChart }
            />
          )
        }
      </Box>
      
      <Portal container={document.body}>
        <Collapse in={comparedTeams.length > 0} className={classes.footerCollapse}>
          <Box component="footer" className={classes.footer}>
            <Typography className={classes.footerTitle}>Equipos a comparar</Typography>
            <Box className={classes.footerBody}>
              <Box className={classes.footerItems}>
                {
                  comparedTeams.map((item, index) => <Fade in={!!item}>
                    <Chip
                      label={item}
                      key={index + item}
                      color="white"
                      onDelete={() => onChangeSelectedItems(null, item)}
                      deleteIcon={<CancelRoundedIcon style={{ color: theme.palette.white.main }}/>}
                    />
                  </Fade>)
                }
              </Box>
              <Box className={classes.footerBtn}>
                <Button component={Link} to="">Comparar</Button>
              </Box>
            </Box>
          </Box>
        </Collapse>
      </Portal>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        message="Solo puedes comparar 3 equipos a la vez"
        onClose={onHandleCloseSnackbar}
        TransitionComponent={SlideTransition}
      />
    </Container>
  );
};

const SlideTransition = (props) => {
  return <Slide {...props} direction="right" />;
}

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
    subtitle: {
      ...theme.typography.body2,
      color: theme.palette.midGrey.main,
      textAlign: 'center',
      [theme.breakpoints.up("sm")]: {
        textAlign: 'left'
      },
    },
    spiderBox: {
      width: '100%',
      display: 'grid',
      gridGap: theme.spacing(2),
      margin: theme.spacing(3, 0),
      gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      }
    },
    footerCollapse: {
      width: '100%',
      position: 'sticky',
      bottom: 0,
      zIndex: 5,
    },
    footerTitle: {
      ...theme.typography.subtitle1,
      color: theme.palette.clearGrey.main,
      marginBottom: theme.spacing(2),
    },
    footer: {
      width: '100%',
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      backgroundColor: theme.palette.midGrey.main,
      borderTopLeftRadius: theme.spacing(1),
      borderTopRightRadius: theme.spacing(1),
      boxShadow: `0px 2px 20px 0px ${theme.palette.mistGrey.main}`,
    },
    footerBody: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    },
    footerBtn: {
      marginTop: theme.spacing(2),
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        width: 'auto',
        marginTop: 0,
      }
    },
    footerItems: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2),
    },
    customSpiderChart: {
      order: '-1',
      backgroundColor: `${theme.palette.clearGrey.main} !important`
    }
  })
);

export default TeamsCompared;

const teams = [
  {
    id: 0,
    title: 'Departamento de Diseño',
    values: {}
  }, {
    id: 1,
    title: 'Departamento de Mercadeo',
    values: {}
  }, {
    id: 2,
    title: 'Ventas',
    values: {}
  }, {
    id: 3,
    title: 'Logistica',
    values: {}
  }, {
    id: 4,
    title: 'Gerencia',
    values: {}
  }, {
    id: 5,
    title: 'Producto',
    values: {}
  }, {
    id: 6,
    title: 'Desarrollo',
    values: {}
  }, {
    id: 7,
    title: 'Servicios',
    values: {}
  }, {
    id: 8,
    title: 'Empresa',
    values: {}
  }
];