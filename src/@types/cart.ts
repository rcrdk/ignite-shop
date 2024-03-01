export interface CartItem {
	name: string
	id: string
	price: number
	image: string
	currency: string
	quantity: number
	value: number
	price_data: unknown
	product_data: unknown
	formattedValue: string
	formattedPrice: string
}
