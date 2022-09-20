import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import Image from "next/image";



const darkTheme = createTheme({
  palette: {
    
    primary: {
      main: '#000000',
    },
  },
});

function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton {...bindTrigger(popupState)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link href="/SB">Skullbots</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link href="/degenbots">Degenbots</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link href="/war">War Interface</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


export default function Header() {
  return (
    <Box >
       <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              
              <MenuPopupState/>
              <div className="p-3">
              <Image src={require('../images/sWFLOGO.png')} width='40' height={'40'}/>
              </div>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              
              <Link href="/">Skullbots Whale Foundation</Link>
              </Typography>
              <WalletMultiButton/>
          
              </Toolbar>
          </AppBar>
        </ThemeProvider>
    </Box>
  );
}
