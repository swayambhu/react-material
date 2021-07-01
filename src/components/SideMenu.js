/** @format */

import React from "react";
import { makeStyles } from "@material-ui/styles";

const SideMenu = () => {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
};

export default SideMenu;

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "240px",
    height: "100%",
    backgroundColor: "#253053",
  },
});
