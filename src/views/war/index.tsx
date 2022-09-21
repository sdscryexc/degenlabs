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
import { Timeline } from 'react-twitter-widgets';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: 'lightgray',
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '2px solid',
        borderColor: 'lightgray',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
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






export const War: FC = ({ }) => {
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
          <div style={{marginTop: '80px'}}>
          
          
          <Box>
            <Typography marginBottom='40px' marginTop="25px" variant="h3" align='center' color='black'  fontFamily= "montserrat">
          Degenbots War Interface
          </Typography>
           
          </Box>
        
       


      





      
      <Box sx={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', bgcolor: 'transparent', justifyContent: 'center'}}>
      <Item>
      
          <TableContainer component={Paper}>
          <Typography marginBottom='20px' marginTop="25px" variant="h5" align='center' color='black'  fontFamily= "montserrat">
          Actual Score
          </Typography>
      <Table sx={{ width: '400px', bgcolor: 'transparent'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>REALM</TableCell>
            <TableCell align="right">AMOUNT TOKEN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Tokenamount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
    </Item>
    <Item>
     <Timeline
  dataSource={{
    noheader: 'true',
    sourceType: 'timeline',
    screenName: 'skullbots'
  }}
  options={{
    width: '400px',
    height: '500'
  }}
/>  
  
    </Item>
   
    <Item>
    

    <Paper sx={{width:'400px'}}>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
      </Paper>

    </Item>
  </Box>
  </div> 

  );
};




