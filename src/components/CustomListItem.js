import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const CustomListItem = ({ href, icon: Icon, primary, disablePadding }) => {
  return (
    <ListItem disablePadding={disablePadding}>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
