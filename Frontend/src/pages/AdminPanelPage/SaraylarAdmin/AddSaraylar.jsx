import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function AddSaraylar() {
  const navigate = useNavigate();

  function navigateSaraylar() {
    navigate("/admin/saraylar");
  }
  return (
    <>
      <Formik
        initialValues={{
          image: "",
          location: "",
          title: "",
          tutum: "",
          price: "",
        }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          location: Yup.string().required("Required"),
          tutum: Yup.number().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            async function AddProductsSaraylar() {
              const res = await fetch("http://localhost:3000/saraylar", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(values),
              });
              const data = await res.json();
            }
            AddProductsSaraylar();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="location">location</label>
          <Field name="location" type="text" />
          <ErrorMessage name="location" />

          <label htmlFor="title">title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="tutum">tutum</label>
          <Field name="tutum" type="text" />
          <ErrorMessage name="tutum" />

          <label htmlFor="price">price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <button type="submit" onClick={() => navigateSaraylar()}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default AddSaraylar;
