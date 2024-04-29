import './Pagination.scss'

interface IPaginationProps {
	handlePageChange: (page: number) => void
	currentPage: number
}
const Pagination = ({ handlePageChange, currentPage }: IPaginationProps) => {
	const totalPages = 5
	const pages = []
	for (let i = 1; i <= totalPages; i++) {
		pages.push(
			<button
				key={i}
				onClick={() => handlePageChange(i)}
				className={currentPage === i ? 'active' : ''}
			>
				{i}
			</button>
		)
	}
	return (
		<div className='pagination'>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Назад
			</button>
			{pages}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Далее
			</button>
		</div>
	)
}

export default Pagination
