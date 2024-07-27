import { Backdrop, Box, Modal, DialogContent } from '@mui/material';
import { styled } from '@mui/system';

// Use styled from @mui/system for consistency
export const StyledBackdrop = styled(Backdrop)`
  z-index: 9999;
`;

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

// Corrected ModalContent using @mui/system styled
export const ModalContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
