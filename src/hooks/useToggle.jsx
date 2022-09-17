function useToggle() {
	const [boolean, setBoolean] = useState(true)

	const toggle = () => setBoolean(boolean => !boolean)

	return boolean
}
