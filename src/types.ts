export interface Meal {
	id: number
	created_at: string
	name: string
	recipe_url?: string
}

export interface Day {
	id: number
	created_at: string
	name: string
	day: number
	meal: Meal['id']
}