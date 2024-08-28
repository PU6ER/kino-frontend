import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import BookmarkPage from './pages/bookmark/BookmarkPage'
import CardPage from './pages/card/CardPage'
import HomePage from './pages/home/HomePage'
import Layout from './pages/layout/Layout'
import SearchPage from './pages/search/SearchPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='movie/:movieId' element={<CardPage />} />
					<Route path='search/:query' element={<SearchPage />} />
					<Route path='bookmarks' element={<BookmarkPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
