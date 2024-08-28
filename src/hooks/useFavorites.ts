import { useQuery } from '@tanstack/react-query'
import { movieService } from '../services/movie.service'
import { getFavorites } from '../utils/getFavorites'

export function useFavorites() {
	const favorites = getFavorites()
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['favorite'],
		queryFn: async () => {
			const promises = favorites.map(movieId =>
				movieService.getMovie(`${movieId}`)
			)
			const result = await Promise.all(promises)
			return result
		},
	})

	return { data, isLoading, isSuccess }
}
