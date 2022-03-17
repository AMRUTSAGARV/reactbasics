import {
  Typography,
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { FormHelperText } from "@material-ui/core";

function Signup() {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "darkcyan" };
  const btnstyle = { margin: "8px 0" };
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    youAre: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    youAre: Yup.string()
      .oneOf(["hotels", "ngo", "customer"], "Required")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Please accept terms & conditions"
    ),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an Account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="E-mail"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />

              <FormControl component="fieldset" style={btnstyle}>
                <FormLabel component="legend">You are :</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-label="youare"
                  name="youare"
                  // name="youare"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="hotels"
                    control={<Radio />}
                    label="Hotels"
                  />
                  <FormControlLabel
                    value="ngo"
                    control={<Radio />}
                    label="NGO"
                  />
                  <FormControlLabel
                    value="customer"
                    control={<Radio />}
                    label="Customer"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="youAre" />
              </FormHelperText>
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions"
              />
              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? "Loading" : "Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Signup;
