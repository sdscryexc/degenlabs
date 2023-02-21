// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store

import { amount_bonk, amount_deds, amount_mob, amount_fronk, amount_vault, amount_silver, amount_dgen, amount_woop, amount_pogger, amount_luv, amount_exp,
  amount_trb, amount_catnip, amount_s7n, amount_glug, balance_trea, balance_fee } from '../../stores/useUserSOLBalanceStore';

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






export const DashFlip: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  let balance_diff = balance_trea - 300;





  function createData(
    name: string,
    Tokenamount: number,
    Fees: number,

  ) {
    return { name, Tokenamount, Fees};
  }

  const rows = [
    createData('FRONK', amount_fronk, amount_fronk),
    createData('BONK', amount_bonk, amount_bonk),
    createData('DEDS', amount_deds, amount_deds),
    createData('MOB', amount_mob, amount_mob),
    createData('VAULT', amount_vault, amount_vault),
    createData('DGEN', amount_dgen, amount_dgen),
    createData('SILVER', amount_silver, amount_silver),
    createData('WOOP', amount_woop, amount_woop),
    createData('LUV', amount_luv, amount_luv),
    createData('POGGER', amount_pogger, amount_pogger),
    createData('EXP', amount_exp, amount_exp),
    createData('TRB', amount_trb, amount_trb),
    createData('CATNIP', amount_catnip, amount_catnip),
    createData('TRB', amount_s7n, amount_s7n),
    createData('CATNIP', amount_glug, amount_glug),  
  ];

  function createData1(
    name: string,
    Treasury: number,
    Fees: number,

  ) {
    return { name, Treasury, Fees};
  }

  const rows1 = [
    createData1('Multiflip', balance_trea.toFixed(2), balance_fee.toFixed(2)),
  ];

/*
  const rows1 = [
    createData('GREED', amount_greed_stake),
    createData('LUST', amount_lust_stake),
    createData('PRIDE', amount_pride_stake),
    createData('GLUTTONY', amount_gluttony_stake),
    createData('ENVY', amount_envy_stake),
    createData('SLOTH', amount_sloth_stake),
    createData('WRATH', amount_wrath_stake),
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
  */
  const [time, setTime] = React.useState();
 
 React.useEffect(() => {
    const timer = setInterval(() => {
      return setTime(new Date().toLocaleString());
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div style={{marginTop: '80px'}}>
          
          
    <Box>
      <Typography marginBottom='40px' marginTop="25px" variant="h3" align='center' color='darkred'  fontFamily= "montserrat">
    Flipgame Stats
    </Typography>
     
    </Box>
  
 









<Box sx={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', bgcolor: 'transparent', justifyContent: 'center'}}>
<Item>

    <TableContainer component={Paper}>
    <Typography marginBottom='20px' marginTop="25px" variant="h5" align='center' color='black'  fontFamily= "montserrat">
    SPL STATS
    </Typography>
<Table sx={{ width: '350px', bgcolor: 'transparent'}} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Token</TableCell>
      <TableCell align="right">Treasury</TableCell>
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

    <TableContainer component={Paper}>
    <Typography marginBottom='20px' marginTop="25px" variant="h5" align='center' color='black'  fontFamily= "montserrat">
    SOL STATS
    </Typography>
<Table sx={{ width: '350px', bgcolor: 'transparent'}} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>SOL</TableCell>
      <TableCell align="right">Fees</TableCell>
      <TableCell align="right">Treasury</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows1.map((row) => (
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.Fees}</TableCell>
        <TableCell align="right">{row.Treasury}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>

</Item>

</Box>
</div> 

);
};

