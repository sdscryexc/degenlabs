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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import cardimage from "../../../src/img/skullbots_black_400.png";
import background from "../../../src/img/background.png";
import { url } from 'inspector';







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
  
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const timer = setInterval(() => {
      return setTime(new Date()?.toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFFFFF] to-[#8B0000]">
          DEGENBOTS WAR INTERFACE <span className='text-sm font-normal align-top text-slate-700'>v{pkg.version}</span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p> </p>
        </h4>
     
          <div className="text-center">
      <Card sx={{ maxWidth: 600 }}>
      <CardHeader
        title="Actual Score"
        subheader={time}
      />
      <CardContent>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
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
    </CardContent>
    </Card>
        </div>
      </div>
    </div>
    </div>
  );
};




