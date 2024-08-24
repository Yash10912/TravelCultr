import React from "react";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src="/favoriteart.jpg" alt="" className="rounded md:w-10/12" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Destination Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
        Embark on a voyage with us as we uncover the hidden gems of every corner of the globe, from bustling metropolises to remote villages untouched by time.
        </p>
        {/* stats */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">8000+</h3>
            <p className="text-base">Registered Travel Hosts</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">5000+</h3>
            <p className="text-base">Emerging Influences</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">12000+</h3>
            <p className="text-base">Travellers</p>
          </div>
        </div>

        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 roundedhover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
