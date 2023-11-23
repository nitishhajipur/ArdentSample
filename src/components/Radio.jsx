import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React,{ Fragment } from "react";
import { UpdateDynamicFormData } from "../helpers/updateDynamicFormData";

const CustomRadioGroup = (props) => {
  const { options, index, value, label,setRerender } = props;
  const [val,setVal] = React.useState(value)

  let payload = UpdateDynamicFormData(null);

  const onchangehandler = (event) => {
    payload = UpdateDynamicFormData(null);
    payload[index].field.value = event.target.value;
    setVal(event.target.value);
    console.log("15...", event.target.value)
    if(event.target.value === 'Others'){
        payload[index+1].field.hideOrShow = true
        setRerender(true);
    }
    console.log("raio onchange", payload);
    UpdateDynamicFormData(payload)
  };
  return (
    <Fragment>
      <FormControl>
        <div className="">
          <div>
            <FormLabel id="demo-radio-buttons-group-label">{label}<span className="ms-1">:-</span></FormLabel>
          </div>
          <RadioGroup
            value={value}
            name="radio-buttons-group"
            className="df_radioGroup"
            onChange={onchangehandler}
          >
            <div>
              {options?.map((option) => {
                return (
                  <FormControlLabel
                    key={`radio_${option.id}`}
                    name="radioName"
                    id={`field_${option.id}`}
                    value={option.response}
                    control={<Radio />}
                    checked={option.response === val ? true : false}
                    label={option.response}
                  />
                );
              })}
            </div>
          </RadioGroup>
        </div>
      </FormControl>
      {/* <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div>
            {options?.map((option) => {
              return (
                <FormControlLabel
                  key={`radio_${option.id}`}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              );
            })}
          </div>
        </RadioGroup>
      </FormControl> */}
    </Fragment>
  );
};
export default CustomRadioGroup;
