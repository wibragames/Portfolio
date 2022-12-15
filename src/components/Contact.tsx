import React from 'react';
import Container from '@mui/material/Container';
import { Box, Button, Grid, TextField } from '@mui/material';

export default function Contact(props: any) {
  const content = {
    'header': 'Contact Me',
    'description': 'If you have any questions, you can ask them right here.',
    'terms': 'I agree to the terms of use and privacy policy.',
    'primary-action': 'Submit',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="sm">
          <Box>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth autoComplete="fname" name="firstName" id="firstName" label="First name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth name="lastName" id="lastName" label="Last name" autoComplete="lname" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" required fullWidth name="email" id="email" label="Email address" autoComplete="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" required multiline rows={5} fullWidth autoComplete="message" name="message" id="message" label="Message" />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button type="submit" fullWidth variant="contained" color="primary">
                  {content['primary-action']}
                </Button>
              </Box>
            </form>
          </Box>
      </Container>
    </section>
  );
}