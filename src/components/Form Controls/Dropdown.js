/** @format */

import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";

const Dropdown = (props) => {
  const { name, value, label,error=null, onChange, options } = props;
  const renderedOptions = options.map(({id, title}) => (
    <MenuItem key={id} value={id}>{title}</MenuItem>
  ))
  return (
    <FormControl
      variant='outlined'
      {...(error && { error: true})}
    >
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} value={value} onChange={onChange}>
        <MenuItem value=''>None</MenuItem>
        {renderedOptions}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;
