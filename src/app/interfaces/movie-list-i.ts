import { MovieI } from './movie-i';

export interface MovieListI {
  "page": number,
  "results": MovieI[],
  "total_pages": number,
  "total_results": number
}
