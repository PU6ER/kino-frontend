import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './HomePage.scss'

const HomePage = () => {
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
		<div className='container'>
			<div
				className={`container__header ${
					isHidden ? 'container__header-hidden' : ''
				}`}
			>
				<Navbar />
			</div>
			Home Page
			<div className='' style={{ height: '500px' }}></div>
			<div className='' style={{ height: '500px' }}></div>
		</div>
	)
}

export default HomePage
