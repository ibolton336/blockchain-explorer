import { FormikProps, withFormik } from "formik";
import * as React from "react";
import { Button, Checkbox, Form, Label } from "semantic-ui-react";
import {SkillsList} from "../SkllsList";
import * as Yup from "yup";
import "./ResumeForm.css";
const options = [
  { key: 0, text: 'High School', value: 'hs' },
  { key: 1, text: 'Associates', value: 'associates' },
  { key: 2, text: 'Bachelors', value: 'bachelors' },
  { key: 3, text: 'Masters', value: 'masters' }
]

const InnerForm = (props) => {
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
    
  } = props;
  return (
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleChange}
          label="Name"
          name="name"
          value={values.name}
          required={errors.name && touched.name}
        />
        <Form.Select fluid label='Degree' 
        name="degree"
          onChange={handleChange}
        options={options} placeholder='Degree' values={values.degree}
          required={errors.degree && touched.degree}

        />
        <Form.TextArea label='Biography' placeholder='Tell us more about you...' 
          onChange={handleChange}
        name="biography"
        values={values.biography}
        required={errors.biography && touched.biography} 
        />
        <SkillsList {...props}/>
        <Form.Field
        >
          <Checkbox 
          onChange={handleChange}
        value={values.elligibleUS} 
        name="elligibleUS"
          required={errors.elligibleUS && touched.elligibleUS}
          
          label='Are you eligible to work in the US?' />
        </Form.Field>
        <Button
          size="large"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Form>
  );
};

const withSemanticUIFormik = props => WrappedComponent => {
  return withFormik(props)(
    class extends React.Component{
      handleBlur = (e, data) => {
        if (e.target && e.target.name) {
          this.props.setFieldValue(e.target.name, e.target.value);
          this.props.setFieldTouched(e.target.name);
        }
      };
      handleChange = (e, data) => {
        if(data.type === "checkbox"){
          this.props.setFieldValue(data.name, data.checked)
        }else{
        if (data && data.value) {
          this.props.setFieldValue(data.name, data.value);
          }
        }
      };

      render() {
        return (
          <WrappedComponent
            {...this.props}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
          />
        );
      }
    }
  );
};

export const ResumeForm = withSemanticUIFormik({
  mapPropsToValues: props => (
    {
    name: props.userdata.name || "",
    degree: props.userdata.degree || "",
    biography: props.userdata.biography|| "",
    skills: props.userdata.skills || [],
    elligibleUS: props.userdata.elligibleUS || false,
  }
),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    degree: Yup.string().required("is required!"),
    skills: Yup.array()
          .required("Skills field required")
          // .of(Yup.string().required("Skills name required"))
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.onUpdateData(values);
    setSubmitting(false);
  },
  displayName: "BasicForm" // helps with React DevTools
})(InnerForm);
