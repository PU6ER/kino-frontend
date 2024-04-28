import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import CardPage from './pages/card/CardPage'
import HomePage from './pages/home/HomePage'
import Layout from './pages/layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='movie/:movieId' element={<CardPage />} />
				</Route>

				<Route path='/dashboard'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
