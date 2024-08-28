export const getFavorites = () => {
	const favoritesJSON = localStorage.getItem('favorites')
	if (favoritesJSON) {
		return JSON.parse(favoritesJSON) as number[]
	}
	return []
}
