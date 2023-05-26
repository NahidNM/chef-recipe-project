import React from 'react';
import { FaCheck } from "react-icons/fa";

const Addition = () => {
    return (
        <div>
            <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center md:gap-20 md:flex-row md:max-w-7xl">
          <div className="flex flex-col justify-center m-4 text-black transition ease-in bg-white rounded-lg shadow-xl min-h-96 hover:border-t-8 hover:border-r-8 hover:border-yellow-500 duration-400">
            <div className="md:m-8 h-96">
              <div className="m-2 ">Silver</div>
              <div className="m-2 text-3xl ">$3.99/Mo</div>
              <div className="m-2 mt-8 ">For Home</div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">1 contest</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">30 unique recipe</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">2 Exibition</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">~10,000$ prizemoney</div>
              </div>
              
            </div>
            <div className="flex justify-center">
              <div className="px-8 py-1 m-4 font-medium text-white cursor-pointer bg-stone-900 rounded-2xl hover:bg-white hover:text-stone-900">
                Subscribe
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center m-4 text-black transition ease-in bg-white rounded-lg shadow-xl min-h-96 hover:border-t-8 hover:border-r-8 hover:border-pink-500 duration-400">
            <div className="m-8 h-96">
              <div className="m-2 ">Gold</div>
              <div className="m-2 text-3xl ">$9.99/Mo</div>
              <div className="m-2 mt-8 ">For Mini business</div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">10 contest</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">100 Unique recipe</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">5 Exibition</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">~25,000$ prizemoney</div>
              </div>
              
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Weekly Backups</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Free E-mail</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-8 py-1 m-4 font-medium text-white cursor-pointer bg-stone-900 rounded-2xl hover:bg-white hover:text-stone-900">
                Subscribe
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center m-4 text-black transition ease-in bg-white rounded-lg shadow-xl min-h-96 hover:border-t-8 hover:border-r-8 hover:border-violet-500 duration-400">
            <div className="m-8 h-96">
              <div className="m-2 ">Diamond</div>
              <div className="m-2 text-3xl ">$14.99/Mo</div>
              <div className="m-2 mt-8 ">For Hotel</div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">100 websites</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">500 GB Storage</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">~100,000 Visits Monthly</div>
              </div>
              
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Daily Backups</div>
              </div>
              <div className="flex items-center">
              <FaCheck/>
                <div className="">Free E-mail</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-8 py-1 m-4 font-medium text-white cursor-pointer bg-stone-900 rounded-2xl hover:bg-white hover:text-stone-900">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Addition;