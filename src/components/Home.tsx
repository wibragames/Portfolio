import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  ImageListItem,
  Grid,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Portfolio - Bjarne Van Looke
          </Typography>
          <Grid container spacing={20}>
            <Grid item xs={12} sm={8}>
              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                paragraph
              >
                <div>
                  <div>
                    <div>
                      <h3>Who am I?</h3>
                      <p>Hello and welcome to my portfolio page. My name is Bjarne Van Looke and I am a Programming student at AP in Antwerp.
                        I like to go cycling and game in my free time. On this portfolio you can watch some things I made durring Web Frameworks.
                        You can also follow what I do at my internship at Inuits. On the about page you can find some information about the company.
                      </p>
                    </div>
                  </div>
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImageListItem
                sx={{
                  bgcolor: "background.paper",
                  pt: 8,
                  pb: 6,
                  width: 200,
                }}
              >
                <img
                  src={"./Portfoliopic.jpg"}
                  alt={"My Picture"}
                  loading="lazy"
                  style={{ borderRadius: "70%" }}
                />
              </ImageListItem>
            </Grid>
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={() => navigate("/About")}>
              About page Inuits
            </Button>
            <Button variant="contained" onClick={() => navigate("/Portfolio")}>
              Portfolio
            </Button>
            <Button variant="contained" onClick={() => navigate("/Blog")}>
              Blog internship
            </Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default Home;

