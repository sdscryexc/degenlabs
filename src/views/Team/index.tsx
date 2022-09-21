// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { amount_wrath, amount_envy, amount_gluttony, amount_greed, amount_lust, amount_pride, amount_sloth } from '../../stores/useUserSOLBalanceStore';

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
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()




  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  function createData(
    name: string,
    Tokenamount: number,

  ) {
    return { name, Tokenamount};
  }

  const rows = [
    createData('GREED', amount_greed),
    createData('LUST', amount_lust),
    createData('PRIDE', amount_pride),
    createData('GLUTTONY', amount_gluttony),
    createData('ENVY', amount_envy),
    createData('SLOTH', amount_sloth),
    createData('WRATH', amount_wrath),
  ];

  const data = [
    {argument: 'GRE', value: amount_greed},
    {argument: 'LUS', value: amount_lust},
    {argument: 'PRI', value: amount_pride},
    {argument: 'GLU', value: amount_gluttony},
    {argument: 'ENV', value: amount_envy},
    {argument: 'SLO', value: amount_sloth},
    {argument: 'WRA', value: amount_wrath},
  ];
  
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
            <Typography variant="h2" component="div" align='center' color='black' margin='30px' fontFamily= "montserrat">
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
 