import { NextApiRequest, NextApiResponse } from 'next'

import { env } from '@/env'
import { stripe } from '@/lib/stripe'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { priceID } = req.body

	if (req.method !== 'POST') {
		return res.status(405).json({
			error: 'METHOD_NOT_ALLOWED',
		})
	}

	if (!priceID) {
		return res.status(400).json({
			error: 'PRICE_NOT_FOUND',
		})
	}

	const successURL = env.NEXT_URL + '/success?session_id={CHECKOUT_SESSION_ID}'
	const cancellURL = env.NEXT_URL + '/'

	const checkoutSession = await stripe.checkout.sessions.create({
		success_url: successURL,
		cancel_url: cancellURL,
		mode: 'payment',
		line_items: [
			{
				price: priceID,
				quantity: 1,
			},
		],
	})

	return res.status(201).json({
		checkoutURL: checkoutSession.url,
	})
}
