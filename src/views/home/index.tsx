// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

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
import background from "../../../src/img/background.png";
import { Timeline } from 'react-twitter-widgets';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
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






export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()


  console.log(`amount_wrath: ${amount_wrath}`);

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
    {argument: 'GREED', value: amount_greed},
    {argument: 'LUST', value: amount_lust},
    {argument: 'PRIDE', value: amount_pride},
    {argument: 'GLUTTONY', value: amount_gluttony},
    {argument: 'ENVY', value: amount_envy},
    {argument: 'SLOTH', value: amount_sloth},
    {argument: 'WRATH', value: amount_wrath},
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
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFFFFF] to-[#8B0000]">
          DEGENBOTS WAR INTERFACE 
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p> </p>
        </h4>
     
          <div className="text-center">

      <Box sx={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
      <Item sx={{display: 'flex', minWidth: 400 }}>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="simple table">
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
    <Item sx={{display: 'flex', minWidth: 400}}>
   
      <Timeline
  dataSource={{
    sourceType: 'mentions',
    screenName: 'skullbots'
  }}
  options={{
    height: '500'
  }}
/>  
 
    </Item>
   
    <Item sx={{display: 'flex', minWidth: 400}}>
    

    <Paper>
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
    </div>
    </div>
  );
};




