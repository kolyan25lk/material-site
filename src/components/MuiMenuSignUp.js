import * as React from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import 'react-phone-number-input/style.css';
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,TextField, Box} from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import CountrySelect from './CountrySelect';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';

 export default function MenuSignUp() {
    const [openReg, setOpenReg] = React.useState(null);
    const handleClickOpenReg = () => {
      setOpenReg(true);
    };
    const handleCloseReg = () => {
      setOpenReg(false);
    };
  
    const  [ value ,  setValue ]  =  React.useState();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

return (
    <Box mr={1}>
<Button color="secondary" variant="contained" onClick={handleClickOpenReg}>Sign Up</Button>
            <Dialog open={openReg} onClose={handleCloseReg} arial-labelledby="form-dialog-title-registration">
                <DialogTitle id="form-dialog-title-registration">Registration</DialogTitle>
                <DialogContent>
                  <DialogContentText> Enter data for registration</DialogContentText>
                  
                  <Box mb={"0.5rem"} 
                  >
                  <PhoneInput          
                  country = "US"
                  placeholder="Enter phone number"
                  value = { value } 
                  onChange ={ setValue }
                  />                                    
                </Box>                  
                  <CountrySelect/>                  
                  <TextField
                  autoFocus
                  margin="dense"
                  id="userName"
                  label="User Name"
                  type="userName"
                  fullWidth  
                  />
                  <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth  
                  />
                  <Box mt={"0.5rem"} >
      <FormControl  fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Box>                  
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseReg} color="primary">Cancel</Button>
                  <Button onClick={handleCloseReg} color="primary">Registration</Button>
                </DialogActions>
            </Dialog>   
    </Box>           
);
}