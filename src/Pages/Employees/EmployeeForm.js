/** @format */

import { Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../components/Form Controls/Controls";
import useForm, { Form } from "../../hooks/useForm";
import * as employeeService from "../../Services/employeeService";
import validator from "validator";

const EmployeeForm = (props) => {
  const {addOrEdit} = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName ? "" : "This field is Required";
    }
    if ("email" in fieldValues) {
      temp.email = validator.isEmail(fieldValues.email)
        ? ""
        : "Enter valid Email.";
    }
    if ("departmentId" in fieldValues) {
      temp.departmentId =
        fieldValues.departmentId.length !== 0
          ? ""
          : "Please select the department";
    }
    if ("mobile" in fieldValues) {
      temp.mobile =
        fieldValues.mobile.length > 9 && fieldValues.mobile.length < 12
          ? ""
          : "Mobile Number shall be of 10 digits";
    }

    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const { values, handleInputChange, errors, setErrors, resetForm } =
    useForm(
      {
        id: 0,
        fullName: "",
        email: "",
        mobile: "",
        city: "",
        gender: "male",
        departmentId: "",
        hireData: new Date(),
        isPermanent: false,
      },
      true,
      validate,
    );

  

  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controls.Input
            label='Name'
            name='fullName'
            value={values.name}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          <Controls.Input
            label='Mobile No.'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Dropdown
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollections()}
            error={errors.departmentId}
          />

          <Controls.DatePicker
            name='hireData'
            label='Hire Date'
            value={values.hireData}
            onChange={handleInputChange}
          />

          <Controls.CheckBox
    
            name='isPermanent'
            label='Is Permanent?'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            {/* <Button variant="contained" color="primary" size="large">Submit</Button>
             */}
            <Controls.Button text='Submit' type='submit' />
            <Controls.Button
              text='reset'
              color='default'
              type='reset'
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
