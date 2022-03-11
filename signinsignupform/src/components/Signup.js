import {
  Typography,
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Signup() {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "darkcyan" };
  const btnstyle = { margin: "8px 0" };
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
        <form>
          <TextField
            fullWidth
            label="E-mail/Phone"
            placeholder="Enter your email or phone"
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <TextField fullWidth label="Confirm Password" />

          <FormControl component="fieldset" style={btnstyle}>
            <FormLabel component="legend">Name</FormLabel>
            <RadioGroup
              aria-label="name"
              name="name"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="restuarant"
                control={<Radio />}
                label="Hotels"
              />
              <FormControlLabel value="ngo" control={<Radio />} label="NGO" />
              <FormControlLabel
                value="customer"
                control={<Radio />}
                label="Customer"
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Signup;
