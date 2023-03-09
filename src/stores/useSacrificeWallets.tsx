import create, { State } from 'zustand'
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as bs58 from "bs58";
import {transactions} from "./transactions";

/*interface UserSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void
}*/
let amount_bonk:number;
let amount_deds:number;
let amount_mob:number;
let amount_fronk:number;
let amount_vault:number;
let amount_silver:number
let amount_dgen:number;
let amount_woop:number;
let amount_pogger:number;
let amount_luv:number;
let amount_exp:number;
let amount_trb:number;
let amount_catnip:number;
let amount_s7n:number;
let amount_glug:number;



let amount_greed_stake:number;
let amount_wrath_stake:number;
let amount_envy_stake:number;
let amount_gluttony_stake:number;
let amount_lust_stake:number;
let amount_sloth_stake:number
let amount_pride_stake:number;

const RPCurl = 'https://billowing-few-tree.solana-mainnet.discover.quiknode.pro/a873bf593f7be12ac32dd204328ac690cfd37765/';


function parseUint64Le(data, offset = 0) {
  let number = BigInt(0);
  for (let i = 0; i < 8; i++)
    number += BigInt(data[offset + i]) << BigInt(i * 8);
  return number;
}


interface UserSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void
}

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

export default useUserSOLBalanceStore;

let balance_trea : number = 0;
let balance_fee : number = 0;

(async () => {
  const sol_treasury = new PublicKey("Had1emGD3qmFRXeBUeBXPQqS8Wi7BLGLAZ7167d4aM1W");
  const connection = new Connection(RPCurl, "confirmed");
  
  const balance1 = await connection.getBalance(
    sol_treasury,
    'confirmed'
  )
  balance_trea = balance1 / LAMPORTS_PER_SOL;

  console.log(
    `BALANCE_TREA ${balance_trea.toFixed(2)}`
  );
  })();
  
  export{balance_trea};

  (async () => {
    const sol_treasury = new PublicKey("3z9qkHLuLJGd32LCPGNAXJAVNoAPgpTLdcHNhWQmH3B3");
    const connection = new Connection(RPCurl, "confirmed");
    
    const balance2 = await connection.getBalance(
      sol_treasury,
      'confirmed'
    )
    balance_fee = balance2 / LAMPORTS_PER_SOL;
  
    console.log(
      `BALANCE_FEE ${balance_fee.toFixed(2)}`
    );
    })();
    
    export{balance_fee};
  





   
      
      
      //Get Staked NFTs from Skullbots Staking site
      export function createStakeTokenActiveFilter(active = true) {
        return {
          memcmp: {
            offset: 72,
            bytes: bs58.encode([active ? 1 : 0]),
          },
        };
      }


    

      /*
      const connection = new Connection(RPCurl, "confirmed");     
      for (let i=0; i<transactions.length; i++) { 
        setTimeout(function() {  
      (async () => {
        //const ENVY = new PublicKey("9HeBEFWvSRTVkBvagV3PzdW2rtdbqPgSTcKzgvMPa6im");
        const stakeDataAccounts = await connection.getParsedTransaction(
          transactions[i]
          );
          /*stakeDataAccounts.map(async ({ account: { data } }) => {
            let timestamp = parseUint64Le(data, 0);
            let mint = new PublicKey(data.slice(40, 72))
            let owner = new PublicKey(data.slice(8,40))
          
            console.log(`Tokenaddress: ${mint} Owner ${owner}`);
              
          }),
    
          /*console.log(
            `LAST OWNER ${stakeDataAccounts.meta.preTokenBalances["0"]["owner"]} MINT ${stakeDataAccounts.meta.preTokenBalances["0"]["mint"]} `
          );

          for (let t=0; t<stakeDataAccounts.meta.preTokenBalances.length; t++) {
          console.log(
            `LAST OWNER, ${stakeDataAccounts.meta.preTokenBalances[t]["owner"]} , MINT, ${stakeDataAccounts.meta.preTokenBalances[t]["mint"]} , HASH, ${transactions[i]} `
          );
          };
           
      
       
        })();
   
      }, 500 * i);
      
      };
        
        
        */




