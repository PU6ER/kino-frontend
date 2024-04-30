import { useState } from 'react'
import Pagination from '../../components/pagination/Pagination'
import './TopPage.scss'
import TopList from '../../components/top-list/TopList'

const TopPage = () => {
	const [page, setPage] = useState(1)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	return (
		<div className='container'>
			<TopList page={page} />
			<Pagination handlePageChange={handlePageChange} currentPage={page} />
		</div>
	)
}

export default TopPage
