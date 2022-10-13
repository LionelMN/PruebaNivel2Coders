export interface MovieI {
  "adult": boolean,
  "backdrop_path": string,
  "belongs_to_collection": {
    "id" : string,
    "name" : string,
    "poster_path" : string,
    "backdrop_path" : string,
  },
  "budget": number,
  "genres": {
    "id": string,
    "name": string
  }[],
  "homepage": string,
  "id": string,
  "imdb_id": string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "production_companies": {
    "id": string,
    "logo_path": string,
    "name": string,
    "origin_country": string
  }[],
  "production_countries": {
    "iso_3166_1": string,
    "name": string
  }[],
  "release_date": Date,
  "revenue": number,
  "runtime": number,
  "spoken_languages": [],
  "status": string,
  "tagline": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}
