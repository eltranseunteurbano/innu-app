import React from "react";
// import { IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Logo from "../../assets/icons/Logo";
// import { MenuOutlined as MenuOutlinedIcon } from "@material-ui/icons";
import cn from "classnames";
import Button from "../Button/Button";
import { Link, useHistory } from "react-router-dom";
import { HOME, LOGIN } from '../../Routes/Routes';

const Header = ({ backgroundColor = '#ffffff' }) => {
  const classes = useStyles();
  const history = useHistory();
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY)
    }
  }, [])

  return (
    <header
      className={cn(
        classes.root,
        scrollY > 100 && classes.rootSticky
      )}
      style={{ backgroundColor }}
    >
      <Logo onClick={() => history.push(HOME)} className={classes.logo}/>
      <nav>
        {/* <IconButton className={classes.respMenu}>
          <MenuOutlinedIcon />
        </IconButton> */}

        <Button
          variant="text"
          className={classes.menuItem}
          component={Link}
          to={LOGIN}
        >
          Iniciar sesión
        </Button>
      </nav>
    </header>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: theme.spacing(6),
      padding: theme.spacing(2, 3),
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "all .4s",
      position: 'sticky',
    },
    rootSticky: {
      boxShadow: theme.shadows[3],
      top: 0,
      zIndex: 10,
      transition: "all .4s",
    },
    respMenu: {
      color: theme.palette.red.main,
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    menuItem: {
      display: "flex",
    },
    logo: {
      cursor: 'pointer',
    }
  })
);

export default Header;
