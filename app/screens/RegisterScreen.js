import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        // Initial values
        initialValues={{ email: "", password: "", name: "" }}
        // This is the function that get called when the function is submitted
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          keyboardType="Password"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton color="blue" text="white" title="Register" />
      </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default RegisterScreen;
