import { useQuery } from '@tanstack/react-query'
import { movieService } from '../services/movie.service'

export function useUpcoming(page: number) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['movie', page],
		queryFn: () => movieService.getUpcoming(page),
	})

	return { data, isLoading, isSuccess }
}
