import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './Layout.scss'
const Layout = () => {
	const [isHidden, setIsHidden] = useState(false)
	const [prevScrollY, setPrevScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > prevScrollY) {
				setIsHidden(true)
			} else {
				setIsHidden(false)
			}

			setPrevScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [prevScrollY])
	return (
		<div className='layout'>
			<div
				className={`layout__header ${isHidden ? 'layout__header-hidden' : ''}`}
			>
				<Navbar />
			</div>
			<Outlet />
		</div>
	)
}

export default Layout
