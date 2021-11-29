import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/home.css'
import Header from "./Header"
import Footer from "./Footer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Parallax, Background } from "react-parallax";

import logoMain from '../assets/imgs/logo-main.png';
import nftArt1 from '../assets/imgs/nft-art-sample1.png';
import nftArt2 from '../assets/imgs/nft-art-sample2.png';
import nftArt3 from '../assets/imgs/nft-art-sample3.png';
import nftArt4 from '../assets/imgs/nft-art-sample4.png';
import nftArt5 from '../assets/imgs/nft-art-sample5.png';
import bgMain from '../assets/imgs/starbg.png';

import item1 from '../assets/imgs/item1.png';
import item2 from '../assets/imgs/item2.png';
import item3 from '../assets/imgs/item3.png';
import item4 from '../assets/imgs/item4.png';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Home() {
    const [showMobileNav, setShowMobileNav] = React.useState(false);

    const viewButton = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
        <div className="body">
            <Header />
            <div className="banner-section" id="planmenu">
                <Parallax bgImage={bgMain} strength={500}>
                    <div className="text-center">
                        <img className="mb-2 logo-img" src={logoMain}></img>
                    </div>
                </Parallax>
                <div className=" text-center section-header">
                    <h2  style={{marginBottom: 0}}>WELCOME TO THE</h2>
                    <h2>SHARK BOY FIGHT CLUB</h2>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-7 col-md-7 mt-4 pr-4">
                            <div style={{textAlign: 'justify'}}>
                                SBFC is a collection of 8,888 exclusive Shark Boy generated Non Fungible Tokens (NFTS) - unique digital collectibles living on the Ethereum blockchain. You'll be able to purchase, trade, train and compete your Sharks here at the SBFC’s Fighterverse. 
                            </div>
                            <div className="mt-4" style={{textAlign: 'justify'}}>
                                Your SBFC NFTS double as your membership card, and grants access to the exclusive SBFC Merch and parties.Join our discord channel for pre-sale date and start getting your Sharks trained for $LOX to later use in our game. We love our community. See you in the Fighterverse.
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 mt-4 text-center v-center">
                            <img className="nft-img" src={nftArt1}></img>
                        </div>
                    </div>
                    <div className="p-3 mt-5" style={{backgroundColor: "yellow"}}>
                        <div className="text-center" style={{color: "black"}}>
                            <h2 className="bold" >PUBLIC SALE STARTING SOON</h2>
                            <div style={{fontWeight: "bold"}}>FOLLOW OUR DISCORD CHANNEL TO JOIN OUR PRE-SALE EVENT.</div>
                            <div style={{fontWeight: "bold"}}>https://discord.com/invite/SharkBoyFC/</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3">
                            <div className="text-center">
                                <img src={item1}></img>
                                <div className="m-3">8,888 SBFC Tokens</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="text-center">
                                <img src={item2}></img>
                                <div className="m-3">Ownership and commercial usage rights given to the consumer over their NFT</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="text-center">
                                <img src={item3}></img>
                                <div className="m-3">Fair Launch, fair distribution: All Sharks are equal!</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="text-center">
                                <img src={item4}></img>
                                <div className="m-3">Roadmap to Fighterverse</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section1 mt-5" id="roadmapmenu">
                    <div className="container">
                        <div className="section-header">
                            <h2>ROADMAP</h2>
                            <div className="head-info">The end goal is to build our very own Fighterverse for us Sharks to play to earn and compete.</div>
                        </div>
                        <div>
                            
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 percentage">0%</div>
                            <div className="col-md-10 mt-1">Fair Launch, fair distribution: Join discord for pre-sale info</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 percentage">15%</div>
                            <div className="col-md-10 mt-1">5 very rare Sharks will be airdropped to random early Sharksholders.</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 percentage">30%</div>
                            <div className="col-md-10 mt-1">Member-Exclusive SBFC x CDG Merch unlocked, featuring Limited tees, hoodies, and digital drops.</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 percentage">60%</div>
                            <div className="col-md-10 mt-1">Training room unlocked. Sharksholders can start training their sharks for $LOX. You will want to earn as much $LOX as you can to later use in the SBFC’s Fighterverse.</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 percentage">80%</div>
                            <div className="col-md-10 mt-1">Community Token launched. $CAVIAR will be airdropped to each Sharksholder. It will serve as our community token for the top contributors. </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 percentage">100%</div>
                            <div className="col-md-10 mt-1">Fighterverse Grand Opening. Welcome to SBFC.</div>
                        </div>
                    </div>
                </div>

                <div className="section2 mt-5" id="teammenu">
                    <div className="container">
                        <div className="section-header">
                            <h2>THE TEAM</h2>
                        </div>
                        <div className="text-center">
                            One day, 4 friends who grows up playing video game & watching Japanese animation(+ tons of Coachella and EDM Festivals :P) decided to have some fun in the NFT world. Start out with some random sketches on bar napkins, turnt into a collection of Shark Boy NFTS.
                        </div>
                        <div className="text-center">
                            Our team strongly believes in our community. We welcome all ideas and suggestions for the project, and are open to adding more members to the team to expand our never ending Fighterverse. Join our discord for more info.
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-3 pr-8 text-center mt-4">
                                <img className="nft-img" src={nftArt2}/>
                                <div className="team-name">FUrexx</div>
                                <div>Beat everyone at Street Fighter but sucks at Mortal Kombat</div>
                            </div>
                            <div className="col-md-3 pr-8 text-center mt-4">
                                <img className="nft-img" src={nftArt3}/>
                                <div className="team-name">L30n4rd0384</div>
                                <div>Spent all this money on Pokemon cards.</div>
                            </div>
                            <div className="col-md-3 pr-8 text-center mt-4">
                                <img className="nft-img" src={nftArt4}/>
                                <div className="team-name">MiniDidi</div>
                                <div>Always have a tons of sketchbooks around(except the day we came up with our NFT idea which was born on a few pieces of bar napkins)</div>
                            </div>
                            <div className="col-md-3 text-center mt-4">
                                <img className="nft-img" src={nftArt5}/>
                                <div className="team-name">JungHoV</div>
                                <div>Been building Blockchain apps since 2017. $0 in his bank account but a lot of zeros in his crypto wallet.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Home;