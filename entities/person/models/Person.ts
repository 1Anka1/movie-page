import type { Movie } from '../../movie/models/Movie'

export interface Person {
  id: number
  original_name: string
  media_type: 'person'
  adult: boolean
  name: string
  popularity: number
  gender: number
  known_for_department: string
  profile_path: string | null
  known_for: Movie[]
}
