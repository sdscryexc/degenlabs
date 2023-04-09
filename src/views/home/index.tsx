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
import ReactPlayer from 'react-player';


import Image from 'next/image';


import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';



let theme = createTheme();
theme = responsiveFontSizes(theme);


const Button1 = ({}) => (
  
  <button
    className="button1">
    Check Demon Status
  </button>
);

const Button2 = ({}) => (
  
  <button
    className="button1">
    Check Biker Level
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
        <Box sx={{width:'40vw', display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Item sx={{justifyContent:'center'}}><a href='https://discord.gg/fqfD29Wckq'>
          <i className="fa fa-discord fa-2x" aria-hidden="true"></i></a></Item>
          <Item sx={{justifyContent:'center'}}><a href='https://twitter.com/degenlabs'>
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></Item>
          <Item sx={{justifyContent:'center'}}><a href='https://degenportal.io'>
            <i className="fa fa-globe fa-2x" aria-hidden="true"></i></a></Item>
        </Box>
      </Container>
      <Container sx={{ display: 'flex', alignItems: 'center', marginTop: '10vh', marginBottom: '10vh',justifyContent: 'center', flexDirection: 'column', flexGrow: '1' }}>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', flexGrow: '1' }}>
        <Item sx={{justifyContent:'center'}}>       
             <a href='./basics'>
             <Button1 ></Button1>
             </a>             
        </Item>
          <Item sx={{justifyContent:'center'}}>
            <a href='./Coll'>
             <Button2></Button2>
             </a>
        </Item>
        
      </Box>
      </Container>
      
          <Box sx={{textAlign:'center', marginTop:'10vh', justifyContent:'center', display:'flex'}}>
 
            <Item sx={{fontSize:"xx-large", display:'flex', textAlign:'bottom', justifyContent:'center', minheight:'10vh', width:'85vw',  borderTop:'2px solid', borderColor:'#d32a2a'}}>
            <br></br>#1 Utility Provider for SOL and SPL Token
            </Item>
            
            </Box>
            
            <Box sx={{display: 'flex', backgroundColor:'#242426', width:"85vw",  p:1, m:1, margin:'auto'}}>
            <Item sx={{display:'flex',  alignItems:'stretch', maxwidth:'80vw', flexDirection:'row', flexWrap:'wrap' }}>
            
            <Item sx={{bgColor:'white', display:'flex', justifyContent:'center',minwidth:'40vw'}}>  
            <ReactPlayer url='https://video.wixstatic.com/video/fb3ca9_c7297cda2af3404ebe895a18979cd283/1080p/mp4/file.mp4'  loop controls />
            </Item>
            <Item sx={{bgColor:'red', display:'flex', justifyContent:'center',textAlign:'center', minwidth:'40vw', }}>
            #BYOC <br></br><br></br>Owning a Demon will give you unlimited opportunity to generate your own Rev

            </Item>
            </Item>
            


          </Box>
          






      
      </ThemeProvider>
      )};
 