import React from 'react'

function useState(initialValue) {
	let value = initialValue
	const functionToSetValue = newValue => {
		value = newValue
	}
	return [value, functionToSetValue]
}
