import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true); 
    const [movies, setMovies] = useState(true); 
    const getMovies = async() => {
      const json = await(
        await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      ).json()
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, [])
    console.log(movies)
    return(
      <div>
        {
          loading ? <strong>Loading...</strong> :
          <div>
            {movies.map(movie => 
              <Movie id={movie.id} key={movie.key} title={movie.title} medium_cover_image={movie.medium_cover_image} />
            )}
          </div>
        }
      </div>
    )
}

export default Home;