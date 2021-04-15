import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Logo from "../../assets/icons/Logo";
import { MenuOutlined as MenuOutlinedIcon } from "@material-ui/icons";
import { StickyContainer, Sticky } from "react-sticky";
import cn from "classnames";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <StickyContainer>
        <Sticky>
          {({ style, distanceFromTop }) => {
            return (
              <header
                className={cn(
                  classes.root,
                  distanceFromTop < -180 && classes.rootSticky
                )}
                style={{ ...style, top: 0 }}
              >
                <Logo />
                <nav>
                  <IconButton className={classes.respMenu}>
                    <MenuOutlinedIcon />
                  </IconButton>

                  <Button
                    variant="text"
                    className={classes.menuItem}
                    component={Link}
                  >
                    Ayuda
                  </Button>
                </nav>
              </header>
            );
          }}
        </Sticky>
      </StickyContainer>
      {children}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: theme.spacing(6),
      backgroundColor: theme.palette.white.main,
      padding: theme.spacing(2, 3),
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "all .4s",
    },
    rootSticky: {
      boxShadow: theme.shadows[3],
    },
    respMenu: {
      color: theme.palette.red.main,
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    menuItem: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  })
);

export default Header;
