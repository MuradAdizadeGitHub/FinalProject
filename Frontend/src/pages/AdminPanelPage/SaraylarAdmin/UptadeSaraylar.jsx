import React from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
function UptadeSaraylar() {
  useEffect(() => {
    datas();
  }, []);

  const [mydata, setmydata] = useState(null);

  const { id } = useParams();
  async function getAllsaraylar() {
    const res = await fetch("http://localhost:3000/saraylar/" + id);
    const data = await res.json();
    return data;
  }

  async function datas() {
    const dataByid = await getAllsaraylar(id);
    setmydata(dataByid);
  }

  return (
    <>
      <Helmet>
        <title>Saraylar Uptade Page</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWJDZV3t91JPg_6M7rFojFC-lGzpyGW9XxKxJcMIGuw&s"
        />
      </Helmet>
      {mydata && (
        <Formik
          initialValues={{
            image: mydata.image,
            location: mydata.location,
            title: mydata.title,
            tutum: mydata.tutum,
            price: mydata.price,
          }}
          validationSchema={Yup.object({
            image: Yup.string().required("Required"),
            location: Yup.string().required("Required"),
            title: Yup.string().required("Required"),
            tutum: Yup.number().required("Required"),
            price: Yup.number().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              fetch("http://localhost:3000/saraylar/" + id, {
                method: "put",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                  image: values.image,
                  location: values.location,
                  title: values.title,
                  tutum: values.tutum,
                  price: values.price,
                }),
              });
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

            <button type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
}

export default UptadeSaraylar;
