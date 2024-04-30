import { useParams } from 'react-router-dom'
import { useSimilar } from '../../hooks/useSimilar'
import Card from '../card/Card'
import './SimilarList.scss'

const SimilarList = () => {
	const { movieId } = useParams()
	const { data, isLoading, isSuccess } = useSimilar(movieId ?? '')

	return (
		<div className='container'>
			{isLoading ? (
				<div className='loader' />
			) : (
				<>
					<div className='carousel'>
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
