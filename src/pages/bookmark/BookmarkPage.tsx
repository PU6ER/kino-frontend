import { useState } from 'react'
import Card from '../../components/card/Card'
import Pagination from '../../components/pagination/Pagination'
import { useFavorites } from '../../hooks/useFavorites'
import './BookmarkPage.scss'

const BookmarkPage = () => {
	const [page, setPage] = useState(1)
	const { data, isLoading } = useFavorites()
	const itemsPerPage = 12
	const handlePageChange = (page: number) => {
		setPage(page)
	}
	const paginate = (items: any[], page: number, itemsPerPage: number) => {
		const startIndex = (page - 1) * itemsPerPage
		const endIndex = startIndex + itemsPerPage
		return items.slice(startIndex, endIndex)
	}
	const paginatedData = paginate(data || [], page, itemsPerPage)

	return (
		<div className='containerHome'>
			<div className='container'>
				{isLoading ? (
					<div className='loader' />
				) : (
					<div className='grid'>
						{paginatedData.map(movie => (
							<Card movie={movie} key={movie.id} />
						))}
					</div>
				)}
			</div>
			{/* <PopularList page={page} /> */}
			<Pagination handlePageChange={handlePageChange} currentPage={page} />
		</div>
	)
}

export default BookmarkPage
