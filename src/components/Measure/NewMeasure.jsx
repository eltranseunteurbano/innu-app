import * as React from 'react';
import { makeStyles, createStyles, Slide, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import Btn from '../Button/Button';
import cn from 'classnames';
import FormikTextField from '../Formik/FormikTextField';
import useNewMeasure from './useNewMesuare';
import useMeasure from '../../hooks/useMeasure';

const NewMeasure = (props) => {
  const classes = useStyles();
  const { onClose, ...others } = props;
  const { formik } = useNewMeasure();

  useMeasure();

  const onSaveMeasure = () => {
    if(formik.isValid){
      formik.handleSubmit();
    }
  }
  
  return (
    <Dialog
      onClose={onClose}
      TransitionComponent={Transition}
      scroll='body'
      fullWidth
      maxWidth="sm"
      classes={{paper: cn(classes.root, props['className'])}}
      disableBackdropClick
      {...others}
    >
      <DialogTitle>Programar nueva medición</DialogTitle>
      <DialogContent dividers>
        <form>
          <FormikTextField
            formik={formik}
            valueId="name"
            placeholder="Medición del mes de Marzo"
            label="Nombre de la medición"
            fullWidth
            className="mb-2"
          />

          <FormikTextField
            formik={formik}
            isDate={true}
            valueId="startDate"
            placeholder="24/10/21"
            label="Fecha de inicio"
            fullWidth
            className="mb-2"
            type="date"
          />

          <FormikTextField
            formik={formik}
            isDate={true}
            type="date"
            valueId="endDate"
            placeholder="24/11/21"
            label="Fecha de fin"
            fullWidth
            className="mb-2"
          />
        </form>
      </DialogContent>
      <DialogActions classes={{root: classes.actions}}>
        <Btn variant="outlined" color="grey" onClick={props['onClose']} className={classes.cancelBtn} >Cancelar</Btn>
        <Btn variant="contained" color="primary" className={classes.confirmBtn} onClick={onSaveMeasure}>Nueva medición</Btn>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
    },
    actions: {
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      boxSizing: 'border-box'
    },
    confirmBtn: {
      // color: theme.palette.blue.main,
      // borderColor: theme.palette.blue.main
    },
    cancelBtn: {
      // color: theme.palette.mistGrey.main,
    }
  })
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default NewMeasure;