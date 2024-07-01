import './Pagination.scss'

interface IPaginationProps {
	handlePageChange: (page: number) => void
	currentPage: number
}
const Pagination = ({ handlePageChange, currentPage }: IPaginationProps) => {
	const totalPages = 10
	const pages = []
	for (
		let i = Math.max(1, currentPage - 2);
		i <= Math.min(totalPages, currentPage + 2);
		i++
	) {
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
				&larr;
			</button>
			{pages}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				&rarr;
			</button>
		</div>
	)
}

export default Pagination
