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
                      <h1>Bjarne Van Looke</h1>
                      <h3>Portfolio voor Web Frameworks</h3>
                      <p>Hello and welcome to my portfolio page. My name is Bjarne Van Looke and I am a Programming student at AP in Antwerp.
                        I like to go cycling and game in my free time. On this portfolio you will be albe to view what I have made in my second year durring
                        the cources of Web Frameworks.
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
            <Button variant="contained" onClick={() => navigate("/Portfolio")}>
              Take a look at the portfolio
            </Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default Home;

