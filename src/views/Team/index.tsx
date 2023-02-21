// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardHeader';
import { Timeline } from 'react-twitter-widgets';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Image from 'next/image';
import bg from '../../images/SB_BG.png';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    
    primary: {
      main: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)'
    }
  },

});







export const Team: FC = ({ }) => {
  
  
  const [time, setTime] = React.useState();
 
 /* React.useEffect(() => {
    const timer = setInterval(() => {
      return setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
*/



  return (
    <ThemeProvider theme={theme}>
    <Box>
          <Box sx={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: 'white', flexDirection: 'row', flexGrow: '1', minHeight:'20vh' }}>
        <div>
      <Image src={require('../../images/sWFLOGO_gross.png')}  />
      </div>      
      </Box>
          <Box sx={{display: 'flex', justifyContent: 'center'}} >
            <Typography variant="h2" component="div" align='center' color='darkred' margin='30px' fontFamily= "montserrat">
              Skullbots Whale Foundation
            </Typography>
            </Box>
            <Container maxWidth="xl">
            <Typography variant="body1" component="div" align='center' color='black' margin='10px' marginBottom= '30px' fontFamily= "montserrat"  >
             
            

            We are a small group of HellDAO members: SDS, Lewy, Apex, Watermalone, Haui, Cartu, LittleP,Frait, Oawzz and MintyMike – along with the full support from the main man himself, our founder and the reason we are all here LUCIFER. 

We felt there was an opportunity to really help drive this project forwards, providing our full support to Lucifer enabling him to offload some of his workload so he can focus on what he does best, build quality tools!
 
We thought it would be a good time to tell you what we have been up to this past few weeks and ask for your help in supporting our activity!    
              </Typography>
          </Container>
          <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
            <Box sx={{display: 'flex',  flex: '4', alignItems: 'center' , justifyContent: 'right'  }}>
              <div style={{border :'5px solid', borderColor : 'black'}}>
              <Image src={require('../../images/lewy.jpg')} width= '200px' height= '200px'/></div>
            </Box>
            <Box sx={{display: 'flex',  flex: '1', alignItems: 'center' , justifyContent: 'right'  }}></Box>
          <Box sx={{ flex: '8', alignItems: 'center' , justifyContent: 'left',}}>
            <Typography variant="h5"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
              Lewy "the Brain"
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
              blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div" color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>

            </Box>    
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '30px'}} >
          <Box sx={{ flex: '8', alignItems: 'center' , textAlign: 'right'}}>
            <Typography variant="h5"  color='black' margin='10px' justifyContent='right' fontFamily= "montserrat">
              Mike "the Hammer"
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' fontFamily= "montserrat">
              blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' fontFamily= "montserrat"> 
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div" color='black' margin='10px' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' fontFamily= "montserrat">
            blablablablablabl
            </Typography>

            </Box>
            <Box sx={{display: 'flex',  flex: '1', alignItems: 'center' , justifyContent: 'left'  }}></Box>  
            <Box sx={{display: 'flex',  flex: '4', alignItems: 'center' , justifyContent: 'left'  }}>
              <div style={{border :'5px solid', borderColor : 'black'}}>
              <Image src={require('../../images/mike.jpg')} width= '200px' height= '200px'/></div>
            </Box>
     
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
            <Box sx={{display: 'flex',  flex: '4', alignItems: 'center' , justifyContent: 'right'  }}>
              <div style={{border :'5px solid', borderColor : 'black'}}>
              <Image src={require('../../images/apex.jpg')} width= '200px' height= '200px'/></div>
            </Box>
            <Box sx={{display: 'flex',  flex: '1', alignItems: 'center' , justifyContent: 'right'  }}></Box>
          <Box sx={{ flex: '8', alignItems: 'center' , justifyContent: 'left',}}>
            <Typography variant="h5"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
              Apex "the Creative"
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
              blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div" color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>

            </Box>    
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '30px'}} >
          <Box sx={{ flex: '8', alignItems: 'center' , textAlign: 'right'}}>
            <Typography variant="h5"  color='black' margin='10px' justifyContent='right' fontFamily= "montserrat">
              Watermalone
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' fontFamily= "montserrat">
              blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div" color='black' margin='10px' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' fontFamily= "montserrat">
            blablablablablabl
            </Typography>

            </Box>
            <Box sx={{display: 'flex',  flex: '1', alignItems: 'center' , justifyContent: 'left'  }}></Box>  
            <Box sx={{display: 'flex',  flex: '4', alignItems: 'center' , justifyContent: 'left'  }}>
              <div style={{border :'5px solid', borderColor : 'black'}}>
              <Image src={require('../../images/malo.jpg')} width= '200px' height= '200px'/></div>
            </Box>
     
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
            <Box sx={{display: 'flex',  flex: '4', alignItems: 'center' , justifyContent: 'right'  }}>
              <div style={{border :'5px solid', borderColor : 'black'}}>
              <Image src={require('../../images/sds.jpg')} width= '200px' height= '200px'/></div>
            </Box>
            <Box sx={{display: 'flex',  flex: '1', alignItems: 'center' , justifyContent: 'right'  }}></Box>
          <Box sx={{ flex: '8', alignItems: 'center' , justifyContent: 'left',}}>
            <Typography variant="h5"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
              SDS
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
              blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div" color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>
            <Typography variant="body2" component="div"  color='black' margin='10px' justifyContent='left' fontFamily= "montserrat">
            blablablablablabl
            </Typography>

            </Box>    
          </Box>
    </Box>
    </ThemeProvider>
      )};
 