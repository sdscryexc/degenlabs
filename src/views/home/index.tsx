// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store


import * as React from 'react';
import Item from '@mui/material/ListItem'
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';


import Image from 'next/image';

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { styled } from "@mui/material/styles";


let theme = createTheme();
theme = responsiveFontSizes(theme);
const label = 'Check Demon Status';


const Button1 = ({}) => (
  
  <button
    className="button1">
    Check Demon Status
  </button>
);

const Button2 = ({}) => (
  
  <button
    className="button1">
    Buy Summon
  </button>
);

export default Button;


export const HomeView: FC = ({ }) => {



  return (
    <ThemeProvider theme={theme}>
      <Container  sx={{ display: 'flex', alignItems: 'center', marginTop: '15vh', justifyContent: 'center', flexDirection: 'column', flexGrow: '1' }}>
        <Box sx={{display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: 'white', maxWidth: '50vw'}}>
      
          <Image src={require('../../images/start.png')} objectFit='cover' />
      
        </Box>
      </Container>
      <Container sx={{ display: 'flex', alignItems: 'center', marginTop: '10vh', justifyContent: 'center', flexDirection: 'column', flexGrow: '1' }}>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', flexGrow: '1' }}>
        <Item sx={{display: 'flex', flexGrow: '1' }}>
          
             <a href='./basics'>
             <Button1 ></Button1>
             </a>
             
              
        </Item>
          <Item sx={{display: 'flex', flexGrow: '1' }}>
          <a href='./basics'>
             <Button2></Button2>
             </a>
        </Item>
      </Box>
      </Container>
      </ThemeProvider>
      )};
 