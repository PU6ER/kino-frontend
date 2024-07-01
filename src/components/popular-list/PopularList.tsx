import { usePopularMovies } from '../../hooks/usePopularMovies'
import { ICardListProps } from '../../types/movie.types'
import Card from '../card/Card'
import './PopularList.scss'

const PopularList = ({ page }: ICardListProps) => {
	const { data, isLoading } = usePopularMovies(page)
	console.log('popular kinopoisk', data)

	return (
		<div className='container'>
			{isLoading ? (
				<div className='loader' />
			) : (
				<div className='grid'>
					{data &&
						data.docs.map(movie => <Card movie={movie} key={movie.id} />)}
				</div>
			)}
		</div>
	)
}

export default PopularList
