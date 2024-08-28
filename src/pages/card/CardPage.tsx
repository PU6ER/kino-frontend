import { useParams } from 'react-router-dom'
import { useMovie } from '../../hooks/useMovie'

import { BookMarked, BookMinus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useReviews } from '../../hooks/useReviews'
import { checkBookmark } from '../../utils/checkBookmark'
import { toggleFavorite } from '../../utils/toggleFavorite'
import './CardPage.scss'

const CardPage = () => {
	const { movieId } = useParams()
	const { data: movieData, isLoading: isMovieDataLoading } = useMovie(
		movieId ?? ''
	)
	const { data: reviewData, isLoading: isReviewsDataLoading } = useReviews(
		movieId ?? ''
	)

	const [isFavorite, setIsFavorite] = useState<boolean>(
		checkBookmark(Number(movieId))
	)

	useEffect(() => {
		setIsFavorite(checkBookmark(Number(movieId)))
	}, [movieId])

	const handleToggleFavorite = () => {
		toggleFavorite(Number(movieId))
		setIsFavorite(prevState => !prevState)
	}

	console.log('movieData', movieData)
	console.log('reviewData', reviewData)

	return (
		<div className='container'>
			{isMovieDataLoading ? (
				<div className='loader' />
			) : (
				movieData && (
					<div className='wrapper'>
						{/* <img
								src={`${movieData.backdrop.url}`}
								width={'100%'}
								className='backdrop'
							/> */}
						<div className='container__left'>
							<img
								src={`${movieData.poster.url}`}
								width={'100%'}
								className='poster'
							/>
							<button className='bookmark' onClick={handleToggleFavorite}>
								{isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
								{isFavorite ? (
									<BookMinus size={20} />
								) : (
									<BookMarked size={20} />
								)}
							</button>
						</div>

						<div className='container__details'>
							<div className='container__details__text'>
								<span className='container__details__text-title'>
									{movieData.name}
								</span>
								{/* <span className='container__details__text-subtitle'>
									{movieData.alternativeName}
								</span> */}
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
				)
			)}

			<div className='persons'>
				<span className='persons__heading'>Актеры</span>
				<div className='persons__list'>
					{movieData?.persons.map(person => (
						<div className='person' key={person.id}>
							<img src={person.photo} alt='' />
							<span>{person.name}</span>
							<span className='person__description'>{person.description}</span>
						</div>
					))}
				</div>
			</div>
			<div className='reviews'>
				<span className='reviews__heading'>Оценки</span>
				<div className='reviews__list'>
					{isReviewsDataLoading ? (
						<div className='loader' />
					) : (
						reviewData &&
						reviewData.docs.map(review => (
							<div className='review' key={review.id}>
								<span className='review__author'>{review.author}</span>
								<span className='review__rating'>{review.userRating}</span>
								{/* <span className='review__date'>
									{formatDate(review.updatedAt)}
								</span> */}
							</div>
						))
					)}
				</div>
			</div>

			{/* <SimilarList /> */}
		</div>
	)
}

export default CardPage
