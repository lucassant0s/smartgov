import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxFormik = ({
  value,
  label,
  field, // { name, value, onChange, onBlur }
  form,
  ...props
}) => {
  const formValues = form.values[field.name].slice(0);
  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          id={field.name}
          name={field.name}
          checked={formValues.includes(value)}
          onChange={e => {
            if (formValues.includes(value)) {
              const nextValue = field.value.filter(
                fieldValue => fieldValue !== value
              );
              form.setFieldValue(field.name, nextValue);
            } else {
              const nextValue = formValues.concat(value);
              form.setFieldValue(field.name, nextValue);
            }
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckboxFormik;
