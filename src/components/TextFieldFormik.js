import React, { Component } from 'react';
import { Field, connect } from 'formik';
import { Rifm } from 'rifm';
import { TextField } from '@material-ui/core';

const TextFieldFormik = ({
  format,
  field, // { name, value, onChange, onBlur }
  form: { setFieldValue, touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <Rifm
    format={format}
    refuse={/[^\d_]/gi}
    onChange={val => setFieldValue(field.name, val)}
    value={field.value}
  >
    {({ value, onChange }) => (
      <TextField
        id={field.name}
        name={field.name}
        placeholder="00:00"
        value={field.value}
        label={field.label}
        onChange={onChange}
        style={{ width: 80 }}
      />
    )}
  </Rifm>
);

export default TextFieldFormik;
