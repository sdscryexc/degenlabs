
import { FC, useEffect, useState } from 'react';
import DbotsJson from '../../stores/Dbots.json';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl, Cluster, Keypair } from '@solana/web3.js'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import Item from '@mui/material/ListItem';





let theme = createTheme();
theme = responsiveFontSizes(theme);


export const BasicsView: FC = ({ }) => {
 
  const RPCurl = 'https://billowing-few-tree.solana-mainnet.discover.quiknode.pro/a873bf593f7be12ac32dd204328ac690cfd37765/';
  const connection = new Connection(RPCurl, "confirmed");
  const wallet = useWallet();
 


  (async () => {
  const refreshBalance = async (network: Cluster, account: Keypair | null) => {
    if (!account) return;
  
    try {
      const publicKey = account.publicKey;
      const balance = await connection.getBalance(publicKey);
     
      return balance;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };
})();


const publicAddress = wallet.publicKey?.toBase58();


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
      <Box sx={{marginTop : '10vh',textAlign:'center', fontSize:'xxx-large' }}>
        Flex your King demons
      </Box>
      <div className="container">
  <div className="box">
    <div className="imgBx">
    <img src="https://i.imgur.com/1250hoH.png"></img>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
      <img src="https://i.imgur.com/XHDS7Bu.jpg"></img>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
      <img src="https://i.imgur.com/gUYSqk4.jpg"></img>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
      <img src="https://i.imgur.com/71VNmUn.jpg"></img>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
</div>





      
 <Box  sx={{marginTop : '5vh', display:'flex', flexDirection:'column', textAlign:'center', fontSize:'x-large' }}>

   Congratulations,<br></br> you have sacrificed {DBots} Degenbots <br></br> and are eligible to mint {Kings} King Demons.

  </Box>
  <Box >
    

    </Box>

</ThemeProvider>

  );
};
