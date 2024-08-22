import { axiosBase } from '../api/api'
import { IReview, IReviewResponse } from '../types/movie.types'

class ReviewService {
	private BASE_URL = '/review'

	async getReviews(movieId: string) {
		const response = await axiosBase.get<IReviewResponse>(
			`${this.BASE_URL + '?page=1&limit=10' + `&movieId=${movieId}`}`
		)
		return response.data
	}
}

export const reviewService = new ReviewService()
