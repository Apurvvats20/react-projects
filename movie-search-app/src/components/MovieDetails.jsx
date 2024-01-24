import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

function MovieDetails() {
  const apiKey = "ff58154f&s";
  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [fav, setFav] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const currentData = () => {
    const startIndex = (currentPage - 1) * Number(itemsPerPage);
    const endIndex = Number(startIndex) + Number(itemsPerPage);
    return movieData.slice(startIndex, endIndex);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchMovieData = async (e) => {
    e.preventDefault();
    const joinedSearchValue = searchValue.split(" ").join("+");
    const apiEndPoint = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}=${joinedSearchValue}`;

    try {
      setLoading(true);
      const response = await fetch(apiEndPoint);
      const parsedMovieData = await response.json();
      setMovieData(parsedMovieData.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovieData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setItemsPerPage(4);
  }, [movieData]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    localStorage.setItem("Favourites", JSON.stringify(fav));

    console.log(`watchlist : ${localStorage.getItem("watchlist")}`);
    console.log(`Favourites : ${localStorage.getItem("Favourites")}`);
  }, [watchlist, fav]);

  const addToWatchList = async (movieid) => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=ff58154f&i=${movieid}`
    );
    let parsedData = await response.json();
    setWatchlist((prevWatchlist) => [...prevWatchlist, parsedData]);
  };

  const addToFav = async (movieid) => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=ff58154f&i=${movieid}`
    );
    let parsedData = await response.json();
    setFav((prev) => [...prev, parsedData]);
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <form className="mb-4" onSubmit={fetchMovieData}>
        <label
          className="block mb-2 text-sm font-medium text-black m-1"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Search for your favorite movies
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
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-white p-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-between items-center mt-4 mb-4">
        <div className="flex items-center">
          <span className="mr-2">Movies per page:</span>
          <input
            type="number"
            className="bg-white border border-gray-300 text-gray-900 rounded p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={itemsPerPage}
            onChange={(e) => {
              setCurrentPage(1);
              setItemsPerPage(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Previous
        </button>
        {movieData.length === 0 ? (
          <div className="text-xl font-bold">
            Page 0 of {Math.ceil(movieData.length / itemsPerPage)}
          </div>
        ) : (
          <div className="text-xl font-bold">
            Page {currentPage} of {Math.ceil(movieData.length / itemsPerPage)}
          </div>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(movieData.length / itemsPerPage)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center w-full">
          <Loader />
        </div>
      ) : movieData.length === 0 ? (
        <p className="m-1 uppercase">No results found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentData().map((movie) => (
            <MovieCard
              key={movie.imdbID}
              className="mb-8"
              movieData={movie}
              addToWatchList={() => addToWatchList(movie.imdbID)}
              addToFav={() => addToFav(movie.imdbID)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
