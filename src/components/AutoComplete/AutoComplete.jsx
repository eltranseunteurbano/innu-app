import React from "react";
import { makeStyles, createStyles, lighten } from "@material-ui/core/styles";
import { Checkbox, TextField } from "@material-ui/core";
import { Autocomplete as AutocompleteComponent } from '@material-ui/lab';
import { CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon} from '@material-ui/icons';

const Autocomplete = ({ options, isCheckbox = false, placeholder, label, ...props }) => {
  const classes = useStyles();

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <AutocompleteComponent
      {...props}
      multiple
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      fullWidth
      autoHighlight
      ChipProps={{
        classes: { root: "mb-1"}
      }}
      renderOption={isCheckbox ? (option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            classes={{ checked: classes.checkboxRoot }}
            color="default"
          />
          {option.title}
        </React.Fragment>
      ) : undefined}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          label={label}
          placeholder={placeholder}
          classes={{
            root: classes.formRoot,
          }}
          className={classes.formInput}
          InputLabelProps={{
            ...params.InputLabelProps,
            classes: {
              ...params.InputLabelProps?.classes,
              formControl: classes.formLabel
            }
          }}
        />
      )}
    />
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    checkboxRoot: {
      color: theme.palette.blue.main,
    },
    formLabel: {
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
    formRoot: {
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
    formInput: {
      "& legend span": {
        display: "none",
      },
    },
    chipRoot: {
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

export default Autocomplete;
