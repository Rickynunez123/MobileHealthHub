/*
Here is the screen for the admin to create a new doctor 
The doctor should send all his credentials with form that will be created
in the future and after that the admin will create the profile of the doctor

Name
doctorType
Biography 
specialities? ->  reproductive endocrinology and infertility, maternal fetal medicine, and female pelvic medicine and reconstructive surgery

Prices, but depending on what the user wants
*/

import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Yup from "yup";

import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/forms";

import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  doctorType: Yup.object().required().label("DoctorType"),
  biography: Yup.string().required().label("Biography"),
  specialties: Yup.object().required().label("Specialties"),
});

const categories = [
  {
    label: "Gynecologist",
    value: 1,
    subSpecialties: [
      { label: "Obstetrics", value: 11 },
      { label: "Reproductive Endocrinology", value: 12 },
      { label: "Urogynecology", value: 13 },
    ],
  },
  {
    label: "Dermatologist",
    value: 2,
    subSpecialties: [
      { label: "Cosmetic Dermatology", value: 21 },
      { label: "Pediatric Dermatology", value: 22 },
      { label: "Mohs Surgery", value: 23 },
    ],
  },
  {
    label: "Cardiologist",
    value: 3,
    subSpecialties: [
      { label: "Interventional Cardiology", value: 31 },
      { label: "Electrophysiology", value: 32 },
      { label: "Heart Failure/Transplant Cardiology", value: 33 },
    ],
  },
  {
    label: "Pediatrician",
    value: 4,
    subSpecialties: [
      { label: "Neonatal-Perinatal Medicine", value: 41 },
      { label: "Pediatric Cardiology", value: 42 },
      { label: "Pediatric Emergency Medicine", value: 43 },
    ],
  },
  {
    label: "Oncologist",
    value: 5,
    subSpecialties: [
      { label: "Hematology", value: 51 },
      { label: "Radiation Oncology", value: 52 },
      { label: "Surgical Oncology", value: 53 },
    ],
  },
  {
    label: "Neurologist",
    value: 6,
    subSpecialties: [
      { label: "Clinical Neurophysiology", value: 61 },
      { label: "Neurocritical Care", value: 62 },
      { label: "Neuromuscular Medicine", value: 63 },
    ],
  },
  {
    label: "Psychiatrist",
    value: 7,
    subSpecialties: [
      { label: "Addiction Psychiatry", value: 71 },
      { label: "Forensic Psychiatry", value: 72 },
      { label: "Geriatric Psychiatry", value: 73 },
    ],
  },
  {
    label: "Ophthalmologist",
    value: 8,
    subSpecialties: [
      { label: "Cornea/External Disease", value: 81 },
      { label: "Glaucoma", value: 82 },
      { label: "Pediatric Ophthalmology", value: 83 },
    ],
  },
  {
    label: "Orthopedist",
    value: 9,
    subSpecialties: [
      { label: "Hand Surgery", value: 91 },
      { label: "Pediatric Orthopedics", value: 92 },
      { label: "Sports Medicine", value: 93 },
    ],
  },
  {
    label: "ENT Specialist",
    value: 10,
    subSpecialties: [
      { label: "Head and Neck Surgery", value: 101 },
      { label: "Laryngology", value: 102 },
      { label: "Otology/Neurotology", value: 103 },
    ],
  },
];

function ListingEditScreen(props) {
  const [category, setCategory] = useState(categories);
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        // Initial values
        initialValues={{
          Name: "",
          DoctorType: null,
          Biography: "",
          Specialties: null,
        }}
        // This is the function that get called when the function is submitted
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" placeholder="Name" />

        <AppPicker
          name="doctorType"
          placeholder="DoctorType"
          onSelectItem={(item) => setCategory(item)}
          selectedItem={category}
          items={categories}
        />
        <AppFormField name="biography" placeholder="Biography" />
        <AppPicker
          name="specialties"
          placeholder="Specialties"
          selectedItem={category}
          onSelectItem={(item) => setCategory(item ? item : "Specialties")}
          items={categories}
          icon="apps"
        />
        <SubmitButton color="blue" text="white" title="Post" />
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
    marginTop: -10,
  },
});

export default ListingEditScreen;
