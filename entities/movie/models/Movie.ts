export interface Movie {
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  poster_path: string
  media_type: 'movie'
  adult: false
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
