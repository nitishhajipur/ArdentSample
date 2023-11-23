// import { ErrorMessage, useField } from "formik"
import { FormControlLabel } from "@mui/material";
import { Fragment } from "react";

 const CustomCheckBox = (props) => {
    // const [field] = useField(props)

    return (
        <Fragment>
            <FormControlLabel
            key={`checkbox_`}
            className="df_checkbox"
             />
        </Fragment>
        // <label className="label_check">
        //     <input type="checkbox" {...field} {...props} className="form-check-input me-2"/>
        //     <span>{props.label}</span>
        //     <ErrorMessage name={props.name} component="span" className="error" />
        // </label>
    )
}
export default CustomCheckBox;