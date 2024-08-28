export const checkBookmark = (movieId: number) => {
	const favoritesJSON = localStorage.getItem('favorites')
	if (favoritesJSON) {
		const favorites = JSON.parse(favoritesJSON)
		return favorites.includes(movieId)
	}
	return false
}
