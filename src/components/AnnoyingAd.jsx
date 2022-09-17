import React from 'react'
import useCount from '../hooks/useCount'

function AnnoyingAd() {
	const { count, up } = useCount()

	return count < 3 ? (
		<section className="annoying-ad">
			<img
				onClick={up}
				alt="annoying ad"
				src="https://images.pexels.com/photos/7957750/pexels-photo-7957750.jpeg?cs=srgb&dl=pexels-tamanna-rumee-7957750.jpg&fm=jpg"
				width="300"
			/>
		</section>
	) : null
}

export default AnnoyingAd
