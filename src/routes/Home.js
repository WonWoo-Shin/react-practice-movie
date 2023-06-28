import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1 className="header">Movies</h1>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="main">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
