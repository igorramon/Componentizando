import { MovieCard } from './MovieCard'
import { Header } from './Header';
import '../styles/content.scss';


interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>,
  selectedGenre: {
    title: string;
  }
}

export function Content(props: ContentProps) {
  return (
    <>
      <Header title={props.selectedGenre.title} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  )
}