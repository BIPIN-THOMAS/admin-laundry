import  { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { createService, listSevice } from "../actions/action";
import Deleteservice from "./Deleteservice";

function Service() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [service, setService] = useState("");

  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("servicename", service);
    const response = await createService(formData);
    if(response.error){
      alert(response.message)
    }

    setOpen(false);
    fetchService()
  };

  const fetchService = async () => {
    const response = await listSevice();

    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    fetchService();
  }, []);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className="createBtn"
      >
        Create Service
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create A New Service</DialogTitle>
        <DialogContent>
        <input
            type="file"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
            style={{ display: 'block', marginBottom: '16px' }}
          />
          <TextField
            margin="dense"
            label="Service Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event) => setService(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
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
              <th>SERVICE</th>
              <th className="btntr">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="service_row">
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} width='70' alt="" />
                </td>
                <td>{item.servicename}</td>
                <td className="btntd"><button className="servicebtn">Edit</button> <Deleteservice service={item} id={item._id} /></td>
              </tr>
            ))}

            {/* Table rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Service;
