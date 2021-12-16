import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import { AppBar, IconButton, Toolbar, Typography, InputBase } from '@mui/material';
import { Button } from '@mui/material';

const StRoot = styled(Box)({
  width: '100%',
  marginBottom: '0',
})

const StToolbar = styled(Toolbar)({
  marginRight: 'auto',
})

const StMenuButton = styled(IconButton) ({
  marginLeft: 0,
  marginRight: 20,
})

const StTitle = styled(Typography) ({
  display: {
    xs: 'none',
    sm: 'block',
  }
})

const StGrow = styled(Box) ({
  flexGrow: 1,
  marginRight: 'auto',
})

const StSearch = styled(Box) ({
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: purple[700],
})

const StSearchIcon = styled(Box) ({
  position: 'absolute',
  color: '#aaa',
  zIndex: 5,
  top: '7px',
  left: '6px'
})

const ColorButton = styled(Button) ({
  backgroundColor: purple[500],
})

const StAppBar = styled(AppBar) (({theme}) => ({
  display: 'flex', 
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  // backgroundColor: purple[700],
  padding: '0 5rem',
}))

const StInputBase = styled(InputBase) (({theme}) => ({
    root: {
      color: 'inherit',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, .98)',
      padding: '.5rem',
      paddingLeft: '2rem',
      transition: theme.transitions.create(['width'], {
        duration: 500,
      }),
      width: '12rem',
      ':focus': {
        width: '18rem',
      },
    },
}))

export {StRoot, StToolbar, StMenuButton, StTitle, StGrow, StSearch, StSearchIcon, ColorButton, StAppBar, StInputBase}