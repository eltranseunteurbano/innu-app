import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  TextField as MuiTextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import { ErrorOutline as ErrorOutlineIcon } from "@material-ui/icons/";

const TextField = ({
  className,
  variant = "outlined",
  type = "text",
  label = "Label",
  placeholder = "Placeholder",
  endAdornment,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const childProps = { ...props };
  delete childProps.formik;
  delete childProps.valueId;

  return (
    <Box className={className}>
      <MuiTextField
        {...childProps}
        variant={variant}
        placeholder={placeholder}
        type={type}
        className={classes.input}
        classes={{ root: classes.root }}
        label={label}
        InputLabelProps={{
          ...props.InputLabelProps,
          classes: {
            ...props.InputLabelProps?.classes,
            formControl: classes.label,
          },
        }}
        InputProps={{
          endAdornment: props.error ? (
            <InputAdornment
              position="end"
              style={{ color: theme.palette.red.main }}
            >
              <ErrorOutlineIcon />
            </InputAdornment>
          ) : (
            endAdornment && (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            )
          ),
        }}
      />
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        backgroundColor: theme.palette.white.main,
        "& fieldset": {
          ...theme.typography.body1,
          color: theme.palette.deepGrey.main,
          boxShadow: "0px 2px 30px rgba(13, 52, 81, 0.05)",
          transition: "all .4s",
        },
        "&:hover fieldset": {
          borderColor: theme.palette.clearGrey.main,
          boxShadow: "0px 2px 30px rgba(45, 117, 225, 0.23)",
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.blue.main,
          boxShadow: "0px 2px 30px rgba(45, 117, 225, 0.23)",
        },
        "&.Mui-disabled": {
          "& .MuiOutlinedInput-notchedOutline": {
            boxShadow: "none",
            color: theme.palette.midGrey.main,
            borderColor: theme.palette.midGrey.main,
          },
        },
      },
      "& .MuiInputBase-root": {
        "& .Mui-disabled": {
          backgroundColor: theme.palette.clearGrey.main,
        },
      },
    },
    label: {
      position: "unset",
      transform: "unset !important",
      marginBottom: "0.5em",
      ...theme.typography.body1,
      textTransform: "capitalize",
      color: `${theme.palette.deepGrey.main}!important`,
      '&[data-shrink="false"] + .MuiInputBase-formControl .MuiInputBase-input::placeholder': {
        opacity: "0.42 !important",
        transition: "none !important",
      },
    },
    input: {
      "& legend span": {
        display: "none",
      },
    },
  })
);

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  size: PropTypes.oneOf(["medium", "small"]),
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  autoFocus: PropTypes.bool,
  endAdornment: PropTypes.node,
};

export default TextField;
