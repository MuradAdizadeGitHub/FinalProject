import React, { useContext } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../context/Auth/AuthProvider";
function Login() {
  const { settoken, setdecoded } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="logingeneral">
            <div className="leftlogin">
              <div className="loginhead">
                <p>Log in</p>
              </div>

              <div>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    password: Yup.string().required("Required"),
                  })}
                  onSubmit={(values) => {
                    fetch("http://localhost:3000/login/", {
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      method: "POST",
                      body: JSON.stringify(values),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        const tokenDecoded = jwtDecode(data.token);

                        console.log(tokenDecoded);
                        Cookies.set("token", data.token, { expires: 1 });
                        settoken(data.token);
                        setdecoded(tokenDecoded);
                        navigate("/");
                      })
                      .catch(function (res) {
                        console.log(res);
                      });
                  }}
                >
                  <Form>
                    <div className="emailpasswordgeneral">
                      <div className="emailpassword">
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" />
                      </div>
                      <button type="submit" className="submit">Submit</button>
                      <div>
                        <p>Don't have an account yet?  <Link className="registertext" to={"/Register"}> Register </Link></p>
                       
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>

            <div className="rightlogin">
              <img className="murad" src="https://www.joshuadwain.com/wp-content/uploads/2022/04/the-breakers-069-wedding-photographer-joshua-dwain-black-west-palm-beach.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
