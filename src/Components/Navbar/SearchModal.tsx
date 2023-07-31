"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchInput from './SearchInput';
import { useRouter } from 'next/navigation';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IModal {
    openModal: boolean;
    setOpenModal :  React.Dispatch<React.SetStateAction<boolean>>
}
export default function BasicModal({openModal,setOpenModal}:IModal) {
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography>
            Search By name, type or category...
        </Typography>
        <SearchInput
        sx={{width:'100%'}}
         />
        </Box>
        {/* 
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Search Products
          </Typography>
<Box className="flexed" sx={{position:'relative',mt:1,width:'100%'}}>

         <TextField size='small' placeholder='What are you looking for?' sx={{width:'100%'}}/>
         <IconButton className='cursor' sx={{}}>

         <SearchOutlinedIcon 
         sx={{
           
           position: 'absolute',
           right: '2%',
          }}/>
          </IconButton>
</Box>
        </Box> */}
      </Modal>
    </div>
  );
}