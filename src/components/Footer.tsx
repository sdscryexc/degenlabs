import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="text-center">
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer bg-white text-neutral-content">

                
                    <div>
                        <p className="text-center font-light cursor-default text-red-600 ">
                            Powered by
                        </p>
                        <a
                            rel="noreferrer"
                            href="https://twitter.com/skullbotswhales"
                            target="_blank"
                            className=" text-center font-bold text-red-600 transition-all duration-200"
                        >
                            SKULLBOTS WHALE FOUNDATION
                        </a>
                    </div>
         
            </footer>
        </div>
    );
};
