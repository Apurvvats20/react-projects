import React from "react";

function MovieCard({ movieData, addToWatchList, addToFav }) {
  if (!movieData) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg h-full w-full">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={movieData.Poster}
        alt={`${movieData.Title} Poster`}
      />
      <div className="p-6 h-full">
        <div className="font-bold text-xl mb-2">{movieData.Title}</div>
        <p className="text-gray-700 text-base mb-4">{movieData.Plot}</p>
        <div className="flex flex-wrap mb-4 justify-start">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {movieData.Type}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            {movieData.Year}
          </span>
          <button
            onClick={() => addToWatchList(movieData.imdbID)}
            className="text-xl mb-2 mt-2 bg-black text-white rounded-full px-3 py-1"
          >
            Add to Watchlist
          </button>
          <button
            onClick={() => addToFav(movieData.imdbID)}
            className="font-light text-xl mb-2 mt-2 bg-pink-200 rounded-full px-3 py-1"
          >
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
