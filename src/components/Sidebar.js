import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import {
  AccountCircle,
  DarkMode,
  GridView,
  Groups,
  Home,
  Layers,
  People,
  Settings,
  Storefront,
} from "@mui/icons-material";
import CustomListItem from "./CustomListItem";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          <CustomListItem
            href="#home"
            icon={Home}
            primary="Home"
            disablePadding
          />
          <CustomListItem
            href="#dashboard"
            icon={GridView}
            primary="Dashboard"
            disablePadding
          />
          <CustomListItem
            href="#pages"
            icon={Layers}
            primary="Pages"
            disablePadding
          />
          <CustomListItem
            href="#groups"
            icon={Groups}
            primary="Groups"
            disablePadding
          />
          <CustomListItem
            href="#marketplace"
            icon={Storefront}
            primary="Marketplace"
            disablePadding
          />
          <CustomListItem
            href="#friends"
            icon={People}
            primary="Friends"
            disablePadding
          />
          <CustomListItem
            href="#settings"
            icon={Settings}
            primary="Settings"
            disablePadding
          />
          <CustomListItem
            href="#profile"
            icon={AccountCircle}
            primary="Profile"
            disablePadding
          />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#change-mode">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>

              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
