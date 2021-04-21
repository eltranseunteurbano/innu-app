import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import CustomButton from "../../components/Button/Button";
import { ArrowRightRounded as ArrowRightRoundedIcon } from '@material-ui/icons';
import PricesCard from "../../components/Landing/PricesCard";
import LogoWhite from "../../assets/icons/LogoWhite";
import Header from "../../components/Header/Header";

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Header backgroundColor={theme.palette.clearGrey.main}/>
      <Box   className={classes.root} component='main'>
        <Box className={classes.banner}>
          <Typography className={classes.bannerTitle}>Por <strong>más cultura</strong> de innovación</Typography>
          <Typography className={classes.banneSubtitle}>Software confiable para medir y darle seguimiento a la cultura de innovación. </Typography>
          <Box className={classes.bannerActions}>
            <CustomButton size="small" variant="contained" color="secondary" component={Button}>Plan gratis</CustomButton>
            <CustomButton size="small" variant="text"  color="secondary" component={Button} endIcon={<ArrowRightRoundedIcon  />}>Conoce más</CustomButton>
          </Box>
          <img
            src={process.env.PUBLIC_URL + "/img/rectangleColors.svg"}
            alt="Imagen de decoración" className={classes.img}
          />
        </Box>
        <Box className={classes.prices}>
          <Box className={classes.pricesBox}>
            <Typography className={classes.pricesTitle}>¿Sabes cómo esta tu equipo?</Typography>
            <Box className={classes.pricesBoxCards}>
              {
                [{
                  title: 'Básico',
                  price: 40000,
                  team: 10,
                  questions: 13,
                  measures: 3

                }, {
                  title: 'Premium',
                  price: 63000,
                  team: 15,
                  questions: 24,
                  measures: 5

                }, {
                  title: 'Empresarial',
                  price: 80000,
                  team: 'Ilimitado',
                  questions: 'Ilimitado',
                  measures: 'Ilimitado'

                }].map((item, index) => 
                  <PricesCard
                    key={item + index}
                    title={item.title}
                    price={item.price}
                    measures={item.measures}
                    questions={item.questions}
                    team={item.team}
                  />
                )
              }
            </Box>
            <Typography className={classes.pricesDescription}>Hazte Premium en INNU, mide la cultura de innovación de tu equipo y monitorea el progreso de tu organización.</Typography>
          </Box>
        </Box>
        <footer className={classes.footer}>
          <LogoWhite className="mb-4"/>
          <Typography className={classes.footerTitle}>¿Tienes alguna pregunta?</Typography>
          <Typography className={classes.footerDescription}>Contacta con nosotros y estaremos encantados de atenderte.</Typography>
          <CustomButton className="mb-4" component={Button} size="small">Contactar con soporte</CustomButton>
          <Box className={classes.footerBottom}>
            <Typography className={classes.footerBottomText}>Copyright © 2021 INNU Company. Todos los derechos reservados.</Typography>
          </Box>
        </footer>
      
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      background: '#181A1D',
      width: '100%',
      paddingTop: theme.spacing(3),
      boxSizing: "border-box",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerBottom: {
      width: '100%',
      padding: theme.spacing(2),
      boxSizing: 'border-box',
      backgroundColor: '#4D5661'
    },
    footerBottomText: {
      ...theme.typography.body2,
      color: theme.palette.white.main,
      textAlign: 'center',
    },
    footerTitle: {
      ...theme.typography.subtitle1,
      color: theme.palette.white.main,
      textAlign: 'center',
    },
    footerDescription: {
      ...theme.typography.body1,
      color: theme.palette.white.main,
      textAlign: 'center',
      marginBottom: theme.spacing(2),
      padding: theme.spacing(0, 2),
      boxSizzing: 'border-box',
    },
    root: {
      width: "100%",
      backgroundColor: theme.palette.clearGrey.main,
      display: "flex",
      flexDirection: "column",
      rowGap: theme.spacing(3),
    },
    banner: {
      height: 'calc(100vh - 72px)',
      width: '100%',
      position: 'relative',
      padding: theme.spacing(2),
      boxSizing: "border-box",
      marginBottom: theme.spacing(-3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    bannerTitle : {
      ...theme.typography.large,
      marginBottom: theme.spacing(2),
      lineHeight: 1,
      textAlign: 'center',
      '& strong': {
        color: theme.palette.yellow.main,
      },
      [theme.breakpoints.up('md')]: {
        ...theme.typography.xlarge,
        paddingTop: theme.spacing(0),
      },
      [theme.breakpoints.up('lg')]: {
        ...theme.typography.xxlarge,
        paddingTop: theme.spacing(0),
        maxWidth: '45%'
      }
    },
    banneSubtitle: {
      ...theme.typography.subtitle2,
      color: theme.palette.midGrey.main,
      marginBottom: theme.spacing(2),
      textAlign: 'center',
    },
    bannerActions: {
      marginBottom: theme.spacing(2),
      display: 'flex'
    },
    img: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      maxWidth: '70%',
    },
    prices: {
      backgroundColor: theme.palette.blue.main,
      marginBottom: theme.spacing(-3),
      width: '100%',
    },
    pricesBox: {
      width: '100%',
      maxWidth: '1280px',
      padding: theme.spacing(3),
      boxSizing: "border-box",
      margin: 'auto',
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8, 3),
      }
    },
    pricesTitle: {
      ...theme.typography.h3,
      color: theme.palette.white.main,
      textAlign: 'center',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')] : {
        marginBottom: theme.spacing(4),
        ...theme.typography.h2,
        color: theme.palette.white.main,
      }
    },
    pricesDescription: {
      color: theme.palette.white.main,
      textAlign: 'center', 
      ...theme.typography.body2,
      margin: 'auto',
      [theme.breakpoints.up('md')] : {
        ...theme.typography.h4,
        maxWidth: '70%',
        color: theme.palette.white.main,
        fontWeight: 400,
      }     
    },
    pricesBoxCards: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      rowGap: theme.spacing(3),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')] : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        columnGap: theme.spacing(3),
        marginBottom: theme.spacing(4),
      }
    }
  })
);

export default Home;
