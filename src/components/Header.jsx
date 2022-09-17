import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header>
			<nav className="header__nav">
				<ul>
					<li>
						<Link to="/">Home</Link> |{' '}
					</li>
					<li>
						<Link to="/documents">Documents</Link> |{' '}
					</li>
					<li>
						<Link to="/expenses">Expenses</Link> |{' '}
					</li>
					<li>
						<Link to="/counter">Counter</Link> |{' '}
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
