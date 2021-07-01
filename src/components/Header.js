/** @format */

import { Badge, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from '@material-ui/icons/Search';

import React from "react";

const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder='Search topic'
              startAdornment={<SearchIcon fontSize='small' />}
            />
          </Grid>
          <Grid item sm />
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutlineIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        transform: "translateZ(0)"
    },

    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        border: "1px solid #ccc", 
        borderRadius: "8px",
        '&:hover':{
            backgroundColor: "#f2f2f2",
        }
    },

})