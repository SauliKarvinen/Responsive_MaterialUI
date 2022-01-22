import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material/";
import { useStyles } from "./styles";

export const DrawerMenu = ({ menuitems }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (e) => {
    /* console.log(e.target);
    if (anchorEl === null) setAnchorEl(e.target);
    else setAnchorEl(null); */

    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Drawer
        /* anchorEl={anchorEl} */
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          style: { position: "relative", top: "65px", width: "30%" },
        }}
      >
        <List>
          {menuitems.map((item) => (
            <ListItemButton>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton style={{ color: "white" }} onClick={handleClick}>
        <Menu></Menu>
      </IconButton>
    </>
  );
};
