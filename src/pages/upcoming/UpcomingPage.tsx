import { useState } from 'react'
import Pagination from '../../components/pagination/Pagination'
import UpcomingList from '../../components/upcoming-list/UpcomingList'
import './UpcomingPage.scss'

const UpcomingPage = () => {
	const [page, setPage] = useState(1)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	return (
		<div className='container'>
			<UpcomingList page={page} />
			<Pagination handlePageChange={handlePageChange} currentPage={page} />
		</div>
	)
}

export default UpcomingPage
