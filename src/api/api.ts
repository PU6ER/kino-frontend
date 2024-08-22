import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'https://api.kinopoisk.dev/v1.4',
	headers: {
		accept: 'application/json',
		'X-API-KEY': '6PK06E8-WHAM6C8-PMP0SMP-MXP2NMN',
		// Authorization:
		// 	'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWQ5NjQzYmRkYjdkNzBiOTI3MTBlMGY1Mzk3ZDRmOSIsInN1YiI6IjY2MmI0YTBmMDFiMWNhMDExZGUzZTk1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.peCDMi1RRkGmylZjf5YjOO8N1sIJpI2RrjDOufk7BEA',
	},
}

const axiosBase = axios.create(options)

export { axiosBase }
