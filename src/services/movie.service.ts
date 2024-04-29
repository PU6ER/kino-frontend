import { axiosBase } from '../api/api'
import { API_KEY } from '../constants/api.constants'
import { IDetails, IMovieList } from '../types/movie.types'

class MovieService {
	private BASE_URL = 'movie'

	async getPopular(page: number): Promise<IMovieList> {
		const response = await axiosBase.get<IMovieList>(
			`${
				this.BASE_URL +
				`/popular?api_key=${API_KEY}&language=ru-RU&page=${page}`
			}`
		)
		return response.data
	}
	async getMovie(movieId: string) {
		const response = await axiosBase.get<IDetails>(
			`${this.BASE_URL + `/${movieId}?api_key=${API_KEY}&language=ru-RU`}`
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
