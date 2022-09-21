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




export const Coll: FC = ({ }) => {
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
    <Box sx={{backgroundImage: '../../images/biker.png'  }}>
       <Image src={require('../../images/biker.png')}  layout="responsive"  /> 
       <Box sx={{display: 'flex',flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '25px'}} >
          <Item>
          <Card variant="outlined" sx={{ Width: '250px' , bgcolor: 'white'}}>
          
          <Box sx={{margin: '10px', backgroundColor: 'white' , '&:hover': {
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
          <Box sx={{margin: '10px'}}> 
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
          <Box>
          <Image src={require('../../images/biker2.png')}  layout="responsive"  />

          </Box>


          </Box>
  
      
  );
};




