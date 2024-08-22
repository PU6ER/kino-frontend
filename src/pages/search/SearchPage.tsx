import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import Pagination from '../../components/pagination/Pagination'
import { useSearch } from '../../hooks/useSearch'

const SearchPage = () => {
	const [page, setPage] = useState(1)
	const { query } = useParams()
	const { data, isLoading } = useSearch(query || '', page)
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
			<Pagination handlePageChange={handlePageChange} currentPage={page} />
		</div>
	)
}

export default SearchPage
