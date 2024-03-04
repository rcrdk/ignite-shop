import { NextApiRequest, NextApiResponse } from 'next'

import { env } from '@/env'
import { stripe } from '@/lib/stripe'

interface LineItems {
	price: string
	quantity: number
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log(req.body)

	const { cartDetails } = req.body

	if (req.method !== 'POST') {
		return res.status(405).json({
			error: 'METHOD_NOT_ALLOWED',
		})
	}

	if (!cartDetails) {
		return res.status(400).json({
			error: 'PRICE_NOT_FOUND',
		})
	}

	const successURL = env.NEXT_URL + '/success?session_id={CHECKOUT_SESSION_ID}'
	const cancellURL = env.NEXT_URL + '/'

	const cartLineItems: LineItems[] = []

	const cartItemsArray = Object.values(cartDetails)

	cartItemsArray.map((item) => {
		return cartLineItems.push({
			// @ts-expect-error type error
			price: item.defaultPriceId,
			// @ts-expect-error type error
			quantity: item.quantity,
		})
	})

	const checkoutSession = await stripe.checkout.sessions.create({
		success_url: successURL,
		cancel_url: cancellURL,
		mode: 'payment',
		line_items: cartLineItems,
	})

	return res.status(201).json({
		checkoutURL: checkoutSession.url,
	})
}
