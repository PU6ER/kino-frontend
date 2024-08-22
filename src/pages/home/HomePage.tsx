import { useState } from 'react'
import Card from '../../components/card/Card'
import Pagination from '../../components/pagination/Pagination'
import { usePopularMovies } from '../../hooks/usePopularMovies'
import './HomePage.scss'

const HomePage = () => {
	const [page, setPage] = useState(1)
	const { data, isLoading } = usePopularMovies(page)
	const handlePageChange = (page: number) => {
		setPage(page)
	}

	return (
		<div className='containerHome'>
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
			{/* <PopularList page={page} /> */}
			<Pagination handlePageChange={handlePageChange} currentPage={page} />
		</div>
	)
}

export default HomePage
