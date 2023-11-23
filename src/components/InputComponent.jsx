import React from "react";
import { TextField, FormLabel } from "@mui/material";
import { Fragment } from "react";
import { UpdateDynamicFormData } from "../helpers/updateDynamicFormData";

const CustomTextInput = (props) => {
    const {index, value,id, label,errorMsg } = props;
    const[val,setVal] = React.useState(value)
    let payload = UpdateDynamicFormData(null);
    const onchangeHandler =(event) =>{
        const regex = /^[A-Za-z]+$/;
        payload = UpdateDynamicFormData(null);
        payload[index].field.value = event.target.value;
        payload[index].field.errorMsg = event.target.value ? regex.test(event.target.value) ?  '' : "Please Enter String Only" : '';
        UpdateDynamicFormData(payload);
         console.log("7....input",event.target.value,regex.test(event.target.value), payload, UpdateDynamicFormData(payload))
         setVal(event.target.value)
    }
    console.log("9...0",payload)
  return (
    <Fragment>
        <div>
            <FormLabel id="demo-radio-buttons-group-label">{label}<span className="ms-1">:-</span></FormLabel>
          </div>
      <TextField
        key={`txt_${id}`}
        id={`field_${id}`}
        name={`input_${id}`}
        value={val}
        placeholder="Enter name"
        className="df_textField"
        type={"text"}
        onChange={onchangeHandler}
        error={errorMsg ?  true : false}
      />
      <div>
      {payload[index].field.errorMsg ? <span className="text-danger">{payload[index].field.errorMsg}</span> : ""}
      {/* {!val ? <span className="text-danger">Please Enter data</span> : "" } */}
      </div>
      {/* <input {...field} {...props}  className="form-control w-50"/> */}
      {/* <ErrorMessage name={props.name} component="span" className="error" /> */}
    </Fragment>
  );
};

export default CustomTextInput;
