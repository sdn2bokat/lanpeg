import React, { FC } from "react";

interface HeroSubProps {
    title: string;
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {
 
    return (
        <>
            <section className="bg-herosub-bg bg-no-repeat bg-cover">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                    <h2 className="text-white md:text-56 text-36 font-medium">{title}</h2>
                </div>
            </section>
        </>
    );
};

export default HeroSub;