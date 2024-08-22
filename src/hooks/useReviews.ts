import { useQuery } from '@tanstack/react-query'

import { reviewService } from '../services/review.service'

export function useReviews(movieId: string) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['review', movieId],
		queryFn: () => reviewService.getReviews(movieId),
	})

	return { data, isLoading, isSuccess }
}
