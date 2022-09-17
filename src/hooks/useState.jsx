import React from 'react'

function useState(initialValue) {
	let value = initialValue
	const functionToSetValue = newValue => {
		value = newValue
	}
	return [value, functionToSetValue]
}

// in React, useState would also rerender what needs to be rerendered
