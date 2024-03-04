export interface Product {
	id: string
	name: string
	description?: string
	imageUrl: string
	price: string
	defaultPriceId: string
}

export interface ProductCart {
	id: string
	name: string
	description?: string
	image: string
	price: number | null
	defaultPriceId: string
	currency: string
}
