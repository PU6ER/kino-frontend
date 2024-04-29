import { useTopRated } from '../../hooks/useTopRated'
import { ICardListProps } from '../../types/movie.types'
import Card from '../card/Card'
import './TopList.scss'

const TopList = ({ page }: ICardListProps) => {
	const { data, isLoading } = useTopRated(page)

	return (
		<div className='container'>
			{isLoading ? (
				<div className='loader' />
			) : (
				<div className='grid'>
					{data &&
						data.results.map(movie => <Card movie={movie} key={movie.id} />)}
				</div>
			)}
		</div>
	)
}

export default TopList
