
import { FC, useEffect, useState } from 'react';
import DbotsJson from '../../stores/Dbots.json';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl, Cluster, Keypair } from '@solana/web3.js'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';



let theme = createTheme();
theme = responsiveFontSizes(theme);


export const BasicsView: FC = ({ }) => {
 
  const RPCurl = 'https://billowing-few-tree.solana-mainnet.discover.quiknode.pro/a873bf593f7be12ac32dd204328ac690cfd37765/';
  const connection = new Connection(RPCurl, "confirmed");
  const wallet = useWallet();
  
  const refreshBalance = async (network: Cluster, account: Keypair | null) => {
    if (!account) return;
  
    try {
      const connection = new Connection(clusterApiUrl(network), "confirmed");
      const publicKey = account.publicKey;
      const balance = await connection.getBalance(publicKey);
      return balance;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
  
  
  function getKingsByaddress(name: string) {
    return DbotsJson.filter((d)=> d.Owner === name).map((res) => res.Kings)
  }

  function getSacrificedByaddress (name: string) {
    return DbotsJson.filter((d)=> d.Owner === name).map((res) => res.SUM)
  }

  
  console.log(getKingsByaddress(wallet.publicKey?.toBase58()));
  let Kings = getKingsByaddress(wallet.publicKey?.toBase58());
  let DBots = getSacrificedByaddress (wallet.publicKey?.toBase58())




  return (
    <ThemeProvider theme={theme}>
<Container  sx={{ marginTop : '15vh', alignItems: 'center',  justifyContent: 'center', flexDirection: 'column', flexGrow: '1' }}>
    <Box>
    Congratulations, you have sacrificed {DBots} Degenbots and are eligable to mint {Kings} King Demons.

    </Box>
</Container>
</ThemeProvider>

  );
};
