/** @format */

import {
  Checkbox as MuiCheckBox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

const CheckBox = (props) => {
  const { name, label, value, onChange } = props;
  const convertToDefaultParameter = (name, value) => ({
      target:{
          name, value
      }
  })
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckBox
            color='primary'
            name={name}
            checked={value}
            onChange={(e) => onChange(convertToDefaultParameter(name, e.target.checked))}
          />
        }
        label={label}
        labelPlacement='end'
      />
    </FormControl>
  );
};

export default CheckBox;
