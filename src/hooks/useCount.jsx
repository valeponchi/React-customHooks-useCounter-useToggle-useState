import { useState } from 'react'

function useCount() {
	const [count, setCount] = useState(0)

	const up = () => setCount(count => count + 1)
	const down = () => setCount(count => count - 1)
	const reset = () => setCount(0)

	return { count, up, down, reset }
}

export default useCount
