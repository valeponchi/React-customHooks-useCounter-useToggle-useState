import React from 'react'

import { useEffect, useState } from 'react'

function TimeOnPage() {
	const [count, setCount] = useState(0)

	const up = () => setCount(count => count + 1)

	useEffect(() => {
		let handleTheInterval = setInterval(up, 1000)
		//clean the Effect:
		return () => clearInterval(handleTheInterval)
	}, [])

	return (
		<section className="time-on-page">
			<h1>You've been on this page for {count} seconds</h1>
		</section>
	)
}

export default TimeOnPage
