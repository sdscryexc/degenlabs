// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store

import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js'


var lastowner = [];
var mint = [];

const RPCurl = 'https://billowing-few-tree.solana-mainnet.discover.quiknode.pro/a873bf593f7be12ac32dd204328ac690cfd37765/';
const connection = new Connection(RPCurl, "confirmed");
export function getlastholder(){
      var hash = (document.getElementById("hash") as HTMLInputElement).value;
      var hashdecimus = hash.split(",");
      
      for (let i=0; i<hashdecimus.length; i++) { 
        setTimeout(function() {  
      (async () => {
        //const ENVY = new PublicKey("9HeBEFWvSRTVkBvagV3PzdW2rtdbqPgSTcKzgvMPa6im");
        const stakeDataAccounts = await connection.getParsedTransaction(
          hashdecimus[i]
          );
          /*stakeDataAccounts.map(async ({ account: { data } }) => {
            let timestamp = parseUint64Le(data, 0);
            let mint = new PublicKey(data.slice(40, 72))
            let owner = new PublicKey(data.slice(8,40))
          
            console.log(`Tokenaddress: ${mint} Owner ${owner}`);
              
          }),*/
    
          /*console.log(
            `LAST OWNER ${stakeDataAccounts.meta.preTokenBalances["0"]["owner"]} MINT ${stakeDataAccounts.meta.preTokenBalances["0"]["mint"]} `
          );*/

          /*for (let t=0; t<stakeDataAccounts.meta.preTokenBalances.length; t++) {
          console.log(
            `LAST OWNER, ${stakeDataAccounts.meta.preTokenBalances[t]["owner"]} , MINT, ${stakeDataAccounts.meta.preTokenBalances[t]["mint"]} , HASH, ${hashdecimus[i]} `
          );
          lastowner.push(stakeDataAccounts.meta.preTokenBalances[t]["owner"]);

          lastowner[t] = stakeDataAccounts.meta.preTokenBalances[t]["owner"];
          mint[t] = stakeDataAccounts.meta.preTokenBalances[t]["mint"];
          document.getElementById("demo").innerHTML = lastowner.join("<br>"); */
          
          for (let t=0; t<stakeDataAccounts.meta.preTokenBalances.length; t++) {
            console.log(
              `LAST OWNER, ${stakeDataAccounts.meta.preTokenBalances[t]["owner"]} , MINT, ${stakeDataAccounts.meta.preTokenBalances[t]["mint"]} , HASH, ${hashdecimus[i]} `
            );
            lastowner.push(stakeDataAccounts.meta.preTokenBalances[t]["owner"]);
  
            lastowner[t] = stakeDataAccounts.meta.preTokenBalances[t]["owner"];
            mint[t] = stakeDataAccounts.meta.preTokenBalances[t]["mint"];
            document.getElementById("demo").innerHTML = lastowner.join("<br>");   


          };
           
      
       
        })();
   
      }, 500 * i);
      
      };
     
      };       
      console.log(
        `lastowner, ${lastowner[0]}`
      );
        




export const Decimus: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  console.log(
    `lastowner, ${lastowner[0]}`
  );
  

  return (
          <React.Fragment>
          <div style={{marginTop: '80px'}}>
          
          
          <Box>
    	    <Typography marginBottom='40px' marginTop="25px" variant="h3" align='center' color='darkred'  fontFamily= "montserrat">
          DECIMUS
          </Typography>
          <Typography marginBottom='40px' marginTop="25px" variant="h5" align='center' color='black'  fontFamily= "montserrat">
          
          <input type="text"  id="hash" placeholder="Enter hashlist" /><br></br>
          <button onClick={getlastholder}>Try it</button>
          
         
          <div>
          Holders <p>{lastowner[1]}</p>
          <p id="demo"></p>
          </div>

          </Typography>
   </Box>
   
  </div> 
  </React.Fragment>
  );
};




