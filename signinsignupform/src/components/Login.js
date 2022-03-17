import React from "react";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Avatar,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login({ handleChange }) {
  const paperStyle = {
    padding: 20,
    height: "56.5vh",
    width: 300,
    margin: "0 auto",
  };

  const avatarStyle = { backgroundColor: "darkcyan" };
  const btnstyle = { margin: "8px 0" }; //which helped sign in button to come down a little and aligned perfectly
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    console.log(values);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockSharpIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="email"
                name="email"
                placeholder="Enter email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember Me"
              />
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
                style={btnstyle}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>

              {console.log(props)}
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography>
          Don't have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;

// by giving Field as={TextField} we are saying to formik that we are using material ui
