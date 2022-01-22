import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "./hooks/useForm";

export const Form = () => {
  const [disabled, setDisabled] = useState(true);
  const [formdata, setFormdata] = useForm();

  useEffect(() => {
    const username = formdata.username;
    const password = formdata.password;

    if (username.length > 0 && password.length > 0) setDisabled(false);
    else setDisabled(true);
  }, [formdata]);

  return (
    <Box m={5} data-testid="inputform">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            label="Username"
            name="username"
            value={formdata.username}
            onChange={setFormdata}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            name="password"
            value={formdata.password}
            onChange={setFormdata}
          ></TextField>
        </Grid>
        <Grid item>
          {disabled ? (
            <Button variant="outlined" disabled>
              Ok
            </Button>
          ) : (
            <Button variant="outlined">Ok</Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
