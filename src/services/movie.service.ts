import { axiosBase } from '../api/api'
import { API_KEY } from '../constants/api.constants'
import { IDetails, IPopularList } from '../types/movie.types'

class MovieService {
	private BASE_URL = 'movie'

	async getPopular(page: number): Promise<IPopularList> {
		const response = await axiosBase.get<IPopularList>(
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
}

export const movieService = new MovieService()
