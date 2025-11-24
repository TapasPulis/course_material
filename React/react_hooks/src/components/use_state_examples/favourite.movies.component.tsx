import { useState } from "react";

const FavouriteMovies = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const [movie, setMovie] = useState<string>("");

  const addMovie = () => {
    if (!movie.trim()) return;

    setMovies([...movies, movie]);
    setMovie("");
  };

  const removeMovie = (title: string) => {
    setMovies(movies.filter((m) => m !== title));
  };

  return (
    <div>
      <h2>🎬 Favourite Movies</h2>
      <input
        value={movie}
        type="text"
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>

      {movies.length > 0 && (
        <div className="">
          <ul>
            {movies.map((mov, i) => (
              <li key={i}>
                {mov}{" "}
                <button onClick={() => removeMovie(mov)}>❌ Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavouriteMovies;
