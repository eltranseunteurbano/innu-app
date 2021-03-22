import React from "react";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from "@material-ui/core";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";
import FormikTextField from "../../components/Formik/FormikTextField";
import Button from "../../components/Button/Button";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { formik } = useLogin();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container disableGutters maxWidth="sm" className={classes.root}>
      <Typography className={classes.title}>Inicia sesión en INNU</Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormikTextField
          formik={formik}
          valueId="email"
          fullWidth
          type="email"
          label="Correo electrónico"
          placeholder="correo@organizacion.com"
          className="mb-2"
        />
        <FormikTextField
          formik={formik}
          valueId="password"
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Contraseña"
          placeholder={showPassword ? "Contraseña" : "********"}
          className="mb-2"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? (
                  <VisibilityIcon
                    style={{ color: theme.palette.midGrey.main }}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ color: theme.palette.midGrey.main }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          fullWidth
          type="submit"
          disabled={!formik.isValid}
          className="mb-2"
        >
          Ingresar
        </Button>
      </form>
      <Link to="" className={classes.forgot}>
        ¿Olvidaste tu contraseña?
      </Link>

      <Divider className="my-3" style={{ width: "100%" }} />
      <Button fullWidth component={Link} variant="outlined">
        Crear Organización
      </Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      borderRadius: theme.spacing(2, 2, 0, 0),
      background: theme.palette.rose.main,
      padding: theme.spacing(3, 4),
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        borderRadius: theme.spacing(2),
      },
    },
    form: {
      width: "100%",
    },
    title: {
      ...theme.typography.h4,
      marginBottom: theme.spacing(3),
    },
    forgot: {
      ...theme.typography.links,
      color: theme.palette.red.main,
    },
  })
);

export default LoginForm;
