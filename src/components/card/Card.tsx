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
					src={`${movie.poster.previewUrl}`}
					className='card__poster'
					
				/>

				<span className='vote'>{Math.floor(movie.rating.kp * 10) / 10}</span>
			</Link>
			<div className='card__footer'>
				<div className=''>
					<div className='title-wrapper'>
						<span className='title'>{movie.name}</span>
					</div>
					{/* <span className='release'>{movie.release_date.slice(0, 4)}</span> */}
					<span className='release'>{movie.year}</span>
				</div>
			</div>
		</div>
	)
}

export default Card
