import React from 'react';
import './App.css';
import { AppBar, Container,Toolbar, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import MuiMenuDemo  from './components/MuiMenuDemo';
import MuiMenuLogIn  from './components/MuiMenuLogIn';
import MuiMenuSignUp from './components/MuiMenuSignUp';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Main from './components/Main';


const useStyles = makeStyles()((theme) => ({
  title: {
    flexGrow: 1
  },
}))

function App() {
  const { classes } = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>        
          <Toolbar>
          <MuiMenuDemo/>                          
            <Typography variant="h6" className={classes.title}>Web Developer Blog</Typography>
            <MuiMenuLogIn/>
            <MuiMenuSignUp/>         
          </Toolbar>
        </Container>
      </AppBar>      
        <Main/>     
        <BlogPost/>      
        <Footer/>
    </>
  );
}

export default App;