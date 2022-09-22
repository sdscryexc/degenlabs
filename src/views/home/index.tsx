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
import Container from '@mui/material/Container';









export const HomeView: FC = ({ }) => {
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
    
      <Box sx={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: 'white', flexDirection: 'column', flexGrow: '1', minHeight:'95vh' }}>
        <div>
      <Image src={require('../../images/sWFLOGO_gross.png')}  />
      </div>
      <div>
      <Typography fontSize='2.5vw' align='center' color='darkred' margin='30px' fontFamily= "montserrat">
             Project advisory   -   Community management    -    Promotion
            </Typography>     
            </div>
      </Box>
      )};
 