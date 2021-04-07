import React from "react";
import { Drawer, IconButton, Box, MenuList, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { CloseRounded as CloseRoundedIcon } from "@material-ui/icons";
import cn from "classnames";
import Logo from "../../assets/icons/Logo";

const DrawerMenu = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.root}
      classes={{ paper: classes.paper }}
      ModalProps={{ BackdropProps: { classes: { root: classes.modal } } }}
      open={open}
      anchor="left"
      onClose={onClose}
    >
      <Box className={classes.header}>
        <IconButton className={cn(classes.btnResp, "mr-1")} onClick={onClose}>
          <CloseRoundedIcon />
        </IconButton>
        <Logo className={classes.navLogo} />
      </Box>
      <MenuList>
        <MenuItem className={classes.menuItem}>Dashboard</MenuItem>
        <MenuItem className={classes.menuItem}>Encuesta</MenuItem>
        <MenuItem className={classes.menuItem}>Glosario</MenuItem>
      </MenuList>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexShrink: 0,
    },
    modal: {
      backgroundColor: "transparent",
    },
    paper: {
      width: "70%",
      maxWidth: 400,
      backgroundColor: theme.palette.clearGrey.main,
      border: "none",
      padding: theme.spacing(2, 0),
      boxSizing: "border-box",
      boxShadow: "0px 2px 30px rgba(45, 117, 225, 0.23)",
    },
    btnResp: {
      color: theme.palette.red.main,
    },
    menuItem: {
      fontWeight: 600,
      transition: "all .4s",
      "&:focus": {
        backgroundColor: theme.palette.deepGrey.main,
        color: theme.palette.white.main,
      },
    },
  })
);

export default DrawerMenu;
