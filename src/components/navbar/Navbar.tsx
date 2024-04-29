import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
	return (
		<div className='navbar'>
			<Link to='/'><div className='navbar__logo'>KINO</div></Link>
			<div className='navbar__links'>
				<Link to='/'>Популярные</Link>
				<Link to='/top'>Лучшие</Link>
				<Link to='/upcoming'>Ожидаемые</Link>
			</div>
			<div className=''></div>
		</div>
	)
}

export default Navbar
