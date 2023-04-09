
import { FC, useEffect, useState } from 'react';
import DbotsJson from '../../stores/Dbots.json';
import Gen0Json from '../../stores/Gen0.json';
import Gen1Json from '../../stores/Gen1.json';
import Gen2Json from '../../stores/Gen2.json';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl, Cluster, Keypair } from '@solana/web3.js'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  collection: string,
  amount: number,
  
) {
  return { collection, amount };
}



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

  function getGen2KingshighByaddress(name: string) {
    return Gen2Json.filter((d)=> d.Owner === name).map((res) => res.Kingshigh)
  }

  function getGen2KingslowByaddress(name: string) {
    return Gen2Json.filter((d)=> d.Owner === name).map((res) => res.Kingslow)
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
  let Gen2Kingshigh = getGen2KingshighByaddress(wallet.publicKey?.toBase58());
  let Gen2Kingslow = getGen2KingslowByaddress(wallet.publicKey?.toBase58());
 

  let DBots = Number(getDBotsSacrificedByaddress(wallet.publicKey?.toBase58())) + Number(getEnvyDBotsSacrificedByaddress(wallet.publicKey?.toBase58()));
  let Gen0 = Number(getGen0SacrificedByaddress(wallet.publicKey?.toBase58()));
  let Gen1 = Number(getGen1SacrificedByaddress(wallet.publicKey?.toBase58()));
  let Gen2 = Number(getGen2SacrificedByaddress(wallet.publicKey?.toBase58()));
  

  let DBotsnumb =Number(DBotKings);
  let Gen0numb =Number(Gen0Kings);
  let Gen1numb =Number(Gen1Kings);
  let Gen2numb =Number(Gen2Kingshigh) + Number(Gen2Kingslow);
  let Gen2high =Number(Gen2Kingshigh);
  let Gen2low =Number(Gen2Kingslow);

  let Kingssum = DBotsnumb + Gen0numb + Gen1numb + Gen2numb;

  let Demons = Number(Gen0) * 2 + Number(Gen1) + Gen2high;

  const rows = [
    createData('Degenbots', DBots),
    createData('Gen0', Gen0),
    createData('Gen1', Gen1),
    createData('Gen2 (rare) ', Gen2high),
    createData('Gen2 (common)', Gen2low),
  ];
  





  console.log(
    `DbotsSacrificed ${DBots},  Gen2Sacrificed ${Gen2numb}`
  );

  console.log(
    `wallet ${wallet.publicKey?.toBase58()}`
  );


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop : '10vh',textAlign:'center', fontSize:'xxx-large' }}>
        Flex your demons
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





      
 <Box  sx={{marginTop : '5vh',alignItems:'center', display:'flex', flexDirection:'column', fontSize: 'large', textAlign:'center' }}>
 Congratulations , <br></br> you have succesfully sacrificed <br></br>

 <TableContainer component={Paper} sx={{ marginTop: '2vh', width: '60vw', justifyContent:'center' }}>
      <Table sx={{ width: '60vw', bgColor: '#181c1f' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{fontSize: 'large'}}>
            <TableCell align="center">Collection</TableCell>
            <TableCell align="center">Amount sacrificed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.collection}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.collection}
              </TableCell>
              <TableCell align="center">{row.amount}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   <br></br> You are eligible to mint {Kingssum} King Demons and <br></br> {Demons} Demons. <br></br>

  </Box>

</ThemeProvider>

  );
};
