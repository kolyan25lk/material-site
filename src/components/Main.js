import * as React from 'react';
import {Container, Grid, Paper, Box, Typography, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()((theme) => ({
    mainFeaturesPost: {
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundOverlay: "rgba(0,0,0, 0.3)"
    },
    mainFeaturesPostContent: {
      position: "relative",
      padding: theme.spacing(6),
      marginTop: theme.spacing(8),
    },
  }))

export default function Main() {
    const { classes } = useStyles();
return (
    
    <Box>
<Paper className={classes.mainFeaturesPost}
style={{ backgroundImage: `url(https://source.unsplash.com/random?city,night)` }}>
<Container fixed>
  <div className={classes.overlay} />
  <Grid container >
    <Grid item md={6}>
      <div className={classes.mainFeaturesPostContent}>
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          gutterBottom
        >
          Web Developer Blog
        </Typography>
        <Typography
          variant="h5"
          color="inherit"
          paragraph
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever
        </Typography>
        <Button variant="contained" color="secondary">Learn more</Button>
      </div>
    </Grid>
  </Grid>
</Container>
</Paper>
<div className={classes.mainContent}>
<Container maxWidth="md">
  <Typography variant="h2" align="center" color="textPrimary" gutterBottom> Web Developer Blog</Typography>
  <Typography variant="h5" align="center" color="textSecondary" paragraph>
    Lorem ipsum dolor sit met consectetur adipisicing elit. 
    Facere atque molestias debitis natus asperiores incidunt 
    odio perspiciatis deleniti corrupti 
    nobis tempore hic distinctio eveniet quaerat,
     veritatis sunt voluptatibus necessitatibus at.
     </Typography>
  <div className={classes.mainButtons}>
    <Grid container spacing={5} justifyContent="center">
      <Grid item>
        <Button variant="contained" color="primary">Start Now</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color="primary">Learn more</Button>
      </Grid>
    </Grid>
  </div>
</Container>
</div>
</Box>
);
}