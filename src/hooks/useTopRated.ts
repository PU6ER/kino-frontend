import { useQuery } from '@tanstack/react-query'
import { movieService } from '../services/movie.service'

export function useTopRated(page: number) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['movie', page],
		queryFn: () => movieService.getTopRated(page),
	})

	return { data, isLoading, isSuccess }
}
