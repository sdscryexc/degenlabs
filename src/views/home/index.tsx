// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { amount_wrath, amount_envy, amount_gluttony, amount_greed, amount_lust, amount_pride, amount_sloth, amount_greed_stake } from '../../stores/useUserSOLBalanceStore';

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

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import Image from 'next/image';
import bg from '../../images/SB_BG.png';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';



let theme = createTheme();
theme = responsiveFontSizes(theme);




export const HomeView: FC = ({ }) => {




 
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
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5vh', justifyContent: 'center', flexDirection: 'column', flexGrow: '1', minHeight:'95vh' }}>
        <Box sx={{display: 'flex', alignItems: 'center', height: '40vh', width: '40vw'}}>
      <Image src={require('../../images/start.png')}  />
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Typography variant='h3' align='center' color='darkred' marginTop='15vh ' fontFamily= "montserrat">
             SkullBots Brand   -   Degendevil Casino    -    Degenlabs Service
            </Typography>     
            </Box>
      </Box>
      </ThemeProvider>
      )};
 