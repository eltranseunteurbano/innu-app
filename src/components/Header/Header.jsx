import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Logo from "../../assets/icons/Logo";
import { MenuOutlined as MenuOutlinedIcon } from "@material-ui/icons";
import { StickyContainer, Sticky } from "react-sticky";
import cn from "classnames";

const Header = () => {
  const classes = useStyles();

  return (
    <StickyContainer>
      <Sticky>
        {({ style, distanceFromTop }) => {
          return (
            <header
              className={cn(
                classes.root,
                distanceFromTop < 0 && classes.rootSticky
              )}
              style={{ ...style, top: 0 }}
            >
              <Logo />
              <IconButton className={classes.respMenu}>
                <MenuOutlinedIcon />
              </IconButton>
            </header>
          );
        }}
      </Sticky>
    </StickyContainer>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
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
    },
  })
);

export default Header;
