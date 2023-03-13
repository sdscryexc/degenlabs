
import { useEffect, useRef, useState, FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import { Col, Row, Button, Form} from "react-bootstrap";
import AlertDismissible from '../../components/alert/alertDismissible';
import PreLoader from '../../components/preloader';
import Collections from '../../components/collections';
import GalleryView from '../../components/galleryview';
import { PublicKey, Connection } from '@solana/web3.js';

export const Coll: FC = ({ }) => {
  const { publicKey } = useWallet();
  const RPCurl = 'https://billowing-few-tree.solana-mainnet.discover.quiknode.pro/a873bf593f7be12ac32dd204328ac690cfd37765/';
  const connection = new Connection(RPCurl, "confirmed");
  const wallet = useWallet();
  // input ref
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // state change
  useEffect(() => {
    setNfts([]);
    setView("collection");
    setShow(false);
     if (publicKey) {
       inputRef.current.value = publicKey.toBase58();
     }
  }, [publicKey]);

  const [nfts, setNfts] = useState([]);
  const [view, setView] = useState('collection');
  //alert props
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  console.log(show);
  console.log(title);
  
  console.log(view);


  //loading props
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const getNfts = async (e) => {
    e.preventDefault();

    setShow(false);

    let address = inputRef.current.value;

    if (address.length === 0) {
      address = publicKey.toBase58();
    }

    if (!isValidSolanaAddress(address)) {
      setTitle("Invalid address");
      setMessage("Please enter a valid Solana address or Connect your wallet");
      setLoading(false);
      setShow(true);
      return;
    }

 
    setLoading(true);
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress: address,
      connection,
      
    });


    if (nftArray.length === 0) {
      setTitle("No NFTs found in " + title);
      setMessage("No NFTs found for address: " + address);
      setLoading(false);
      setView('collection');
      setShow(true);
      return;
    }

    const Biker = nftArray.filter(val => val.updateAuthority === "BL5U8CoFPewr9jFcKf3kE1BhdFS1J59cwGpeZrm7ZTeP");

    const metadatas = await fetchMetadata(Biker);


    setLoading(false);
    return setNfts(metadatas);
    
  };


  
  const fetchMetadata = async (Biker) => {
    let metadatas = [];
    for (const nft of Biker) {
      console.log(nft);
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
  console.log(nfts)
  console.log(nfts[0]?.attributes[9])
  return (
    <div>
      <div className="main" style={{marginTop:'15vh'}}>
        <Row className="inputForm">
          <Col lg="2"></Col>
          <Col xs="12" md="12" lg="5" style={{textAlign:'center'}}>
            <Form.Control
              type="text"
              ref={inputRef}
              placeholder="Wallet address"
            />
          </Col>
          <Col xs="12" md="12" lg="3" className="d-grid">
            <Button  type="submit" onClick={getNfts}>
              GET YOUR BIKERS
            </Button>
          </Col>
          <Col lg="1"></Col>
          <Col xs="12" md="12" lg="1">
            {view === "nft-grid" && (
              <Button
                
                variant="danger"
                onClick={() => {
                  setView("collection");
                }}
              >
                Close
              </Button>
            )}
          </Col>
        </Row>

        {loading ? (
          <div className="loading">
            <PreLoader  />
          </div>
        ) :  (
          <GalleryView nfts={nfts} />
        )}
        {show && (
          <AlertDismissible title={title} message={message} setShow={setShow} />
        )}
      </div>
    </div>
  );
}

export default Coll;
