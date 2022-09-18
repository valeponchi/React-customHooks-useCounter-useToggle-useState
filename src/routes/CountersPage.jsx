import React from 'react'
import AnnoyingAd from '../components/AnnoyingAd'
import TimeOnPage from '../components/TimeOnPage'
import Counter from '../components/Counter'
import useToggle from '../hooks/useToggle'

function CountersPage() {
	const [showTimeOnPage, toggleTimeOnPage] = useToggle(false)
	const [showCounter, toggleCounter] = useToggle()
	const [showAnnoyingAd, toggleAnnoyingAd] = useToggle()

	return (
		<main className="countersPage">
			<button onClick={toggleTimeOnPage}>TOGGLE TIME on PAGE</button>
			<button onClick={toggleCounter}>TOGGLE COUNTER</button>
			<button onClick={toggleAnnoyingAd}>TOGGLE ANNOYING AD</button>

			{/* if the 1st is truthy, we get back the second thing */}
			{/* if the 1st is falsy we get back the falsy thing or false*/}
			{/* shortcut for  {showTimeOnPage ? <TimeOnPage />} : null*/}
			{/* number 0 although it's falsy, would show up on the page */}
			{/* in a turnary, "false" of 0 would follow what's after : */}
			{showTimeOnPage && <TimeOnPage />}
			{showCounter && <Counter />}
			{showAnnoyingAd && <AnnoyingAd />}
		</main>
	)
}

export default CountersPage
