import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { dltservice } from '../actions/action';

export default function Editservice({service,id}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleDeleteClick = async () => {
        console.log(id);
        try {
          await dltservice(id); 
          setOpen(false);
        } catch (error) {
          console.error('Failed to delete service:', error);
        }


  };

  return (
    <>
      <button onClick={handleClickOpen} className="servicebtn">Delete</button >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img className='popup_img' src={service.image} alt="" /><br />
            Are you sure you want to permanently delete  <b><u>{service.servicename}</u></b> service?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDeleteClick} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
