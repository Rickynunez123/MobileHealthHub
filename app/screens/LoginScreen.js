import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import * as Yup from "yup";

import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/flower-spa-icon.png")}
      />
      <AppForm
        // Initial values
        initialValues={{ email: "", password: "" }}
        // This is the function that get called when the function is submitted
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          //Setting the name
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
        <SubmitButton color="blue" text="white" title="Login" />
        {/* This should be a button  */}
        <AppText style={styles.register}>Register</AppText>

      </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  container: {
    margin: 10,
  },
  register: {
    alignSelf: "center",
    fontSize: 15,
    marginTop: -10

  }
});

export default LoginScreen;
