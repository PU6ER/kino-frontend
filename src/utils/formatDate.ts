export function formatDate(dateString: string): string {
	const date = new Date(dateString)

	const formattedDate = date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const formattedTime = date.toLocaleTimeString('ru-RU', {
		hour: '2-digit',
		minute: '2-digit',
	})

	return `${formattedDate} в ${formattedTime}`
}
