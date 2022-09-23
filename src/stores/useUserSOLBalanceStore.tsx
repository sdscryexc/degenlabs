import create, { State } from 'zustand'
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as bs58 from "bs58";

interface UserSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void
}
let amount_wrath:number;
let amount_envy:number;
let amount_gluttony:number;
let amount_greed:number;
let amount_lust:number;
let amount_sloth:number
let amount_pride:number;

let amount_greed_stake:number;
let amount_wrath_stake:number;
let amount_envy_stake:number;
let amount_gluttony_stake:number;
let amount_lust_stake:number;
let amount_sloth_stake:number
let amount_pride_stake:number;

const RPCurl = 'https://ssc-dao.genesysgo.net/';

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
    let balance = 0;
    try {
      balance = await connection.getBalance(
        publicKey,
        'confirmed'
      );
      balance = balance / LAMPORTS_PER_SOL;
    } catch (e) {
      console.log(`error getting balance: `, e);
    }
    set((s) => {
      s.balance = balance;
      console.log(`balance updated, `, balance);
    })
  },
}));

(async () => {
  const GREED = new PublicKey("HWvQYCs2PVqzojeLSV3cJDqBN3SKSrvc9KyKBmLLahHH");
  const connection = new Connection(RPCurl, "confirmed");

  let stakeDataAccounts = await connection.getProgramAccounts(
    GREED, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      dataSlice: {
        offset: 0,
        length: 0,
      },
      filters: [createStakeTokenActiveFilter()],
    });
    

    amount_greed_stake=stakeDataAccounts.length;
 

 
  })();
  export {amount_greed_stake};


  (async () => {
    const PRIDE = new PublicKey("uqr8EnUBim9nuFaLxrQXhsvYjTzzqz9pqRrtwfj6syC");
    const connection = new Connection(RPCurl, "confirmed");
  
    let stakeDataAccounts = await connection.getProgramAccounts(
      PRIDE, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
      {
        dataSlice: {
          offset: 0,
          length: 0,
        },
        filters: [createStakeTokenActiveFilter()],
      });
      
  
      amount_pride_stake=stakeDataAccounts.length;
   

   
    })();
    export {amount_pride_stake};


    (async () => {
      const LUST = new PublicKey("EuHyjTWeWAwhQxGa7pAmWypYh5NZ484N4GiLYYonnoQ6");
      const connection = new Connection(RPCurl, "confirmed");
    
      let stakeDataAccounts = await connection.getProgramAccounts(
        LUST, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        {
          dataSlice: {
            offset: 0,
            length: 0,
          },
          filters: [createStakeTokenActiveFilter()],
        });
        
    
        amount_lust_stake=stakeDataAccounts.length;
     
    
     
      })();
      export {amount_lust_stake};



      (async () => {
        const ENVY = new PublicKey("G9aio3ToS6SknjPTftq4XxxAPcCd95HK6jTEGehrVHzr");
        const connection = new Connection(RPCurl, "confirmed");
      
        let stakeDataAccounts = await connection.getProgramAccounts(
          ENVY, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
          {
            dataSlice: {
              offset: 0,
              length: 0,
            },
            filters: [createStakeTokenActiveFilter()],
          });
          
      
          amount_envy_stake=stakeDataAccounts.length;
       
     
       
        })();
        export {amount_envy_stake};



        (async () => {
          const GLUTTONY = new PublicKey("G66UbQdyq6FkyFyv3gfsZhDY1CagC5EcfjroNGTryxQL");
          const connection = new Connection(RPCurl, "confirmed");
        
          let stakeDataAccounts = await connection.getProgramAccounts(
            GLUTTONY, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
            {
              dataSlice: {
                offset: 0,
                length: 0,
              },
              filters: [createStakeTokenActiveFilter()],
            });
            
        
            amount_gluttony_stake=stakeDataAccounts.length;
         
  
         
          })();
          export {amount_gluttony_stake};



          (async () => {
            const WRATH = new PublicKey("5MGz9bqJd4nSjzPBXwMPXup5xALYfiNpNV67oYBRDhdA");
            const connection = new Connection(RPCurl, "confirmed");
          
            let stakeDataAccounts = await connection.getProgramAccounts(
              WRATH, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
              {
                dataSlice: {
                  offset: 0,
                  length: 0,
                },
                filters: [createStakeTokenActiveFilter()],
              });
              
          
              amount_wrath_stake=stakeDataAccounts.length;
           
    
           
            })();
            export {amount_wrath_stake};



            (async () => {
              const SLOTH = new PublicKey("73VXGs6Rs7aCQGDEDsfXcJtVfLCgxMh8cPJc5MnybvU6");
              const connection = new Connection(RPCurl, "confirmed");
            
              let stakeDataAccounts = await connection.getProgramAccounts(
                SLOTH, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
                {
                  dataSlice: {
                    offset: 0,
                    length: 0,
                  },
                  filters: [createStakeTokenActiveFilter()],
                });
                
            
                amount_sloth_stake=stakeDataAccounts.length;
             
     
             
              })();
              export {amount_sloth_stake};



              












 export function createStakeTokenActiveFilter(active = true) {
    return {
      memcmp: {
        offset: 72,
        bytes: bs58.encode([active ? 1 : 0]),
      },
    };
  }



(async () => {
  const MY_WALLET_ADDRESS = "EpUafgip3NRLoqjCdkDNXZhWoF6ZaerSH4dJPwfyFe3r";
  const connection = new Connection(RPCurl, "confirmed");

  const accounts = await connection.getParsedProgramAccounts(
    TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    {
      filters: [
        {
          dataSize: 165, // number of bytes
        },
        {
          memcmp: {
            offset: 32, // number of bytes
            bytes: MY_WALLET_ADDRESS, // base58 encoded string
          },
        },
      ],
    }
  );

  console.log(
    `Found ${accounts.length} token account(s) for wallet ${MY_WALLET_ADDRESS}: `
  );
  accounts.forEach((account, i) => {
    console.log(
      `-- Token Account Address ${i + 1}: ${account.pubkey.toString()} --`
    );
    console.log(`Mint: ${account.account.data["parsed"]["info"]["mint"]}`);
    console.log(
      `Amount: ${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}`
    );
    if(account.pubkey.toString()=="GLxVgrfLwrqTQrMRZ1o9HvMBqmfcc3eN6xeULXPBehcK")
    amount_wrath =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="AMFtxzhq97antgvFUM3xZMYmiZzCqhwnVz52TEecG4fk")
    amount_greed =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="7htoZbMJRbC5bXUQf1CKFqEKVCzAjKpyC1k1SpBRrqE9")
    amount_lust =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="FpTo6b48AuYidMcbcmy9DMsZoSMcZQxMXpZhAen6naok")
    amount_gluttony =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="7ubNKhZd62exoRJqDGC34M59uo4yzEXAn8oWDZK7D7hw")
    amount_pride =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="66y7PCozNwVUtwh21uD8Md818pW8KD2sWgrgohjsVnNL")
    amount_sloth =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="FRrz4zRn9LwFkTjDZUZD8imMA9YrKZ6Ao27x5Ru78AUQ")
    amount_envy =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
 
    //console.log(`amount_wrath: ${amount_wrath}`);
  });

})();
export default useUserSOLBalanceStore;
export {amount_envy, amount_gluttony, amount_greed, amount_lust, amount_pride, amount_sloth, amount_wrath};


