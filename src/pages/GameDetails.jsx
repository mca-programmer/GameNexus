import React, { useEffect } from "react";
import { FaStar, FaWindows, FaCloudDownloadAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

// Format numbers as K/M
const formatNumber = (num) => {
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num;
};

const GameDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const game = data.find((g) => g.id === id);

  const handleWishlistBtn = () => {
    toast.success(`${game.title} added to your wishlist!`);
  };

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
    downloads,
    totalReviews,
  } = game;

  useEffect(() => {
    document.title = `${title} | GameNexus`;
  }, [title]);

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-0 mt-20 mb-30">
      <title>{title} | GameNexus</title>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-10 bg-linear-to-br rounded-2xl  from-[#0f0f0f] via-[#121212] to-[#191919] px-4 py-10  md:mx-auto border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <figure>
          <img
            className="rounded-2xl md:min-w-xl lg:min-w-2xl bg-[#0F1724]/70 backdrop-blur-md border border-[#B8FF00]/30 shadow-lg hover:shadow-[0_0_15px_#B8FF00] transition-all duration-300 hover:scale-[1.01]"
            src={coverPhoto}
            alt={title}
          />
        </figure>
        <div className="w-full">
          <h3 className="text-4xl font-bold mb-2">{title}</h3>
          <span className="text-[#B8FF00] badge badge-success badge-soft font-semibold">
            {category}
          </span>
          <div className="divider "></div>
          <div className="flex justify-between ">
            <span className="font-medium text-gray-400">Developer</span>
            <span className="font-medium ">{developer}</span>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Ratings</span>
            <span className="font-medium flex gap-1 items-center">
              <FaStar className="text-yellow-400" /> {ratings}
            </span>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Downloads</span>
            <span className="font-medium flex gap-1 items-center">
              <FaCloudDownloadAlt className="text-green-400" />{" "}
              {formatNumber(downloads)}
            </span>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Total Reviews</span>
            <span className="font-medium">{formatNumber(totalReviews)}</span>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Platform</span>
            <span className="font-medium flex gap-1 items-center">
              <FaWindows /> Windows
            </span>
          </div>
          <div className="divider"></div>
          <div className="flex flex-row justify-between gap-3">
            <div className="w-[50%]">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full  border  btn btn-soft btn-success hover:bg-green-800 hover:border-green-800 text-[#B8FF00] px-0"
              >
                Download
              </a>
            </div>
            <div className="w-[50%]">
              <button
                onClick={handleWishlistBtn}
                className="btn w-full  btn-outline border-[#B8FF00] text-[#B8FF00] hover:bg-[#B8FF00] hover:text-[#0F1724] px-0"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-linear-to-br rounded-2xl  from-[#0f0f0f] via-[#121212] to-[#191919] px-4 pb-4 py-5  md:mx-auto border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <h2 className=" text-2xl font-bold mb-3">About {title}</h2>
        <p className="text-gray-400 leading-relaxed text-[17px]">
          {description}
        </p>
      </div>
      <div className="bg-linear-to-br rounded-2xl  from-[#0f0f0f] via-[#121212] to-[#191919] px-4 py-10 mt-10  md:mx-auto border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <h2 className=" text-2xl font-bold mb-3"> System Requirements</h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-60 mt-5">
          <div className="space-y-3">
            <h4 className="font-semibold">Minimum</h4>
            <div>
              <p className="text-sm text-gray-400">OS version</p>
              <p className="">Windows 7 + (64Bit)</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">CPU</p>
              <p className="">Intel Core i5 6th gen / AMD FX 8XXX</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Memory</p>
              <p className="">8 GB RAM</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">GPU</p>
              <p className="">Nvidia GeForce GTX 970 / AMD Radeon RX 570</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">DirectX</p>
              <p className="">Version 12</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Storage</p>
              <p className="">85 GB available space</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Recommended</h4>
            <div>
              <p className="text-sm text-gray-400">OS version</p>
              <p className="">Windows 10 (64Bit)</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">CPU</p>
              <p className="">Intel Core i7 8th gen / Ryzen 7 1st gen</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Memory</p>
              <p className="">16 GB RAM</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">GPU</p>
              <p className="">Nvidia GeForce GTX 1070 / AMD RX 590</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">DirectX</p>
              <p className="">Version 12</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Storage</p>
              <p className="">85 GB available space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
