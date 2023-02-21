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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { url } from 'inspector';
import bg from "../../images/biker3.png";
import Container from '@mui/material/Container';






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white','&:hover': {
    backgroundColor: 'darkred',
    opacity: [0.2, 1, 0.1],},
  padding: theme.spacing(1),
  textAlign: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  justifyItems:'center',
  color: theme.palette.text.secondary,
  height: '10vh',
  alignSelf:'center',
  borderRadius: '3px',
  fontSize: '1.5vw',
}));




export const SB: FC = ({ }) => {

  
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
    <Box sx={{marginTop:"10vh"  }}>
     <Box>
            <Typography marginBottom='2vw' variant="h3" align='center' color='darkred'  fontFamily= "montserrat">
          A guide through Skullbots
          </Typography>
          
          </Box> 
          <Image src={require('../../images/Biker4.png')}  layout="responsive"  />
          <Container className="sbov" style={{ marginTop:"5vh", height: "70vh"}}>
      <Typography variant="h6"  color='black' fontFamily= "montserrat">
             
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={4}>
          <Item style={{display: 'flex' ,flexDirection: 'column', justifyContent:'space-around'}}>
          <Link href="/Coll"> Skullbot Collections </Link>
          </Item>   
        </Grid>
        <Grid item xs={4}>
          <Item style={{display: 'flex' ,flexDirection: 'column', justifyContent:'space-around'}}>
            How to earn $BOLT
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{display: 'flex' ,flexDirection: 'column', justifyContent:'space-around'}}>
            $BOLT Ecosystem
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{display: 'flex' ,flexDirection: 'column', justifyContent:'space-around'}}>
            Biker Upgrade System
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{display: 'flex' ,flexDirection: 'column', justifyContent:'space-around'}}>
            Building Prospects
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{display: 'flex' ,flexDirection: 'column', justifyContent:'space-around'}}>
            Demonic Rider
          </Item>
        </Grid>
      </Grid>
    </Box>
    
            </Typography>





    </Container>
    </Box>     
  
      
  );
};




