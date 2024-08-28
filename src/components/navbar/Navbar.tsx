import { BookMarked, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const navigate = useNavigate()
	const { query } = useParams()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setSearchQuery(e.target.value)
	}
	useEffect(() => {
		if (query) {
			setSearchQuery(query)
		} else {
			setSearchQuery('')
		}
	}, [query])
	return (
		<div className='navbar'>
			<Link to='/' onClick={() => setSearchQuery('')}>
				<div className='navbar__logo'>KINO</div>
				{/* <img src='../kino-logo.svg' className='navbar__logo' /> */}
			</Link>
			<div className='navbar__search'>
				<form className='search-form'>
					<input
						type='text'
						placeholder='Поиск...'
						value={searchQuery}
						onChange={e => handleSearch(e)}
					/>
					<button
						type='submit'
						className='form-button'
						onClick={() => navigate('search/' + searchQuery)}
					>
						Найти
					</button>
				</form>
			</div>
			<div className='navbar__links'>
				<Link to='/bookmarks' className='link'>
					<BookMarked />
				</Link>

				<Link to='#' className='link'>
					<UserRound />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
