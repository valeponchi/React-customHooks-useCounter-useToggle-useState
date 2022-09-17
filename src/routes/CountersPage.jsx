import React, { useState } from 'react'
import AnnoyingAd from '../components/AnnoyingAd'
import TimeOnPage from '../components/TimeOnPage'
import Counter from '../components/Counter'

function CountersPage() {
	const [showTimeOnPage, setShowTimeOnPage] = useState(true)
	const [showCounter, setShowCounter] = useState(true)
	const [showAnnoyingAd, setShowAnnoyingAd] = useState(true)

	const toggleTimeOnPage = () => setShowTimeOnPage(show => !show)
	const toggleCounter = () => setShowCounter(show => !show)
	const toggleAnnoyingAd = () => setShowAnnoyingAd(show => !show)
	return (
		<main className="countersPage">
			<button onClick={toggleTimeOnPage}>TOGGLE TIME on PAGE</button>
			<button onClick={toggleCounter}>TOGGLE COUNTER</button>
			<button onClick={toggleAnnoyingAd}>TOGGLE ANNOYING AD</button>
			{showTimeOnPage && <TimeOnPage />}
			{showCounter && <Counter />}
			{showAnnoyingAd && <AnnoyingAd />}
		</main>
	)
}

export default CountersPage
