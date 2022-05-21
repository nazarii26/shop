import "./App.css";
import React from "react";
import List from "./ui/List";
import Form from "./ui/Form";

import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const items = useSelector((state) => state.itemsList.items);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Form />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Cart list</Typography>

          <List items={items} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
