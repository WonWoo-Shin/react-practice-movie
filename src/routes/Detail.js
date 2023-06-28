import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movie);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt="" />
          <h2>{movie.title}</h2>
          <p>{movie.description_intro}</p>
          <ul>
            {movie.genres.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
