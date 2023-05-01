import React from "react";
// with this you will be able to pass this objects from LoginScreen
// {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (

import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        // This will ensure that all the props and the ones that are commented are available
        {...otherProps}
        //   autoCapitalize="none"
        //   autoCorrect={false}
        //   icon="email"
        //   keyboardType="email-address"
        // It will render the error message only if the field has being touch
        onBlur={() => setFieldTouched(name)}
        // We use email here because it the property from the initial values
        onChangeText={handleChange(name)}
        //   placeholder="Email"
        //   textContentType="emailAddress"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
