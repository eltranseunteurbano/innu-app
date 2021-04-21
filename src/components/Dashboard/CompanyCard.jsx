import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import {
  Paper,
  Box,
  Avatar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import cn from "classnames";
import MeasuresCard from "./MeasuresCard";
import useAuth from "../../hooks/useAuth";

const CompanyCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchMDQuery = useMediaQuery(theme.breakpoints.up("md"));
  const { user } = useAuth();

  if(!user) return null
  return (
    <>
      <Paper className={cn(classes.root)}>
        <Box className={classes.avatar}>
          <Avatar className={classes.avatarImg} variant="rounded" src={user.photo}>
            I
          </Avatar>
          <Box>
            <Typography className={classes.name}>Universidad Icesi</Typography>
            <Typography className={classes.area}>
              1.040 colaboradores
            </Typography>
          </Box>
        </Box>
        {matchMDQuery && <MeasuresCard className={classes.MDUpScore} isCompany={true} />}
      </Paper>
      {!matchMDQuery && <MeasuresCard isCompany={true} />}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: theme.palette.white.main,
      boxShadow: "0px 2px 30px 0px #0D345105",
      padding: theme.spacing(2, 2.5),
      boxSizing: "border-box",
      borderRadius: `${theme.spacing(1)}px`,
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(2, 0, 2, 3),
      },
    },
    avatar: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      columnGap: theme.spacing(2),
    },
    avatarImg: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    name: {
      ...theme.typography.h4,
      color: theme.palette.deepGrey.main,
      lineHeight: "inherit",
    },
    area: {
      ...theme.typography.body2,
      fontWeight: 600,
      color: theme.palette.red.main,
    },
    MDUpScore: {
      padding: theme.spacing(0),
    },
  })
);

export default CompanyCard;
