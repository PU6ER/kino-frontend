import { Link } from 'react-router-dom'
import { IMovie } from '../../types/movie.types'
import './Card.scss'
interface ICardProps {
	movie: IMovie
}

const Card = ({ movie }: ICardProps) => {
	return (
		<div className='card'>
			<Link to={`/movie/${movie.id}`} className='link'>
				<img
					key={`poster-${movie.id}`}
					src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
					className='card__poster'
					width={300}
					height={400}
				/>

				<span className='vote'>{Math.floor(movie.vote_average * 10) / 10}</span>
			</Link>
			<div className='card__footer'>
				<div className=''>
					<div className='title-wrapper'>
						<span className='title'>{movie.title}</span>
					</div>
					<span className='release'>{movie.release_date.slice(0, 4)}</span>
				</div>
			</div>
		</div>
	)
}

export default Card
