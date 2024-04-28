import { useQuery } from '@tanstack/react-query'
import { movieService } from '../services/movie.service'

export function useMovie(movieId: string) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['movie', movieId],
		queryFn: () => movieService.getMovie(movieId),
	})

	return { data, isLoading, isSuccess }
}
