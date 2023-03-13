
import { FC, useEffect, useState } from 'react';
import DbotsJson from '../../stores/Dbots.json';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl, Cluster, Keypair } from '@solana/web3.js'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import Item from '@mui/material/ListItem';
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import { Col, Row, Card} from "react-bootstrap";
import  Collections from "../../components/collections";
import GalleryView from "../../components/galleryview";
import { NextFetchEvent } from 'next/server';
 


let theme = createTheme();
theme = responsiveFontSizes(theme);


export const Coll: FC = ({ }) => {
 
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
let metadatas = [];

(async () => {
const nftArray = await getParsedNftAccountsByOwner({
  publicAddress,
  connection,
  serialization: true
});
console.log(nftArray);



const Biker = nftArray.filter(val => val.updateAuthority === "BL5U8CoFPewr9jFcKf3kE1BhdFS1J59cwGpeZrm7ZTeP")

console.log(Biker);
metadatas = await fetchMetadata(Biker);


})();



let nft;

const fetchMetadata = async (Biker) => {
  
  for (nft of Biker) {
  // console.log(nft);
    try {
      await fetch(nft.data.uri)
      .then((response) => response.json())
      .then((meta) => { 
        metadatas.push({...meta, ...nft});
      });
    } catch (error) {
      console.log(error);
    }
  }
  return metadatas;
};
console.log(metadatas)


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Row>
          (metadatas)
          {metadatas.map((metadata, index) => (
          <Col xs="12" md="6" lg="3" key={index}>
            <Card
              className="imageGrid"
              lg="3"
              style={{
                width: "100%",
                backgroundColor: "#2B3964",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src={metadata?.image}
                alt={metadata?.name}
              />
              <Card.Body>
                <Card.Title style={{ color: "#fff",display:'flex',justifyContent:'center' }}>
                  {metadata?.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
      ))}
        </Row>
      </Container>
</ThemeProvider>

  );
};
