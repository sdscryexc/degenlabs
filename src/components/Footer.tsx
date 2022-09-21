import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="text-center">
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer bg-white text-neutral-content">

                
                    <div>
                       
                        <a
                            rel="noreferrer"
                            href="https://twitter.com/skullbotswhales"
                            target="_blank"
                            className=" text-center  text-black transition-all duration-200"
                        >
                            Powered by SKULLBOTS WHALE FOUNDATION
                        </a>
                    </div>
         
            </footer>
        </div>
    );
};
