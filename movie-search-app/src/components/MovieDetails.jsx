import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieDetails() {
  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState(null);

  const fetchMovieData = async (e) => {
    e.preventDefault();
    const joinedSearchValue = searchValue.split(" ").join("+");
    const apiEndPoint = `http://www.omdbapi.com/?i=tt3896198&apikey=ff58154f&t=${joinedSearchValue}`;

    try {
      const response = await fetch(apiEndPoint);
      const parsedMovieData = await response.json();
      setMovieData(parsedMovieData);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovieData(null);
    }
  };

  return (
    <div className="container mx-auto mt-10 flex flex-col md:flex-row">
      {/* Search Box */}
      <div className="md:w-1/3 p-4 bg-gray-100 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
        <form>
          <label
            className="block mb-2 text-sm font-medium text-black dark:text-white"
            style={{ color: "black" }}
          >
            Search your movies here
          </label>
          <div className="flex">
            <input
              type="text"
              className="flex-1 bg-white border border-gray-300 text-gray-900 rounded-l-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter movie title to search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-white p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={fetchMovieData}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Movie Details */}
      <div className="md:w-2/3 p-4 bg-gray-200 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        {movieData && <MovieCard className="m-2" movieData={movieData} />}
      </div>
    </div>
  );
}

export default MovieDetails;
