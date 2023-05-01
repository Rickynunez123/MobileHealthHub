import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      // Initial values
      initialValues={initialValues}
      // This is the function that get called when the function is submitted
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        // We add the fragment and inside the fragment we are going to render our children
        <>{children}</>
      )}
    </Formik>
  );
}

export default AppForm;
