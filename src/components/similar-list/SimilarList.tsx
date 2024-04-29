import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSimilar } from '../../hooks/useSimilar'
import Card from '../card/Card'
import './SimilarList.scss'

const SimilarList = () => {
	const { movieId } = useParams()
	const { data, isLoading, isSuccess } = useSimilar(movieId ?? '')
	const [scrollPosition, setScrollPosition] = useState(0)

	console.log('movieId', movieId)
	console.log('similar data', data)

	const handleScroll = (direction: string) => {
		const grid = document.querySelector('.grid') as HTMLElement
		const scrollAmount = grid.clientWidth
		if (direction === 'left') {
			setScrollPosition(prevState => Math.max(prevState - scrollAmount, 0))
		} else {
			setScrollPosition(prevState =>
				Math.min(prevState + scrollAmount, grid.scrollWidth - grid.clientWidth)
			)
		}
	}

	return (
		<div className='container'>
			{isLoading ? (
				<div className='loader' />
			) : (
				<>
					<div
						className='carousel'
						style={{ transform: `translateX(${-scrollPosition}px)` }}
					>
						{isSuccess &&
							data &&
							data.results.map(movie => <Card movie={movie} key={movie.id} />)}
					</div>
					
				</>
			)}
		</div>
	)
}

export default SimilarList
