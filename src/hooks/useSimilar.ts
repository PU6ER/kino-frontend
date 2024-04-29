import { useQuery } from '@tanstack/react-query'
import { movieService } from '../services/movie.service'

export function useSimilar(movieId: string) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['similar', movieId],
		queryFn: () => movieService.getSimilar(movieId),
	})

	return { data, isLoading, isSuccess }
}
