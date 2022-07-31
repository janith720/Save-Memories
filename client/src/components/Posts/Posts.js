import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from './styles'

export default function Posts({ setCurrentId }) {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts)
  //console.log(posts)
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3} >
         {posts.map((post,key) => (
          <Grid key={key} item xs={12} sm={6}>
              <Post key={key} post={post} setCurrentId={setCurrentId} />
          </Grid>
         ))}
      </Grid>
    )
  );
}
