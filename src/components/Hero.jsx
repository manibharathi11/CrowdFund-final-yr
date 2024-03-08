import { setGlobalState, useGlobalState } from "../store";
import Typewriter from "typewriter-effect/dist/core";
const Hero = () => {
  const [stats] = useGlobalState("stats");

  return (
    <div className="text-center bg-gray-900 text-white py-24 px-6">
      <h1
        className="text-2xl md:text-3xl xl:text-4xl font-bold
      tracking-tight mb-9"
      >
        <span className="capitalize">
          Fundraising for the people and causes you care about
        </span>
        <br />
        <span className=" text-green-600">CryptoFund💚</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-green-700"
          onClick={() => setGlobalState("createModal", "scale-100")}
        >
          Create Campaign
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-green-600
        font-medium text-xs leading-tight uppercase text-green-600
        rounded-full shadow-md bg-transparent hover:bg-green-700
        hover:text-white"
        >
          Donate Funds
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-xl w-full rounded-md"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Campaigns</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border rounded-xl shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Contributors</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border rounded-xl shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
