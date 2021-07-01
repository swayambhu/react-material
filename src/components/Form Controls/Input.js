import { TextField } from '@material-ui/core';
import React from 'react'

const Input = (props) => {
    const {name, label, value, error=null, onChange, ...others} = props;
    return (
      <TextField
        variant='outlined'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...others}
        {...(error && { error: true, helperText: error })}
      />
    );
}
 
export default Input;