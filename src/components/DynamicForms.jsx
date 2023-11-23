import { Field, Form, Formik } from "formik";
import React, { useMemo } from "react";
import { data } from "../constant/DynamicFields";
import CustomTextInput from "./InputComponent";
import CustomCheckBox from "./Checkbox";
import CustomRadioGroup from "./Radio";
import CustomSelect from "./Select";
import _ from "lodash";
import { UpdateDynamicFormData } from "../helpers/updateDynamicFormData";

function DynamicForms() {
  const [rerender, setRerender] = React.useState(false);
  console.log("12....", UpdateDynamicFormData(null),rerender);
  const renderDynamicForm = useMemo(() => {
    if (data) {
      UpdateDynamicFormData(data);
      if(rerender){
        data[3].field.hideOrShow=true;
      }
      return _.map(data, (element, index) => {
        console.log("17...",data)
        if (element?.field && element?.field?.hideOrShow) {
          const dynamicFields = element?.field?.dataType;
          console.log("18....", dynamicFields);
          switch (dynamicFields) {
            case "text":
              return (
                <div>
                  <CustomTextInput
                    key={index}
                    {...element?.field}
                    index={index}
                  />
                </div>
              );
            case "select":
              return (
                <div className="mt-2">
                  <CustomSelect key={index} {...element?.field} index={index} />
                </div>
              );
            case "radio":
              return (
                <div className="mt-2">
                  <CustomRadioGroup
                    key={index}
                    {...element?.field}
                    index={index}
                    setRerender={setRerender}
                  />
                </div>
              );
          }
        }
      });
    }
  },[rerender]);
  return (
    <div className="container-fluid p-3">
      <h2>Registration Form</h2>
      <hr />
      {/* {UpdateDynamicFormData(data)} */}
      {renderDynamicForm}
      <div className="mt-2">
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default DynamicForms;
