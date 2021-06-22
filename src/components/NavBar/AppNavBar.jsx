import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  Avatar,
  ButtonBase,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  MenuOutlined as MenuOutlinedIcon,
  ArrowDropDownRounded as ArrowDropDownRoundedIcon,
} from "@material-ui/icons";
import Logo from "../../assets/icons/Logo";
import cn from "classnames";
import DrawerMenu from "./DrawerMenu";
import { useHistory } from "react-router";
import { HOME } from "../../Routes/Routes";
import { NavBarContext } from "../../context/NavBarContext";
import useAuth from "../../hooks/useAuth";
import { Skeleton } from "@material-ui/lab";

const AppNavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(null);

  const { title: titleNavbar } = React.useContext(NavBarContext)
  const { logOut, user } = useAuth();

  const onClose = () => {
    setShowDrawer(!showDrawer);
  };

  const onShowMenu = (event) => {
    setShowMenu(event.currentTarget);
  };

  const signOut = () => {
    logOut();
    history.push(HOME)
  }

  return (
    <>
      <header className={cn(classes.root)}>
        <nav className={classes.nav}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton
              className={cn(classes.btnResp, "mr-1")}
              onClick={onClose}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <Logo className={classes.navLogo} />
          </Box>
          <Typography className={classes.title}>{titleNavbar}</Typography>
          <ButtonBase className={classes.avatar} onClick={onShowMenu}>
            <Divider orientation="vertical" flexItem />
            
            {user && !!user.name ?
              <Avatar variant="rounded" className={classes.btnAvatar} src={user.photo ?? undefined}>
                {user.name[0]}
              </Avatar>
            :  
              <Skeleton variant="circle" width="24px" height="24px"/>}
            {user && !!user.name ?
              <Typography className={classes.btnText}>{user.name}</Typography>
              :
              <Skeleton variant="text" width="150px"/>
            }
            <ArrowDropDownRoundedIcon />
          </ButtonBase>
          <Menu
            id="menu-header-profile"
            anchorEl={showMenu}
            keepMounted
            open={!!showMenu}
            onClose={() => setShowMenu(!showMenu)}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            classes={{ paper: classes.headerProfileMenu }}
          >
            <MenuItem>Perfil</MenuItem>
            <MenuItem onClick={signOut}>
              Cerrar sesión
            </MenuItem>
          </Menu>
        </nav>
      </header>
      <DrawerMenu open={showDrawer} onClose={onClose} />
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      boxSizing: "border-box",
      backgroundColor: theme.palette.clearGrey.main,
    },
    nav: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btnResp: {
      color: theme.palette.red.main,
    },
    navLogo: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    title: {
      ...theme.typography.h4,
      color: theme.palette.Deepgreay,
    },
    avatar: {
      display: "flex",
      columnGap: theme.spacing(1),
    },
    btnAvatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      backgroundColor: theme.palette.mistGrey.main,
    },
    btnText: {
      ...theme.typography.subtitle1,
      color: theme.palette.Deepgreay,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    headerProfileMenu: {
      boxShadow: "0px 2px 30px 0px #0D345110",
    },
  })
);

export default AppNavBar;
