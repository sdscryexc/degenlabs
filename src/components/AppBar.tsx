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
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import Image from "next/image";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import NetworkSwitcher from './NetworkSwitcher';

let theme = createTheme({
  palette: {
    
    primary: {
      main: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      main: '#181c1f',
    }
  },
});

theme = responsiveFontSizes(theme);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Header() {

  
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setState({ ...state, [anchor]: open });
      };
  
    const anchor:any ='top'; 

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem >
              <ListItemButton href="./" alignItems="center" >
                <ListItemText primary={
            <Typography color={'black'}>
              Home
            </Typography>
          }/>
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton href="./Team">
                <ListItemText primary={
            <Typography color={'black'}>
              Team
            </Typography>
          } />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem >
              <ListItemButton href="./basics">
                <ListItemText primary={
            <Typography color={'black'}>
              Demon Status
            </Typography>}/>
              </ListItemButton>
            </ListItem>            
        </List>
      </Box>
    );
  
  

  return (

    
    <ThemeProvider theme={theme}>
         <Box >
          <AppBar elevation={0} color="secondary">
            <Toolbar> 
                <div>
                    <React.Fragment key={anchor}>
                      <Button onClick={toggleDrawer(anchor, true)}>{
            <Typography variant="h5" color= "white" >
              Menu
            </Typography>}</Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                 
                </div>
              <div className="p-3">
              <Image src={require('../images/degenlabs.png')} width='40' height={'40'}/>
              </div>
              <Typography variant="body1" color= "white" sx={{ flexGrow: 1 }}>
              
              <Link href="/">DEGENLABS</Link>
              </Typography>
              <WalletMultiButton/>
            
          
              </Toolbar>
          </AppBar>
          </Box>
     </ThemeProvider>

  );
      };
