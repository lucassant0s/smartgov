import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { Value } from "react-powerplug";
import { Rifm } from "rifm";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import CustomExpand from "../components/CustomExpand";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { withFormik, Field, Form, FastField } from "formik";
import ResponsiveModal from "../components/Modal/ResponsiveModal";
import GridItem from "../components/GridItem";
import { timeFormatSym } from "../format";
import CheckboxFormik from "../components/CheckboxFormik";
import TextFieldFormik from "../components/TextFieldFormik";

const CustomHeader = styled.div`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding: 4px 56px 4px 24px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const InnerForm = ({
  onRequestClose,
  otherProps,
  data,
  activeStep,
  handleClickChooseItem,
  handleBack,
  selectedItem,

  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <ResponsiveModal
    isOpen
    onRequestClose
    dialogTitle={
      <div>
        <IconButton onClick={handleBack} aria-label="Back">
          <ArrowBackIcon />
        </IconButton>
        {selectedItem.name}
      </div>
    }
    dialogActions={
      <Fragment>
        <Button onClick={onRequestClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Salvar
        </Button>
      </Fragment>
    }
    {...otherProps}
  >
    <div>
      <div>
        <span style={{ paddingRight: 40 }}>
          <Form>
            <FastField
              format={timeFormatSym}
              label="Início"
              name="start"
              component={TextFieldFormik}
            />
            <span
              style={{
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              até
            </span>
            <FastField
              format={timeFormatSym}
              label="Fim"
              name="end"
              component={TextFieldFormik}
            />

            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Dom"
              value="Dom"
            />
            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Seg"
              value="Seg"
            />
            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Ter"
              value="Ter"
            />
            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Qua"
              value="Qua"
            />
            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Qui"
              value="Qui"
            />
            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Sex"
              value="Sex"
            />
            <FastField
              component={CheckboxFormik}
              name="daysWeek"
              label="Sab"
              value="Sab"
            />
          </Form>
        </span>
      </div>
    </div>
  </ResponsiveModal>
);

const ScheduleForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ start: "", end: "", daysWeek: [] }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    // const errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    // return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */
    }
  ) => {
    props.onRequestClose();
    // LoginToMyApp(values).then(
    //   user => {
    //     setSubmitting(false);
    //     // do whatevs...
    //     // props.updateUser(user)
    //   },
    //   errors => {
    //     setSubmitting(false);
    //     // Maybe even transform your API's errors into the same shape as Formik's!
    //     setErrors(transformMyApiErrors(errors));
    //   }
    // );
  }
})(InnerForm);

export default withMobileDialog()(ScheduleForm);
