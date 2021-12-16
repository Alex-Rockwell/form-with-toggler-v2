import { Avatar, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper) (({theme}) => ({
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
}))

const CustomAvatar = styled(Avatar) (({theme}) => ({
  backgroundColor: 'crimson',
}))

const CustomButton = styled(Button) (({theme}) => ({
  // backgroundColor: 'crimson',
  // '&:hover': {
  //   backgroundColor: '#d50000',
  // }
}))

export {CustomAvatar, CustomPaper, CustomButton}