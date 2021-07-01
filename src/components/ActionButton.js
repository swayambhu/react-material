/** @format */

import { Button, makeStyles } from "@material-ui/core";

const ActionButton = (props) => {
  const { color, children, onClick } = props;
  const classes = useStyles();
  return <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>{children}</Button>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiButton-label": {
        color: "#fff",
      },
    },
  },
  primary: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiButton-label": {
        color: "#fff",
      },
    },
  },
}));
export default ActionButton;
