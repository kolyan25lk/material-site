import * as React from 'react';
import '../App.css';
import { makeStyles } from 'tss-react/mui';
import {Container, Link, Typography, Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const useStyles = makeStyles()((theme) => ({
    root: {
      flexGrow: 1
    },
  }))


export default function Footer() {
    const { classes } = useStyles();
    const [value, setValue] = React.useState("recents")

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
<Box>
<Typography variant="h6" align="center" gutterBottom> </Typography>
<BottomNavigation 
value={value} 
onChange={handleChange} 
className={classes.root}
>
  <BottomNavigationAction 
  label="Recents"
  value="resents"
  icon={<RestoreIcon />}
  /> 
            <BottomNavigationAction 
  label="Favorites"
  value="favorites"
  icon={<FavoriteIcon />}
  /> 
  <BottomNavigationAction 
  label="Nearby"
  value="nearby"
  icon={<LocationOnIcon />}
  /> 
  <BottomNavigationAction 
  label="Folder"
  value="folder"
  icon={<FolderIcon />}
  /> 

</BottomNavigation>
<Typography align="center" color="textSecondary" component="p" variant="subtitle1">
  Web Developer Blog React js Material Ui site for authors Nik_Dov         
</Typography>
<Container align="center">
<Link href="https://t.me/nik_dov" underline="none"> {'My Telegram'}  </Link>
</Container>
<Container  align="center">
<Link href="https://kolyan25lk.github.io/Resume-Nik_Dov/" underline="none"> {'My Website'}  </Link>
</Container>
</Box>
);
}