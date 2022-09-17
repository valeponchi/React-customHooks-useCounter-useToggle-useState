import React from 'react'
import AnnoyingAd from '../components/AnnoyingAd'
import TimeOnPage from '../components/TimeOnPage'
import useCount from '../hooks/useCount'

export default function Counter() {
	const { count, up, down, reset } = useCount()

	return (
		<main className="counter">
			<TimeOnPage />
			<h2>Counter</h2>
			<h3>{count}</h3>
			<button onClick={down}>-</button>
			<button onClick={up}>+</button>
			<button onClick={reset}>RESET</button>

			<AnnoyingAd />
		</main>
	)
}
