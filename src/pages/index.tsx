import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import { HomeContainer, Product } from '@/styles/pages/home'

import tshirt1 from '../assets/t-shirts/1.png'
import tshirt2 from '../assets/t-shirts/2.png'
import tshirt3 from '../assets/t-shirts/3.png'

export default function Home() {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	})

	return (
		<HomeContainer ref={sliderRef} className="keen-slider">
			<Product className="keen-slider__slide">
				<Image src={tshirt1} alt="" width={520} height={520} />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</Product>

			<Product className="keen-slider__slide">
				<Image src={tshirt2} alt="" width={520} height={520} />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</Product>

			<Product className="keen-slider__slide">
				<Image src={tshirt3} alt="" width={520} height={520} />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</Product>

			<Product className="keen-slider__slide">
				<Image src={tshirt3} alt="" width={520} height={520} />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</Product>
		</HomeContainer>
	)
}