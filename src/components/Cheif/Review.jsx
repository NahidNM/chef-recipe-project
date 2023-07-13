import Marquee from "react-fast-marquee";
import food1 from "../../../public/img/review/food-1.jpg"
import food2 from "../../../public/img/review/food-2.jpg"
import food3 from "../../../public/img/review/food-3.jpg"

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    return (
        <div className="container">
        <h2 className="my-5 text-5xl text-center">Food Reviews</h2>
      <Marquee>
        <div className="shadow-xl card w-96 h-60 bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src={food1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Kate Johnson</h2>
            <p className="flex text-orange-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
            
          </div>
        </div>
        <div className="shadow-xl card w-96 h-60 bg-base-100 ms-5">
          <figure className="px-10 pt-10">
            <img
              src={food2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Ramson Gorday</h2>
            <p className="flex text-orange-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
            
          </div>
        </div>
        <div className="shadow-xl card w-96 h-60 bg-base-100 ms-5">
          <figure className="px-10 pt-10">
            <img
              src={food3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Donald Mark</h2>
            <p className="flex text-orange-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
            
          </div>
        </div>
      </Marquee>
    </div>
    );
};

export default Review;