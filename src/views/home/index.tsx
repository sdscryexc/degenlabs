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



let theme = createTheme();
theme = responsiveFontSizes(theme);




export const HomeView: FC = ({ }) => {



  return (
    <ThemeProvider theme={theme}>
      <Container  sx={{ display: 'flex', alignItems: 'center', marginTop: '15vh', justifyContent: 'center', flexDirection: 'column', flexGrow: '1' }}>
        <Box sx={{display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: 'white', maxWidth: '50vw'}}>
      
          <Image src={require('../../images/start.png')} objectFit='cover' />
      
        </Box>
      </Container>
      <Container sx={{ display: 'flex', alignItems: 'center', marginTop: '10vh', justifyContent: 'center', flexDirection: 'column', flexGrow: '1' }}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Item sx={{marginRight: '5vw'}} >
          <Typography variant='h3' align='center' color='white'>
             <Button href='./basics'>Check Demon status</Button>
          </Typography>     
        </Item>
          <Item>
          <Typography variant='h3' align='center' color='white'>
             Buy Summon
          </Typography>     
        </Item>
      </Box>
      </Container>
      </ThemeProvider>
      )};
 