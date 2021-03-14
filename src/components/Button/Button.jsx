import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonMaterial } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  useTheme,
  darken,
} from "@material-ui/core/styles";
import cn from "classnames";
// import * as theme from "../../styles/theme";

const Button = ({
  children,
  color = "Red",
  variant = "contained",
  className,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  return (
    <ButtonMaterial
      {...props}
      variant={variant}
      disableElevation
      className={cn(classes.root, classes[`${variant}_${color}`], className)}
    >
      {children}
    </ButtonMaterial>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1.5, 3),
      boxSizing: "border-box",
      letterSpacing: "1.5px",
      borderRadius: theme.spacing(1),
    },
    outlined_primary: {
      borderColor: theme.palette.red.main,
      background: `${theme.palette.red.main}20`,
      color: theme.palette.red.main,
      "&:hover": {
        background: `${theme.palette.red.main}30`,
      },
    },
    outlined_secondary: {
      borderColor: theme.palette.blue.main,
      background: `${theme.palette.blue.main}20`,
      color: theme.palette.blue.main,
      "&:hover": {
        background: `${theme.palette.blue.main}30`,
      },
    },
    outlined_grey: {
      borderColor: theme.palette.midGrey.main,
      background: `${theme.palette.midGrey.main}20`,
      color: theme.palette.deepGrey.main,
      "&:hover": {
        background: `${theme.palette.midGrey.main}40`,
      },
    },
    contained_primary: {
      background: theme.palette.red.main,
      color: theme.palette.white.main,
      "&:hover": {
        background: darken(theme.palette.red.main, 0.15),
      },
    },
    contained_secondary: {
      background: theme.palette.blue.main,
      color: theme.palette.white.main,
      "&:hover": {
        background: darken(theme.palette.blue.main, 0.25),
      },
    },
    contained_grey: {
      background: theme.palette.midGrey.main,
      color: theme.palette.white.main,
      "&:hover": {
        background: darken(theme.palette.midGrey.main, 0.25),
      },
    },
    text_primary: {
      color: theme.palette.red.main,
    },
    text_secondary: {
      color: theme.palette.blue.main,
    },
    text_grey: {
      color: theme.palette.midGrey.main,
    },
  })
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "grey"]),
  variant: PropTypes.oneOf(["outlined", "contained", "text"]),
};

export default Button;
