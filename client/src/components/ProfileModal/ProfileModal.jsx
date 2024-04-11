import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { UilPen } from "@iconscout/react-unicons";
import './ProfileModal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProfileModal({ modalOpened, setModalOpened ,data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(modalOpened);
  const handleClose = () => setOpen(false);
  console.log("modal is ", modalOpened);




  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <UilPen
          width="2rem"
          height="1.2rem"
          onClick={() => setModalOpened(true)}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
           */}

          <form className="ProfileForm">
            <h2>Your Info</h2>
         <div className="">
         <input type="text" placeholder="firstname"/>
          <input type="text" placeholder="lasttname"/>
          
         </div>
         
          <input type="text" placeholder="Works At"/>

          <div className="">
         <input type="text" placeholder="lives in"/>
          <input type="text" placeholder="Country"/>
          
         </div>
         <input type="text" placeholder="Relationship status"/>
          
         <div className="">
         Profile Image<input type="file" placeholder="Profile Image"/><br></br>
         Cover Image <input type="file" placeholder="CCover Image"/>
          
         </div>
          </form>


        </Box>
      </Modal>
    </div>
  );
}
