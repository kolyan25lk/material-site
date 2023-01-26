import * as React from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,TextField, Box} from '@mui/material';






export default function MenuLogIn() {
const [open, setOpen] = React.useState(null);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

return (

<Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>
              <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth  
                  />
                  <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth  
                  />
                  
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>

                </DialogActions>
                </Dialog>              
            </Box>
);
}