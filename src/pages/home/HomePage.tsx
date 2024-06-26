import { useState } from 'react'
import Pagination from '../../components/pagination/Pagination'
import PopularList from '../../components/popular-list/PopularList'
import './HomePage.scss'

const HomePage = () => {
	const [page, setPage] = useState(1)

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	return (
		<div className='container'>
			<PopularList page={page} />
			<Pagination handlePageChange={handlePageChange} currentPage={page} />
		</div>
	)
}

export default HomePage
