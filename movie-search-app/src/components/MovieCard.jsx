import React from "react";

function MovieCard({ movieData }) {
  if (!movieData) {
    return null;
  }

  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={movieData.Poster}
          alt={`${movieData.Title} Poster`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movieData.Title}</div>
          <p className="text-gray-700 text-base">{movieData.Plot}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {movieData.Type}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {movieData.Genre}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {movieData.Year}
          </span>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            <span className="font-bold">Director:</span> {movieData.Director}
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Actors:</span> {movieData.Actors}
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Country:</span> {movieData.Country}
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Language:</span> {movieData.Language}
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Runtime:</span> {movieData.Runtime}
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Released:</span> {movieData.Released}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
