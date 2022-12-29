import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import DogImage from '../api/DogImage/DogImage';
import DadJokes from '../api/Dadjoke/DadJokes';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    name: "Dog Image",
    description: "In this api, you get random images of dogs.",
    element: <DogImage />,
    path: "/DogImage",
  },
  {
    name: "Dad Jokes",
    description: "This API will get you random jokes.",
    element: <DadJokes/>,
    path: "/DadJokes"
  }
];

const theme = createTheme();

export default function Album() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Portfolio Web Frameworks
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Here you can see some fun api's.
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="md" style={{textAlign:"center"}}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={12}>
            <input
              type={"text"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: "100%",
                height: "50px",
                fontSize: "20px",
                padding: "10px",
              }}
            ></input>
            </Grid>
            </Grid>
          </Container>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {cards
              .filter((card) => {
                if (inputValue === "") {
                  return card;
                } else if (
                  card.name.toLowerCase().includes(inputValue.toLowerCase())
                ) {
                  return card;
                }
              })
              .map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      <Typography>{card.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        sx={{
                          display: "flex",
                          alignSelf: "center",
                          margin: "0 auto",
                        }}
                        onClick={(e) => navigate(card.path)}
                      >
                        Watch
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}