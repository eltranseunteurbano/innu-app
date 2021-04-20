import React from "react";
import {
  Drawer,
  IconButton,
  Box,
  MenuList,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Collapse,
} from "@material-ui/core";
import { makeStyles, createStyles, darken } from "@material-ui/core/styles";
import {
  CloseRounded as CloseRoundedIcon,
  ExpandMoreRounded as ExpandMoreRoundedIcon,
} from "@material-ui/icons";
import cn from "classnames";
import Logo from "../../assets/icons/Logo";
import { APP, QUIZ, APP_DETAILS } from "../../Routes/Routes";
import { useHistory } from "react-router";

const DrawerMenu = ({ open, onClose }) => {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState("Dashboard");

  const onNavigation = (route) => () => {
    history.push(route);
    onClose();
  };

  const onChangeAccordion = (accordion) => () => {
    setExpanded(accordion);
  };

  const user = { rol: "gestor" };

  const ItemsDrawer = [
    {
      title: "Dashboard",
      items: [
        { name: "Dashboard general", route: APP },
        { name: "Dashboard detallado", route: `${APP}${APP_DETAILS}` },
      ],
      roles: ["colaborador", "gestor", "administrativo"],
    },
    {
      title: "Cuestionario",
      items: [
        { name: "Resolver cuestionario", route: `${APP}${QUIZ}` },
      ],
      roles: ["colaborador", "gestor"],
    },
  ];

  return (
    <Drawer
      className={classes.root}
      classes={{ paper: classes.paper }}
      ModalProps={{ BackdropProps: { classes: { root: classes.modal } } }}
      open={open}
      anchor="left"
      onClose={onClose}
    >
      <Box className={classes.header}>
        <IconButton className={cn(classes.btnResp, "mr-1")} onClick={onClose}>
          <CloseRoundedIcon />
        </IconButton>
        <Logo className={classes.navLogo} />
      </Box>
      {ItemsDrawer.map(({ title, items, roles, ...others }, i) => {
        const isShow = !!roles.find((rol) => rol === user.rol);
        return (
          <Collapse in={isShow} key={i} >
            <Accordion
              square
              expanded={expanded === title}
              onChange={onChangeAccordion(title)}
              classes={{ root: classes.accordion, expanded: classes.expanded }}
              {...others}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon />}
                classes={{
                  root: classes.accordionSummary,
                  expanded: classes.accordionSummaryExpanded,
                  content: classes.accordionSummaryContent,
                  expandIcon: classes.accordionSummaryIcon,
                }}
              >
                <Typography
                  className={cn(
                    classes.accordionTitle,
                    expanded === title && classes.accordionTitleExpand
                  )}
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                classes={{
                  root: classes.detailsRoot,
                }}
              >
                <MenuList className={classes.menuList}>
                  {items.map(({ name, route, ...others }, i) => (
                    <MenuItem
                      className={cn(
                        classes.menuItem,
                        history.location.pathname === route &&
                          classes.menuItemSelected
                      )}
                      onClick={onNavigation(route)}
                      key={name}
                      {...others}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </AccordionDetails>
            </Accordion>
          </Collapse>
        );
      })}
    </Drawer>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexShrink: 0,
    },
    modal: {
      backgroundColor: "transparent",
    },
    paper: {
      width: "80%",
      maxWidth: 400,
      backgroundColor: theme.palette.clearGrey.main,
      border: "none",
      padding: theme.spacing(2, 0),
      boxSizing: "border-box",
      boxShadow: "0px 2px 30px rgba(45, 117, 225, 0.23)",
    },
    btnResp: {
      color: theme.palette.red.main,
    },
    accordion: {
      backgroundColor: theme.palette.clearGrey.main,
      boxShadow: "none",
    },
    expanded: {
      margin: "0 !important",
    },
    accordionSummary: {
      borderBottom: `solid 1px ${theme.palette.midGrey.main}40`,
      transition: "all .4s",
      backgroundColor: theme.palette.clearGrey.main,
      "&:hover": {
        backgroundColor: darken(theme.palette.clearGrey.main, 0.05),
      },
      "&.Mui-expanded": {
        minHeight: theme.spacing(6),
        height: theme.spacing(6),
        borderBottom: "none",
        backgroundColor: theme.palette.deepGrey.main,
        boxShadow: "0 1px 3px rgb(0 0 0 / 20%)",
      },
    },
    accordionSummaryContent: {
      ...theme.typography.h4,
      fontWeight: 600,
      "&.Mui-expanded": {
        margin: 0,
      },
    },
    accordionSummaryIcon: {
      "&.Mui-expanded": {
        color: theme.palette.white.main,
      },
    },
    accordionTitle: {
      ...theme.typography.subtitle1,
      fontWeight: 600,
    },
    accordionTitleExpand: {
      color: theme.palette.white.main,
    },
    detailsRoot: {
      backgroundColor: `${theme.palette.white.main}80`,
      borderBottom: `solid 1px ${theme.palette.midGrey.main}40`,
      padding: 0,
    },
    menuList: {
      width: "100%",
      padding: 0,
    },
    menuItem: {
      padding: theme.spacing(2, 3),
      boxSizing: "border-box",
      borderBottom: `solid 1px ${theme.palette.midGrey.main}20`,
      ...theme.typography.body1,
    },
    menuItemSelected: {
      backgroundColor: `${theme.palette.sky.main}!important`,
      fontWeight: 600,
      color: theme.palette.blue.main,
    },
  })
);

export default DrawerMenu;
