import { useParams } from 'react-router-dom'
import './SimilarList.scss'

const SimilarList = () => {
	const { movieId } = useParams()
	// const { data, isLoading, isSuccess } = useSimilar(movieId ?? '')
	// const { data, isLoading, isSuccess } = usePopularMovies()

	return (
		<div className='container'>
			{/* {isLoading ? (
				<div className='loader' />
			) : (
				<>
					<div className='carousel'>
						{isSuccess &&
							data &&
							data.results.map(movie => <Card movie={movie} key={movie.id} />)}
					</div>
				</>
			)} */}
			{movieId}
		</div>
	)
}

export default SimilarList
