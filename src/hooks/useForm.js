/** @format */

import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useForm = (initialValues, validateOnChange=false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if(validateOnChange)
      validate({[name] : value})
  };
  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
};

export default useForm;

export const Form = (props) => {
  const classes = useStyles();
  const {children, ...other} = props;
  return <form className={classes.root} {...other}>{props.children}</form>;
};


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
