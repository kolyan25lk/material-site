import * as React from 'react';
import '../App.css';
import { Card, CardActions, CardContent, CardMedia, Container, Grid,Typography,Button } from '@mui/material';
import LayerIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
      cardMedia: {
      paddingTop:"56.25%"
    },
    cardContent: {
      flexGrow: 1,
    },
    cardGrid: {
      marginTop: theme.spacing(4),
    },
  }))

const cards = [1,2,3,4,5,6,7,8,9];

export default function BlogPost() {
    const { classes } = useStyles();

return (
<Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                   <CardMedia
                   className={classes.cardMedia}
                   image="https://source.unsplash.com/random?city,night"
                   title="Image title"                                      
                   />
                   <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Blog post. Web developer blog.Web developer blog.Web developer blog.Blog post
                    </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayerIcon />
                      <PlayCircleFilledIcon />
                      </CardActions>                     
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        );
            }