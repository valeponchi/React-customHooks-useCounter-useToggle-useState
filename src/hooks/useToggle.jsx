import { useState } from 'react'

function useToggle() {
	const [boolean, setBoolean] = useState(true)

	const toggle = () => setBoolean(boolean => !boolean)

	return { boolean, toggle }
}

export default useToggle
