import create, { State } from 'zustand'
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

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
  const MY_WALLET_ADDRESS = "EpUafgip3NRLoqjCdkDNXZhWoF6ZaerSH4dJPwfyFe3r";
  const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

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
  /*
    // Output

    Found 2 token account(s) for wallet FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T: 
    -- Token Account Address 0:  H12yCcKLHFJFfohkeKiN8v3zgaLnUMwRcnJTyB4igAsy --
    Mint: CKKDsBT6KiT4GDKs3e39Ue9tDkhuGUKM3cC2a7pmV9YK
    Amount: 1
    -- Token Account Address 1:  Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb --
    Mint: BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf
    Amount: 3
  */
})();
export default useUserSOLBalanceStore;
export {amount_envy, amount_gluttony, amount_greed, amount_lust, amount_pride, amount_sloth, amount_wrath};


