export const toggleFavorite = (movieId: number) => {
	let favorites: number[] = []
	const favoritesJSON = localStorage.getItem('favorites')
	if (favoritesJSON) {
		favorites = JSON.parse(favoritesJSON)
		if (favorites.includes(movieId)) {
			favorites = favorites.filter(id => id !== movieId)
		} else {
			favorites.push(movieId)
		}
	} else {
		favorites.push(movieId)
	}
	localStorage.setItem('favorites', JSON.stringify(favorites))
}
