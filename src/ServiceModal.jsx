import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalsSetting from './ModalsSetting';
import { MDBIcon } from 'mdb-react-ui-kit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10%',
  p: 4,
};

export default function ServiceModal() {
const {handleOpen,handleClose,open}=ModalsSetting()

  return (
    <div>
      <Button className=' hover-shadow-soft' onClick={handleOpen}>preview</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <MDBIcon fas icon="headset" /> | Service

            </Typography>
            <Typography id="transition-modal-description " className='ms-2' sx={{ mt: 2 }}> 
            <MDBIcon far icon="check-circle"  />   24/7 Support
            </Typography>
            <Typography id="transition-modal-description " className='ms-2' sx={{ mt: 2 }}> 
            <MDBIcon far icon="check-circle"  />   Dedicated to providing round-the-clock support and availability for client projects.
            </Typography>
            <Typography id="transition-modal-description " className='ms-2' sx={{ mt: 2 }}> 
            <MDBIcon far icon="check-circle"  />   Experienced in proactive monitoring and rapid response to ensure uninterrupted service.
            </Typography>
            <Typography id="transition-modal-description " className='ms-2' sx={{ mt: 2 }}> 
            <MDBIcon far icon="check-circle"  />   Ready for on-call duties and urgent issue resolution
            </Typography>
      
            <footer>
            <Button className='bg-white text-dark float-end mt-5' onClick={handleClose}>Done</Button>
            </footer>
          </Box>
          
        </Fade>
        
      </Modal>
    </div>
  );
}