
import { FormControl, Select, FormLabel } from "@mui/material";
import { Fragment } from "react";

const CustomSelect = (props) => {
  const { options, index, value,id, label} = props;
  console.log("7....",options)
  return (
    <Fragment>
      <div>
            <FormLabel id="demo-radio-buttons-group-label">{label}<span className="ms-1">:-</span></FormLabel>
          </div>
      <FormControl className="field select_field">
        <Select native 
        id={`field_${id}`} 
        name={`select_${id}`} 
        className="df_select">
          {options?.map((item) => (
           <option key={item.id} value={item.response} >{item.response}</option>
          ))}
        </Select>
      </FormControl>
    </Fragment>
    // <>
    //   <div>
    //     <label htmlFor={props.name || props.id}> {label} </label>

    //     <select {...field} {...props} className="form-select w-50">
    //       <option value="">--- Select ---</option>

    //       {options.map(({ desc, value }) => (
    //         <option value={value} key={value}>
    //           {desc}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //   <ErrorMessage name={props.name} component="span" className="error" />
    // </>
  );
};
export default CustomSelect;
