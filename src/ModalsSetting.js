import React, { useEffect, useRef, useState } from 'react'

const ModalsSetting = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return {handleOpen,handleClose,open};
}

export default ModalsSetting