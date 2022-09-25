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
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';






function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: 'white',
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        borderColor: 'red',
        borderRadius: 1,
        fontSize: '0.875rem',
        fontWeight: '700',
        display: 'flex',
        width: '250 px',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30vm',
  bgcolor: 'white',
  border: '5px solid',
  borderRadius: '10px',
  borderColor: 'darkred',
  boxShadow: 24,
  p: 4,
  color: 'black',
  
};


 


export const Coll: FC = ({ }) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


  return (

    <Box sx={{marginTop:"10vh"  }}>
      <Typography marginBottom='40px' variant="h3" align='center' color='darkred'  fontFamily= "montserrat">
          The Collections
          </Typography>
       <Image src={require('../../images/biker.png')}  layout="responsive"  /> 
       
    
       
       <Box sx={{display: 'flex',flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '25px'}} >
          <Item>
          <Card variant="outlined" sx={{ Width: '250px' , bgcolor: 'white'}}>
          
          <Box  onClick={handleOpen} sx={{margin: '10px', backgroundColor: 'white' , '&:hover': {
          backgroundColor: 'lightgray',
          opacity: [0.9, 0.8, 0.7],}}}> 



          <Image src={require('../../images/gen0.png')} width= '200px' height= '200px'  />
          </Box>    
          <Typography gutterBottom  variant="h5" component="div" align='center'>
          Gen0
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          earn 69Bolt/week
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          SUPPLY 169
          </Typography>     
          </Card>
          </Item>
          <Item>
          <Card variant="outlined" sx={{ Width: '250px' , bgcolor: 'white'}}>
          <Box onClick={handleOpen1} sx={{margin: '10px', backgroundColor: 'white' , '&:hover': {
          backgroundColor: 'lightgray',
          opacity: [0.9, 0.8, 0.7],}}}>  
          <Image src={require('../../images/gen1.gif')} width= '200px' height= '200px'  />
          </Box>    
          <Typography gutterBottom  variant="h5" component="div" align='center'>
          Gen1
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          earn 30Bolt/week
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          SUPPLY 338
          </Typography>     
          </Card>
          </Item>
          <Item>
          <Card variant="outlined" sx={{ Width: '250px' , bgcolor: 'white'}}>
          <Box sx={{margin: '10px'}}> 
          <Image src={require('../../images/gen2.png')} width= '200px' height= '200px'  />
          </Box>    
          <Typography gutterBottom  variant="h5" component="div" align='center'>
          Gen2 - Biker
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          earn 10Bolt/week - upgradable
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          SUPPLY 3666
          </Typography>     
          </Card>
          </Item>
          <Item>
          <Card variant="outlined" sx={{ Width: '250px' , bgcolor: 'white'}}>
          <Box sx={{margin: '10px'}}> 
          <Image src={require('../../images/prospects.png')} width= '200px' height= '200px'  />
          </Box>    
          <Typography gutterBottom  variant="h5" component="div" align='center'>
          Prospects
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          earn 7Fuel/week
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
          SUPPLY 16000
          </Typography>     
          </Card>
          </Item>
          
          </Box>
          
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} border='none'>
          <Typography id="modal-modal-title" fontSize="2vh" >
          Gen 0:
          </Typography>    
          <Typography id="modal-modal-description" fontSize="1,5 vh" sx={{ mt: 2 }}>
           A small collection of rare NFT’s with only a total of 169 in circulation. Owning one of these yields a high amount
           </Typography>
           <Typography id="modal-modal-description" fontSize="1,5 vh" sx={{ mt: 2 }}>
           of our token $BOLT but also gives instant access to our Hell DAO where holders get added benefits and alpha on whats to come!
           </Typography>
           <Typography id="modal-modal-description" fontSize="1,5 vh" sx={{ mt: 2 }}>
           Staking Yield: 69 $BOLT per week
           </Typography>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" fontSize="2vh" >
          Gen 1: 
          </Typography>    
          <Typography id="modal-modal-description" fontSize="1,5 vh" sx={{ mt: 2 }}>
          Another rare collection with only 338 available, similar to the Gen 0 collection these give instant access to Hell DAO,
           </Typography>
           <Typography id="modal-modal-description" fontSize="1,5 vh" sx={{ mt: 2 }}>
           yiedling a smaller amount of $BOLT. These were given to our early community as a reward for believing in our vision!
           </Typography>
           <Typography id="modal-modal-description" fontSize="1,5 vh" sx={{ mt: 2 }}>
           Staking Yield: 30 $BOLT per week
           </Typography>
        </Box>
      </Modal>


      
          </Box>

      
  );
};




