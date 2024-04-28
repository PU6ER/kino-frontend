import { usePopularMovies } from '../../hooks/usePopularMovies'
import Card from '../card/Card'
import './PopularList.scss'

interface ICardListProps {
	page: number
}

const PopularList = ({ page }: ICardListProps) => {
	const { data, isLoading } = usePopularMovies(page)

	return (
		<div className='container'>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div className='grid'>
					{data &&
						data.results.map(movie => <Card movie={movie} key={movie.id} />)}
				</div>
			)}
		</div>
	)
}

export default PopularList
