import { usePopularMovies } from '../../hooks/usePopularMovies'
import { useUpcoming } from '../../hooks/useUpcoming'
import { ICardListProps } from '../../types/movie.types'
import Card from '../card/Card'
import './UpcomingList.scss'

const UpcomingList = ({ page }: ICardListProps) => {
	const { data, isLoading } = usePopularMovies(page)

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

export default UpcomingList
