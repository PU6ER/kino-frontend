import { useParams } from 'react-router-dom'
import { useMovie } from '../../hooks/useMovie'

import './CardPage.scss'

const CardPage = () => {
	const { movieId } = useParams()
	const { data: movieData, isLoading } = useMovie(movieId ?? '')

	console.log('movieData', movieData)

	return (
		<div className='container'>
			{isLoading ? (
				<div className='loader' />
			) : (
				movieData && (
					<div className=''>
						<div className='wrapper'>
							<img
								src={`${movieData.backdrop.url}`}
								width={'100%'}
								className='backdrop'
							/>
							<img
								src={`${movieData.poster.url}`}
								width={'100%'}
								className='poster'
							/>

							<div className='container__details'>
								<div className='container__details__text'>
									<span className='container__details__text-title'>
										{movieData.name}
									</span>
									<div className='container__details__text-second'>
										<span className='vote'>
											{Math.floor(movieData.rating.kp * 10) / 10}
										</span>
										{/* <span>{movieData.release_date.slice(0, 4)}</span> */}
										<span>{movieData.year}</span>
										{movieData.genres.map(genre => (
											<span key={`1` + genre.name}>
												{genre.name.charAt(0).toLocaleUpperCase() +
													genre.name.slice(1).toLocaleLowerCase()}
											</span>
											// <span>{genre.name}</span>
										))}
										<span>{movieData.movieLength} минут</span>
									</div>
									<div className='links'>
										{movieData.watchability.items.map(item => (
											<a href={item.url} key={item.name}>
												<img src={item.logo.url} alt={item.name} />
												{/* <span>{item.name}</span> */}
											</a>
										))}
									</div>
									<div className='container__details__text-description'>
										{movieData.description}
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			)}
			{/* <div className='persons'>
				{movieData?.persons.map(person => (
					<div className='person'>
						<img src={person.photo} alt='' />
						<span>{person.name}</span>
						<span>{person.profession}</span>
					</div>
				))}
			</div> */}

			{/* <SimilarList /> */}
		</div>
	)
}

export default CardPage
