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
import Quiz from './examples/QuizApp/QuizApp';
import Pokemon from './examples/Pokemon/Pokemon'
import { useNavigate } from 'react-router-dom';
import ToDo from './examples/To-Do/ToDo';
import LocalStorage from './examples/LocalStorage/LocalStorage';
import Interval from './examples/Inteval/Interval';
import ShoppingList from './examples/ShoppingList/ShoppingList';
import Slots from './examples/Slots/Slots';
import TicTacToe from './examples/TicTacToe/TicTacToe';
import ColorPicker from './examples/ColorPicker/ColorPicker';


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
    name: "Quiz",
    description: "This is a quiz we made. Try your best to know it all.",
    element: <Quiz />,
    path: "/Quiz",
  },
  {
    name: "Pokemon",
    description: "This app is a pokedex.",
    element: <Pokemon />,
    path: "/Pokemon"
  },
  {
    name: "To Do",
    description: "In this app you can make your own to do list.",
    element: <ToDo />,
    path: "/ToDo"
  },
  {
    name: "Local Storage",
    description: "This is an app to store things on your local device.",
    element: <LocalStorage />,
    path: "/LocalStorage"
  },
  {
    name: "Interval",
    description: "This is an interval",
    element: <Interval />,
    path: "/Interval"
  },
  {
    name: "Shopping List",
    description: "This app will help you to make a shopping list.",
    element: <ShoppingList />,
    path: "/ShoppingList"
  },
  {
    name: "Slots",
    description: "Here you can use a slot machine. Lets see if you can Win!",
    element: <Slots />,
    path: "/Slots"
  },
  {
    name: "TicTacToe",
    description: "Try playing Tic Tac Toe against someone. Lets see who will win.",
    element: <TicTacToe />,
    path: "/TicTacToe"
  },
  {
    name: "Color Picker",
    description: "This ap will let you choose a color from a panel.",
    element: <ColorPicker/>,
    path: "/ColorPicker"
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
              Here you can see the things I made during this lesson.
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
          <Grid container spacing={4}>
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