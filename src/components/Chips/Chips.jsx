import React from "react";
import PropTypes from "prop-types";
import { Chip } from "@material-ui/core";
import { makeStyles, createStyles, lighten } from "@material-ui/core/styles";
import cn from "classnames";

const Chips = ({ className, label = "Label", color = "lavander" }) => {
  const classes = useStyles();
  return (
    <Chip
      label={label}
      className={cn(classes.root, classes[color], className)}
    />
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(0.5),
      letterSpacing: "1.1px",
    },
    red: {
      backgroundColor: lighten(theme.palette.red.main, 0.7),
      ...theme.typography.button,
      color: theme.palette.red.main,
      transition: "all .4s",
      "&:hover": {
        backgroundColor: lighten(theme.palette.red.main, 0.55),
      },
    },
    blue: {
      backgroundColor: lighten(theme.palette.blue.main, 0.7),
      ...theme.typography.button,
      color: theme.palette.blue.main,
      transition: "all .4s",
      "&:hover": {
        backgroundColor: lighten(theme.palette.blue.main, 0.55),
      },
    },
    esmerald: {
      backgroundColor: lighten(theme.palette.esmerald.button, 0.3),
      ...theme.typography.button,
      color: theme.palette.esmerald.tag,
      transition: "all .4s",
      "&:hover": {
        backgroundColor: theme.palette.esmerald.button,
      },
    },
    lavander: {
      backgroundColor: lighten(theme.palette.lavander.button, 0.3),
      ...theme.typography.button,
      color: theme.palette.lavander.tag,
      transition: "all .4s",
      "&:hover": {
        backgroundColor: theme.palette.lavander.button,
      },
    },
  })
);

Chips.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["red", "blue", "esmerald", "lavander"]),
  className: PropTypes.string,
};

export default Chips;
