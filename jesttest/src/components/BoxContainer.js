import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

export const BoxContainer = () => {
  const classes = useStyles();

  const props = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  };
  return (
    <Box mt={2}>
      <Grid
        container
        className={classes.container}
        /* direction={{ xs: "column", sm: "row" }} */
        rowGap={1}
        spacing={{ sm: 3 }}
      >
        <Grid item {...props}>
          <Box className={classes.boxlg}>
            <Typography>1</Typography>
          </Box>
        </Grid>
        <Grid item {...props}>
          <Box className={classes.boxlg}>
            <Typography>2</Typography>
          </Box>
        </Grid>
        <Grid item {...props}>
          <Box className={classes.boxlg}>
            <Typography>3</Typography>
          </Box>
        </Grid>
        <Grid item {...props}>
          <Box className={classes.boxlg}>
            <Typography>4</Typography>
          </Box>
        </Grid>
        <Grid item {...props}>
          <Box className={classes.boxlg}>
            <Typography>5</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
