
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function product() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} className="createBtn">
        Create Product
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create A New Product</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            label=""
            type="file"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Product Name"
            type="text"
            fullWidth
            variant="outlined"
          />
           <TextField
            margin="dense"
            label="Price"
            type="text"
            fullWidth
            variant="outlined"
          />
          
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <div className="table-service">
        <table border="1px">
          <thead>
            <tr>
              <th>SI</th>
              <th>IMAGES</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default product;


