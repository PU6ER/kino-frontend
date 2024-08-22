import { useQuery } from '@tanstack/react-query'
import { movieService } from '../services/movie.service'

export function useSearch(query: string, page: number) {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['movie', query],
		queryFn: () => movieService.getMoviesBySearchQuery(query, page),
	})

	return { data, isLoading, isSuccess }
}
