/** @format */

import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DatePicker = (props) => {
  const { name, label, value, onChange, ...others } = props;
    const convertToDefaultParameter = (name, value) => ({
      target: {
        name,
        value,
      },
    });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
      
        variant='inline'
        inputVariant='outlined'
        label={label}
        format='dd/MMM/yyy'
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultParameter(name, date))}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
