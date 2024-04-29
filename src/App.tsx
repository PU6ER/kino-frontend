import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import CardPage from './pages/card/CardPage'
import HomePage from './pages/home/HomePage'
import Layout from './pages/layout/Layout'
import TopPage from './pages/top/TopPage'
import UpcomingPage from './pages/upcoming/UpcomingPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='movie/:movieId' element={<CardPage />} />
					<Route path='top' element={<TopPage />} />
					<Route path='upcoming' element={<UpcomingPage />} />
				</Route>

				<Route path='/dashboard'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
