/** @format */

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from "@material-ui/core";
import React from "react";

const RadioGroup = (props) => {
  const { name, label, value, onChange, items } = props;

  const renderedItems = items.map(({ id, title }, index) => (
    <FormControlLabel
      key={index}
      value={id}
      control={<Radio />}
      label={title}
    />
  ));
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {renderedItems}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
