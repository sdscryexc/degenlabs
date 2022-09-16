// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { amount_wrath, amount_envy, amount_gluttony, amount_greed, amount_lust, amount_pride, amount_sloth } from '../../stores/useUserSOLBalanceStore';





export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()


  console.log(`amount_wrath: ${amount_wrath}`);

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFFFFF] to-[#8B0000]">
          DEGENBOTS WAR INTERFACE <span className='text-sm font-normal align-top text-slate-700'>v{pkg.version}</span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p> .</p>
          7 REALMS fighting for the REV SHARE.
        </h4>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p> .</p>
          WHO WILL WIN THIS WEEK?.
        </h4>
               
          <div className="text-center">
          <div>
          WRATH {amount_wrath}
          </div>
          <div>
          GREED {amount_greed}
          </div>
          <div>
          GLUTTONY {amount_gluttony}
          </div>
          <div>
          SLOTH {amount_sloth}
          </div>
          <div>
          LUST {amount_lust}
          </div>
          <div>
          ENVY {amount_envy}
          </div>
          <div>
          PRIDE {amount_pride}
          </div>
        </div>
      </div>
    </div>
  );
};
