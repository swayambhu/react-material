/** @format */

import { Button as MuiButton, makeStyles} from "@material-ui/core";

const Button = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton variant={variant || "contained"} color={color || "primary"} size={size || "large"} onClick={onClick} {...other} classes={{root: classes.root}}>
      {text}
    </MuiButton>
  );
};

const useStyles = makeStyles((theme) => ({
    root:{
        margin:theme.spacing(0.5)
    },
}));

export default Button;

