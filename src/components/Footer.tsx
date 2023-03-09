import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="text-center" style={{backgroundColor: '#181c1f', color:'white'}}>
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer  text-neutral-content">

                
                    <div>
                       
                        <a
                            rel="noreferrer"
                            href="https://twitter.com/skullbotswhales"
                            target="_blank"
                            className=" text-center  transition-all duration-200"
                        >
                            Powered by SKULLBOTS WHALE FOUNDATION
                        </a>
                    </div>
         
            </footer>
        </div>
    );
};
