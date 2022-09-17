import React from 'react'

import { useEffect } from 'react'
import useCount from '../hooks/useCount'

function TimeOnPage() {
	const { count, up } = useCount()

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
