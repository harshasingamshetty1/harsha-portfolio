import React from "react";
import { Link } from "react-router-dom";
import SOC from "../assets/portfolio/socn.png";
import crowdcoin from "../assets/portfolio/cc.png";
import cryptoverse from "../assets/portfolio/cverse.png";
import calc from "../assets/portfolio/calc.png";
import p_website from "../assets/portfolio/p_website.png";
import marketplace from "../assets/portfolio/marketplace.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: SOC,
      title: "Sign On Chain",
      demo: "https://sign-on-chain-nu.vercel.app/",
      code: "https://github.com/harshasingamshetty1/sign-on-chain",
      description:
        "Sign on Chain, is an on-chain document acknowledgment platform, enabling users to upload files and request signatures using wallet addresses.\n Implemented a secure system where signatures are stored on IPFS as NFTs.\n Developed a user-friendly feature allowing users to send e-signature requests directly via email.\n Ensured checks which restrict the signing to only the intended recipient's wallet address of the signature request ",
    },
    {
      id: 2,
      src: crowdcoin,
      title: "CrowdCoin",
      demo: "https://crowd-coin-chi.vercel.app/",
      code: "https://github.com/harshasingamshetty1/CrowdCoin",
      description:
        "Crowd Coin, is a dynamic crowdfunding platform that allows users to create campaigns, articulating their causes and objectives.\n Any user can contribute ETH to campaigns, becoming donors/investors in support of the stated cause.\n campaign owners can request fund withdrawals, subject to approval by at least 50% of the donors, ensuring trust and safeguarding against fraudulent campaigns. \n Thus the platform enhances the credibility of the platform for both campaign creators and contributors. ",
    },
    {
      id: 3,
      src: cryptoverse,
      title: "Cryptoverse",
      demo: "https://cryptoverse-sigma-drab.vercel.app/",
      code: "https://github.com/harshasingamshetty1/Cryptoverse",
      description:
        "Cryptoverse, is a comprehensive crypto information hub providing users with real-time data on coin prices, market capitalization, trading volumes, market ranks, and more. \n Implemented user-friendly Saved Coins page, enabling users to closely monitor and manage their selected coins, enhancing their crypto investment journey.",
    },
    {
      id: 4,
      src: calc,
      title: "Calculator",
      demo: "https://react-caclulator.vercel.app/",
      code: "https://github.com/harshasingamshetty1/react-caclulator",
      description:
        "React calculator without using any external libraries for calculations \n Built using React, Hooks, and plain CSS",
    },

    {
      id: 5,
      src: marketplace,
      title: "NFT Marketplace",
      demo: "https://nft-marketplace-pink-one.vercel.app/",
      code: "https://github.com/harshasingamshetty1/NFT-Marketplace",
      description:
        "This isan NFT marketplace that empowers users to mint their own NFTs by setting prices and uploading images, securely stored on IPFS as NFTs \n Users can seamlessly list and purchase NFTs, enhancing accessibility to the world of digital collectibles. \n Implemented a user-friendly profile section, providing users with a comprehensive overview of their NFT holdings, including a calculated total value based on their wallet address.",
    },
    {
      id: 6,
      src: p_website,
      title: "Portfolio Website",
      demo: "https://harsha-portfolio-chi.vercel.app/",
      code: "https://github.com/harshasingamshetty1/harsha-portfolio",
      description:
        "Personal portfolio website showcasing personal information, social links,projects developed.\n Built using React and made completely mobile responsive design with Tailwind CSS.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full max-md:pt-24 bg-gradient-to-b from-black to-gray-800  "
    >
      <div className="flex max-w-screen-lg mx-auto flex-col w-full  justify-center   text-white">
        <div className="ml-4">
          <div className="  ">
            <p className="text-4xl inline  border-b-4 border-gray-500 font-bold">
              Portfolio{" "}
            </p>
          </div>
          <p className="my-10">Check out some of my work right here</p>
        </div>
        <div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:mx-4 mx-16">
            {portfolios.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col shadow-gray-600 mb-4 shadow-md rounded-md"
                >
                  <Link
                    to={`/${item.id}`}
                    state={{ item }}
                    className="cursor-pointer    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="relative w-full h-0"
                      style={{ paddingBottom: "70%" }}
                    >
                      <img
                        src={item.src}
                        alt={item.src}
                        className="absolute inset-0 rounded-md hover:scale-105 duration-200 hover:cursor-pointer object-cover w-full h-full"
                      />
                    </div>
                  </Link>
                  <div className="flex justify-center text-md  shadow-gray-600 shadow-sm font-bold py-4">
                    <p>{item.title}</p>
                  </div>
                  <div className="flex">
                    <a
                      className="w-1/2 m-4 p-2 flex justify-center "
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="hover:scale-105 duration-200 ">
                        Demo
                      </button>
                    </a>
                    <a
                      className="w-1/2 m-4 p-2 flex justify-center "
                      href={item.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="hover:scale-105 duration-200 ">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
