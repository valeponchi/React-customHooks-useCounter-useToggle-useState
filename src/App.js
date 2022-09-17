import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Homepage from './routes/Homepage.jsx'
import Documents from './routes/Documents.jsx'
import Expenses from './routes/Expenses.jsx'
import CountersPage from './routes/CountersPage.jsx'

import './App.css'

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="documents" element={<Documents />} />
				<Route path="expenses" element={<Expenses />} />
				<Route path="counter" element={<CountersPage />} />
			</Routes>
		</div>
	)
}

export default App
