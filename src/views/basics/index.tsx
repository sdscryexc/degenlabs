
import { FC, useEffect, useState } from 'react';
import DbotsJson from '../../stores/Dbots.json';
import Gen0Json from '../../stores/Gen0.json';
import Gen1Json from '../../stores/Gen1.json';
import Gen2Json from '../../stores/Gen2.json';
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


  function getDBotKingsByaddress(name: string) {
    return DbotsJson.filter((d)=> d.Owner === name).map((res) => res.Kings)
  }

  function getGen0KingsByaddress(name: string) {
    return Gen0Json.filter((d)=> d.Owner === name).map((res) => res.Kings)
  }

  function getGen1KingsByaddress(name: string) {
    return Gen1Json.filter((d)=> d.Owner === name).map((res) => res.Kings)
  }

  function getGen2KingsByaddress(name: string) {
    return Gen2Json.filter((d)=> d.Owner === name).map((res) => res.Kings)
  }

  function getDBotsSacrificedByaddress (name: string) {
    return DbotsJson.filter((d)=> d.Owner === name).map((res) => res.Sacrificed)
  }

  function getEnvyDBotsSacrificedByaddress (name: string) {
    return DbotsJson.filter((d)=> d.Owner === name).map((res) => res.Envy)
  }

  function getGen0SacrificedByaddress (name: string) {
    return Gen0Json.filter((d)=> d.Owner === name).map((res) => res.Sacrificed)
  }

  function getGen1SacrificedByaddress (name: string) {
    return Gen1Json.filter((d)=> d.Owner === name).map((res) => res.Sacrificed)
  }
  
  function getGen2SacrificedByaddress (name: string) {
    return Gen2Json.filter((d)=> d.Owner === name).map((res) => res.Sacrificed)
  } 


  


  let DBotKings = getDBotKingsByaddress(wallet.publicKey?.toBase58());
  let Gen0Kings = getGen0KingsByaddress(wallet.publicKey?.toBase58());
  let Gen1Kings = getGen1KingsByaddress(wallet.publicKey?.toBase58());
  let Gen2Kings = getGen2KingsByaddress(wallet.publicKey?.toBase58());

 

  let DBots = Number(getDBotsSacrificedByaddress(wallet.publicKey?.toBase58())) + Number(getEnvyDBotsSacrificedByaddress(wallet.publicKey?.toBase58()));
  let Gen0 = Number(getGen0SacrificedByaddress(wallet.publicKey?.toBase58()));
  let Gen1 = Number(getGen1SacrificedByaddress(wallet.publicKey?.toBase58()));
  let Gen2 = Number(getGen2SacrificedByaddress(wallet.publicKey?.toBase58()));
  

  let DBotsnumb =Number(DBotKings);
  let Gen0numb =Number(Gen0Kings);
  let Gen1numb =Number(Gen1Kings);
  let Gen2numb =Number(Gen2Kings);

  let Kingssum = DBotsnumb + Gen0numb + Gen1numb + Gen2numb;

  let Demons = Number(Gen0) * 2 + Number(Gen1);

  

  console.log(
    `DbotsSacrificed ${DBots},  Gen2Sacrificed ${Gen2numb}`
  );

  console.log(
    `wallet ${wallet.publicKey?.toBase58()}`
  );


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
        <h2></h2>
        <p>
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
        <h2></h2>
        <p>
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
        <h2></h2>
        <p>
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
        <h2></h2>
        <p>
        </p>
      </div>
    </div>
  </div>
</div>





      
 <Box  sx={{marginTop : '5vh', display:'flex', flexDirection:'column', textAlign:'center', fontSize:'x-large' }}>

   Congratulations,<br></br> you have succesfully sacrificed <br></br> {DBots} Degenbots <br></br> {Gen0} Gen0 <br></br> {Gen1} Gen1 <br></br> {Gen2} Gen2<br></br> and are eligible to mint <br></br>
   {Kingssum} King Demons and <br></br> {Demons} Demons.

  </Box>
  <Box >
    

    </Box>

</ThemeProvider>

  );
};
