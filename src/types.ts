export interface Meal {
	id: number
	created_at: string
	name: string
}

export interface Day {
	id: number
	created_at: string
	name: string
	meal: Meal['id']
}