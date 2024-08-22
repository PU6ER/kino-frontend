import { axiosBase } from '../api/api'
import { API_KEY } from '../constants/api.constants'
import { IMovie, IMovieList } from '../types/movie.types'

class MovieService {
	private BASE_URL = '/movie'

	async getPopular(page: number): Promise<IMovieList> {
		const response = await axiosBase.get<IMovieList>(
			`${
				this.BASE_URL +
				`?page=${page}&limit=12&notNullFields=backdrop.url&notNullFields=poster.url&notNullFields=movieLength&notNullFields=rating.kp&notNullFields=watchability.items.name&rating.kp=6-10&lists=popular-films`
			}`
		)
		return response.data
	}
	async getMovie(movieId: string) {
		const response = await axiosBase.get<IMovie>(
			`${this.BASE_URL + `/${movieId}`}`
		)
		return response.data
	}

	async getMoviesBySearchQuery(query: string, page: number) {
		const response = await axiosBase.get<IMovieList>(
			`${this.BASE_URL + `/search?page=${page}&limit=12&query=${query}`}`
		)
		return response.data
	}

	async getTopRated(page: number) {
		const response = await axiosBase.get<IMovieList>(
			`${
				this.BASE_URL +
				`/top_rated?api_key=${API_KEY}&language=ru-RU&page=${page}`
			}`
		)
		return response.data
	}
	async getUpcoming(page: number) {
		const response = await axiosBase.get<IMovieList>(
			`${
				this.BASE_URL +
				`/upcoming?api_key=${API_KEY}&language=ru-RU&page=${page}`
			}`
		)
		return response.data
	}
	async getSimilar(movieId: string) {
		const response = await axiosBase.get<IMovieList>(
			`${
				this.BASE_URL +
				`/${movieId}/similar?api_key=${API_KEY}&language=ru-RU&page=1`
			}`
		)
		return response.data
	}
}

export const movieService = new MovieService()
