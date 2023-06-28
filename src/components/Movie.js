import { Link } from "react-router-dom";

function Movie({ key, id, coverImg, title, summary, genres }) {
  return (
    <div key={key}>
      <img src={coverImg} alt="" />
      <h4>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h4>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
