import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="">
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer bg-neutral text-neutral-content">

                <div className="grid-flow-col gap-4 text-center pr-2">
                    <div>
                        <p className="text-white text-base font-light cursor-default ">
                            Powered by
                        </p>
                        <a
                            rel="noreferrer"
                            href="https://twitter.com/skullbotswhales"
                            target="_blank"
                            className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
                        >
                            SKULLBOTS WHALE FOUNDATION
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
