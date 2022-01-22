import React from "react";
import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { useTheme } from "@mui/styles";

export const TabContainer = ({ menuitems }) => {
  const [tabvalue, setTabvalue] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  const handleTabvalue = (e, value) => {
    setTabvalue(value);
  };
  return (
    <Box>
      <Tabs
        value={tabvalue}
        onChange={handleTabvalue}
        TabIndicatorProps={{ style: { background: "cyan" } }}
      >
        {menuitems.map((item, i) => (
          <Tab
            key={item}
            label={
              <span
                className={
                  tabvalue === i ? classes.tabactive : classes.tabinactive
                }
              >
                {item}
              </span>
            }
          ></Tab>
        ))}
      </Tabs>
    </Box>
  );
};
