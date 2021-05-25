import { useState, useEffect } from "react"
import { RowProps } from "./types"
import { axiosInstance } from "./axios"
import "./styles.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const BASE_URL = "https://image.tmdb.org/t/p/original/"

export const Row = (props: RowProps) => {
  const { title, fetchUrl, isLargeRow } = props
  const [movies, setMovies] = useState<any[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axiosInstance.get(fetchUrl)
        setMovies(request.data.results)
        return request
      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // autoplay: 0,
    },

  }

  const handleClick = (movie: any) => {
    console.log(movie)

    const movieYear = movie.release_date ? parseInt(movie.release_date.split('-').slice(0, 1).join('-')) : null

    const movieTitle = movie.title || movie.name

    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movieTitle, movieYear)
        .then(setLoading(true))
        .then((url: any) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
          setLoading(false)
        }).catch((error: any) => console.log(error))
    }
  }

  return (
    <div className="row">

      <h3>{title}</h3>
      <div className="row__posters">
        {loading &&
          <div className="overlay">
            <div className="loader" />
          </div>}

        {movies && movies.map((movie) => {

          return (

            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              // src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              src={`${BASE_URL}${movie.poster_path}`}
              alt={`${movie.title} poster`}
              onClick={() => handleClick(movie)}
            />

          )
        })}

      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}