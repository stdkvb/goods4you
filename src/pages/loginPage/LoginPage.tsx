import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./LoginPage.module.scss";
import Loader from "../../components/loader/Loader";
import { useLogInMutation } from "../../store/api/authApi";
import { useAppDispatch } from "../../store/store";
import { setUser } from "../../store/slices/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [logIn, { isLoading, error, isSuccess, data }] = useLogInMutation();

  const validationSchema = yup.object({
    username: yup.string().required("Enter login"),
    password: yup.string().required("Enter password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      logIn(values).unwrap();
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const token = data.token;
      if (token) {
        dispatch(setUser({ loggedIn: true }));
        localStorage.setItem("authToken", token);
        navigate("/");
      }
      dispatch(setUser({ id: data.id }));
    }
  }, [isSuccess, data, dispatch, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Sign In | Goods4you</title>
      </Helmet>
      <section
        className={`container ${styles.login}`}
        aria-labelledby="loginPageTitle"
      >
        <div className={styles.wrapper}>
          <h1 id="loginPageTitle">Sign In</h1>
          <form
            className={styles.form}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <div className="input">
              <label htmlFor="username" className="hidden">
                login
              </label>
              <input
                name="username"
                placeholder="Login"
                required
                type="text"
                value={formik.values["username"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>
                {formik.touched["username"] && formik.errors["username"]}
              </span>
            </div>
            <div className="input">
              <label htmlFor="password" className="hidden">
                password
              </label>
              <input
                name="password"
                placeholder="Password"
                required
                type="password"
                value={formik.values["password"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>
                {formik.touched["password"] && formik.errors["password"]}
              </span>
            </div>
            <button className="btn" type="submit">
              Sign in
            </button>

            {error && (
              <span className={styles.message}>Error occurred, try again.</span>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
