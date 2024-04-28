import { useParams } from 'react-router-dom'
import { useMovie } from '../../hooks/useMovie'

import './CardPage.scss'

const CardPage = () => {
	const { movieId } = useParams()
	const { data } = useMovie(movieId ?? '')
	console.log(data)
	return (
		<div className='container'>
			<img
				src={`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`}
				width={'100%'}
				height={''}
				className='backdrop'
			/>
			<div className='container__details'>
				<div className='container__details__text'>
					<span className='container__details__text-title'>{data?.title}</span>
					<div className='container__details__text-second'>
						<span>{Math.floor(data?.vote_average * 10) / 10}</span>
						<span>{data?.release_date.slice(0, 4)}</span>
						{data?.genres.map(genre => (
							<span>
								{genre.name.charAt(0).toLocaleUpperCase() +
									genre.name.slice(1).toLocaleLowerCase()}
							</span>
						))}
						<span>{data?.runtime} минут</span>
					</div>
					<div>{data?.overview}</div>
				</div>
			</div>
		</div>
	)
}

export default CardPage
