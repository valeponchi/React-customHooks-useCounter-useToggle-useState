import { useState } from 'react'

/* function useToggle() {
	const [boolean, setBoolean] = useState(true)

	const toggle = () => setBoolean(boolean => !boolean)

	return [boolean, toggle]
} */

//IF WE WANTED TO CHOOSE which toggle starts with TRUE and which with FALSE:
function useToggle(initioalValue = true) {
	const [boolean, setBoolean] = useState(initioalValue)

	const toggle = () => setBoolean(boolean => !boolean)

	return [boolean, toggle]
}

export default useToggle
