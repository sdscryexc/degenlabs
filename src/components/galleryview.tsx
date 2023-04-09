import { Card,Row, Col, Container } from "react-bootstrap";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


function GalleryView({nfts}) {
    return (
      <Container >
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
          {nfts.map((metadata, index) => (
          <div  style={{padding:'5wv'}}  key={index} >
            <Card
              className="imageGrid"
             
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
                <Card.Title style={{ color: "#fff",display:'flex',justifyContent:'center', textAlign:'center' }}>
                <Typography sx={{fontSize: 'large'}}>{metadata?.name}<br></br>Level{nfts[index]?.attributes[0]?.value}</Typography>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
      ))}
        </Box>
      </Container>
    );
}
export default GalleryView;