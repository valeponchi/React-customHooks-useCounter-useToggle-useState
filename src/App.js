import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Expenses from './routes/Expenses.jsx'
import Documents from './routes/Documents.jsx'
import Counter from './routes/Counter.jsx'
import Homepage from './routes/Homepage.jsx'

import './App.css'

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="documents" element={<Documents />} />
				<Route path="expenses" element={<Expenses />} />
				<Route path="counter" element={<Counter />} />
			</Routes>
		</div>
	)
}

export default App
