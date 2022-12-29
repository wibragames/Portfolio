import { Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <Typography variant="h3" component="h3">Thank you for your message</Typography><br/>
      <Typography variant="body1">
        Dear
        <br />
        <br />
        Thank you for filling out my contact form. I will reach out as soon as I see this.
        <br />
        <br />
        Best regards
        <br />
        Bjarne Van Looke
      </Typography><br/>
      <NavLink to={"/"} style={{textDecoration: "none"}}>
        <Button title="Back to the homepage" variant="contained">
          Back to the homepage
        </Button>
      </NavLink>
    </>
  );
};

export default Confirmation;
