import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./Register.scss";
function Register() {
  const navigate = useNavigate();
  return (
    <>
      <section className="register">
        <div className="registergeneral">
          <div>
            <p className="registerhead">Register</p>
          </div>

          <div>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                number: "",
                location: "",
              }}
              validationSchema={Yup.object({
                firstname: Yup.string().required("Required"),
                lastname: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
                number: Yup.number().required("Required"),
                location: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                fetch("http://localhost:3000/register/", {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(values),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    navigate("/login");
                  })
                  .catch(function (res) {
                    console.log(res);
                  });
              }}
            >
              <Form>
                <div className="regster">
                  <div className="register1">
                  <div className="registeritems">
                    <label htmlFor="firstname">FirstName</label>
                    <Field name="firstname" type="text" />
                    <ErrorMessage name="firstname" />
                  </div>

                  <div className="registeritems">
                    <label htmlFor="lastname">LastName</label>
                    <Field name="lastname" type="text" />
                    <ErrorMessage name="lastname" />
                  </div>
                  </div>
<div className="register1">
                  <div className="registeritems">
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                  </div>

                  <div className="registeritems">
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                  </div></div>

                 <div className="register1">
                 <div className="registeritems">
                    <label htmlFor="number">Number</label>
                    <Field name="number" type="text" />
                    <ErrorMessage name="number" />
                  </div>

                  <div className="registeritems">
                    <label htmlFor="location">Location</label>
                    <Field name="location" type="text" />
                    <ErrorMessage name="location" />
                  </div>
                </div><button type="submit" className="registerbtn">Submit</button>
                 </div>

                
              </Form>
            </Formik>
          </div>
          <div>
            <p>Do you already have an account?</p>
            <Link className="registertext" to={"/login"}>Login</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