(async () => {
  const SplTreasury = "3GQfja9iasuP97UUvHLTXVLK4hfbPUhUuvVDGuZ8sNtq";
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
            bytes: SplTreasury, // base58 encoded string
          },
        },
      ],
    }
  );

  console.log(
    `Found ${accounts.length} token account(s) for wallet ${SplTreasury}: `
  );
  accounts.forEach((account, i) => {
    console.log(
      `-- Token Account Address ${i + 1}: ${account.pubkey.toString()} --`
    );
    console.log(`Mint: ${account.account.data["parsed"]["info"]["mint"]}`);
    console.log(
      `Amount: ${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}`
    );
    if(account.pubkey.toString()=="28r1JY8gMM44pHWZWMSLcvkmiJqsoczMekuvdj22DRbG")
    amount_bonk =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="8Ao5ih8Anyi1f4udzXssispMmLTFcnL6twyZciqfgPgx")
    amount_fronk =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);
    
  });

})();
//export default useUserSOLBalanceStore;
export {amount_fronk, amount_bonk};


(async () => {
  const SplTreasury1 = "GL7hhMqBfbDd1w9NbNJh6VBcY8ecfdWp3sEZDoQrVkRv";
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
            bytes: SplTreasury1, // base58 encoded string
          },
        },
      ],
    }
  );

  console.log(
    `Found ${accounts.length} token account(s) for wallet ${SplTreasury1}: `
  );
  accounts.forEach((account, i) => {
    console.log(
      `-- Token Account Address ${i + 1}: ${account.pubkey.toString()} --`
    );
    console.log(`Mint: ${account.account.data["parsed"]["info"]["mint"]}`);
    console.log(
      `Amount: ${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}`
    );
    if(account.pubkey.toString()=="5Cvnuv7HFaUc75WEtLvevfh7P5MMZ9xNV37WNXcGzqPu")
    amount_deds =  account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"];
    
    if(account.pubkey.toString()=="EK4zRD3VxTvhvj2UWbwTwmUVDHZWWwuG1Gs1aEky9jaY")
    amount_mob =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);
    
    if(account.pubkey.toString()=="8ehcDEZfVd9FQufNwrN9nxsVwxasDfQigbXwZUNbf44a")
    amount_vault =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="8ZkDAJqy5piGNPNUKi44kyyGufLERXsG3Np9vj3ke31C")
    amount_silver =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="F9UrrdmUjVDqtCsXB6Vn2exF3d6UNGdUf9vzxPvLehoF")
    amount_dgen =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="7yEbWHoWcR5tue1yza6DdQvkJXm3yB27A2XGFCj3dNbd")
    amount_woop =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="HYAkZpECDrNoLDcppTPKb72q4uREpqTWu7b7fxfgewEV")
    amount_pogger =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="6yxGz5tnAeHHctkcDAFH4jnjvzGRJtF2uSEUVNpqRtza")
    amount_luv =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="HiDyHPrXqgDXNgCv64riqF8q161xDiYk9v4vjskP9Ato")
    amount_exp =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="AGFkYsMua1fQQgo9tdnYdxPi4sgJTpNMybfpfxHM6EqB")
    amount_trb =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="BbmTT32vwaDxWeNVjGyV1CEB1CsvSSEoNpB73vRnpZ8L")
    amount_catnip =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="5TG5k4GrTrt8NbfgemeFNUeobBoGy3aEgQRjx8qW85rg")
    amount_s7n =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

    if(account.pubkey.toString()=="FrpV11aJpcD73C1czpXez8By9BncFV6Q31kx3JEkca14")
    amount_glug =  Math.round(account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]);

  });

})();
export {amount_deds, amount_mob, amount_vault, amount_silver, amount_dgen, amount_woop, amount_pogger, amount_luv, amount_exp, amount_trb, amount_catnip, amount_s7n, amount_glug  };

