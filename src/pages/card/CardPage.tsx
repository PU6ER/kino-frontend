import { useParams } from 'react-router-dom'
import { useMovie } from '../../hooks/useMovie'

import { useState } from 'react'
import SimilarList from '../../components/similar-list/SimilarList'
import './CardPage.scss'

const CardPage = () => {
	const { movieId } = useParams()
	const { data: movieData, isLoading } = useMovie(movieId ?? '')

	return (
		<div className='container'>
			{isLoading ? (
				<div className='loader' />
			) : (
				<div className='wrapper'>
					<img
						src={`https://image.tmdb.org/t/p/w1280/${movieData?.backdrop_path}`}
						width={'100%'}
						className='backdrop'
					/>

					<div className='container__details'>
						<div className='container__details__text'>
							<span className='container__details__text-title'>
								{movieData?.title}
							</span>
							<div className='container__details__text-second'>
								<span className='vote'>
									{Math.floor(movieData?.vote_average * 10) / 10}
								</span>
								<span>{movieData?.release_date.slice(0, 4)}</span>
								{movieData?.genres.map(genre => (
									<span>
										{genre.name.charAt(0).toLocaleUpperCase() +
											genre.name.slice(1).toLocaleLowerCase()}
									</span>
								))}
								<span>{movieData?.runtime} минут</span>
							</div>
							<div>{movieData?.overview}</div>
						</div>
					</div>
				</div>
			)}
			<SimilarList />
		</div>
	)
}

export default CardPage
