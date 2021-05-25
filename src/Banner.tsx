import { useState, useEffect } from "react"
import { axiosInstance } from "./axios"
import { requests } from "./requests"

export const Banner = () => {
  const [randomMovie, setRandomMovie] = useState<any>([])

  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals)
      const randomMovie = request.data.results[Math.floor(Math.random() * request.data.results.length)]
      setRandomMovie(randomMovie)
      return request
    }
    fetchData()
  }, [])

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <header
      className="banner"
      style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")` }}>
      <div className="banner__contents">
        <h2 className="banner__title">
          {randomMovie?.title || randomMovie?.name || randomMovie?.original_name || randomMovie?.original_title}</h2>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">{truncate(randomMovie?.overview, 150)}</h2>
      </div>
      <div className="banner--fadeBottom" />

    </header>
  )
}