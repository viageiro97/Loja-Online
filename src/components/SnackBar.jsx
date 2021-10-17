import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import GlobalContext from '../Context/GlobalContext';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar() {
  const {state, dispatch} = useContext(GlobalContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type:'CLOSE_SNACK'});
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        anchorOrigin={{vertical:"bottom",horizontal:"right"}} 
        open={state.snackBar.open} 
        autoHideDuration={4000} 
        onClose={handleClose}
      >
        <Alert 
          onClose={handleClose} 
          severity={state.snackBar.severity} 
          sx={{ width: '100%' }}
        >
          {state.snackBar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}