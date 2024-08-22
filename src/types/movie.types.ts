export interface IMovie {
	ageRating?: number
	alternativeName?: string
	backdrop: { url: string; previewUrl: string }
	poster: { url: string; previewUrl: string }
	countries: { name: string }[]
	description?: string
	enName?: string
	genres: { name: string }[]
	id: number
	isSeries: boolean
	movieLength: number
	name: string
	rating: {
		kp: number
		imdb: number
		filmCritics: number
		russianFilmCritics: number
		await: number
	}
	ratingMpaa?: number
	seriesLength?: number
	shortDescription?: string
	status?: string
	ticketsOnSale?: boolean
	top10?: boolean
	top250?: boolean
	totalSeriesLength?: number
	type: string
	persons: {
		id: number
		photo: string
		name: string
		enName: string
		description?: string
		profession: string
		enProfession: string
	}[]
	watchability: {
		items: { name: string; logo: { url: string }; url: string }[]
	}
	votes?: {
		kp: number
		imdb: number
		filmCritics: number
		russianFilmCritics: number
		await: number
	}
	year: number
}


export interface IReviewResponse {
	docs: IReview[]
	limit: number
	page: number
	pages: number
	total: number
}

export interface IReview {
	id: number
	movieId: number
	title: string
	type: string
	review: string
	date: string
	author: string
	userRating: number
	authorId: number
	createdAt: string
	updatedAt: string
	
}

export interface IDetails {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: {
		id: number
		name: string
		poster_path: string
		backdrop_path: string | null
	}
	budget: number
	genres: {
		id: number
		name: string
	}[]

	homepage: string
	id: number
	imdb_id: string
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: {
		id: number
		logo_path: string
		name: string
		origin_country: string
	}[]

	production_countries: {
		iso_3166_1: string
		name: string
	}[]

	release_date: string
	revenue: number
	runtime: number
	spoken_languages: {
		english_name: string
		iso_639_1: string
		name: string
	}[]

	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface IMovieList {
	page: number
	docs: IMovie[]
	limit: number
	pages: number
	total: number
}

export interface ICardListProps {
	page: number
}
