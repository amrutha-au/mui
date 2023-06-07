import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
const Post = () => {
  return (
    <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Doggy and kitty"
          subheader="May 30, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://agrilifetoday.tamu.edu/wp-content/uploads/2020/07/AdobeStock_84016419.jpeg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Cats and dogs are the most popular pets in the world, with cats
            being more independent and less demanding than dogs.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post