import { Field, FieldArray, getIn } from "formik";

import * as React from "react";
import {
  Accordion,
  Button,
  Checkbox,
  Dropdown,
  Form,
  Icon,
  Table
} from "semantic-ui-react";
export class SkillsList extends React.Component {
  removeServer = (removeFunction, server) => {
    console.log("removeServer server", removeFunction, server);
    removeFunction(server);
  };

  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,

    } = this.props;
    return (
        <div>
        <FieldArray
          name="skills"
          render={arrayHelpers => (
            <div>
              {values.skills &&
                values.skills.length > 0 &&
                values.skills.map((skill,index) => (
                  <div key={index}>
                        <Form.Input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.skills[index]}
                        name={`skills.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                  </div>
                ))}
 <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add a skill
                  </button>
            </div>
          )}
        />
      </div>
    );
  }
}
