import React from 'react'
import useCount from '../hooks/useCount'

function Counter() {
	const { count, up, down, reset } = useCount()

	return (
		<main className="counter">
			<h2>Counter</h2>
			<h3>{count}</h3>
			<button onClick={down}>-</button>
			<button onClick={up}>+</button>
			<button onClick={reset}>RESET</button>
		</main>
	)
}

export default Counter
