import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
export default function PositionedSnackbar(props) {
 console.log(props)
  const [state, setState] = React.useState({
    open: props.open,
    vertical: 'top',
    horizontal: 'center',
    severity : props.success,
    message : props.message
  });

  const { vertical, horizontal, open, severity,message } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>
    </React.Fragment>
  );
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <div>
 

      <Snackbar 
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>

  );
}
