import * as React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'
import '../styles/useSlides.css'

/**
 *
 * @param {{
 *  sources: string[],
 *  width?: number,
 *  height?: number,
 *  initialPosition?: number,
 *  autoPlayMs?: number,
 *  containerStyle?: React.CSSProperties,
 *  imageStyle?: React.CSSProperties,
 *  buttonStyle?: React.CSSProperties,
 *  bulletContainerStyle?: React.CSSProperties,
 *  bulletStyle?: React.CSSProperties,
 * }} param0
 */

const useSlides = ({
	sources,
	width = 500,
	height = 300,
	initialPosition = 0,
	autoPlayMs = 10000,
	containerStyle = {},
	imageStyle = {},
	buttonStyle = {},
	bulletContainerStyle = {},
	bulletStyle = {},
}) => {
	const [position, setPosition] = useState(initialPosition)
	const intervalRef = useRef(0)

	width = width > window.innerWidth ? window.innerWidth : width

	const nextSlide = useCallback(() => {
		setPosition(position => (position + 1) % sources.length)
	}, [sources.length])

	const previousSlide = useCallback(() => {
		setPosition(position =>
			position === 0 ? sources.length - 1 : position - 1
		)
	}, [sources.length])

	useEffect(() => {
		if (autoPlayMs < 100) return
		intervalRef.current = setInterval(nextSlide, autoPlayMs)
		return () => clearInterval(intervalRef.current)
	}, [nextSlide, autoPlayMs, position])

	containerStyle = {
		...containerStyle,
		width,
		height,
		display: 'flex',
		overflow: 'hidden',
		position: 'relative',
		zIndex: 10,
	}

	imageStyle = {
		...imageStyle,
		width: '100%',
		objectFit: 'cover',
		transition: '700ms',
		transform: `translate(-${position * width}px)`,
		zIndex: -1,
	}

	buttonStyle = {
		...buttonStyle,
		border: 'none',
		background: '#00000050',
		borderRadius: '50%',
		width: width * 0.07,
		height: width * 0.07,
		color: '#ffffffaa',
		fontSize: width * 0.04,
		cursor: 'pointer',
		display: 'grid',
		placeContent: 'center',
		userSelect: 'none',
		position: 'relative',
	}

	bulletContainerStyle = {
		...bulletContainerStyle,
		position: 'absolute',
		bottom: 5,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	}

	bulletStyle = {
		...bulletStyle,
		borderRadius: '50%',
		border: 'solid 1px #ffffffaa',
		margin: '0 5px',
		width: 14,
		height: 14,
		cursor: 'pointer',
	}

	const arrowStyle = {
		position: 'absolute',
		top: '10%',
		left: '33%',
	}

	const slides = (
		<div className="slider" style={containerStyle}>
			{sources.map(src => (
				<img
					className="slide"
					key={`slide-${src}`}
					src={src}
					alt=""
					style={imageStyle}
				/>
			))}
			<div
				role="button"
				onClick={e => {
					e.stopPropagation()
					previousSlide()
				}}
				style={{
					...buttonStyle,
					position: 'absolute',
					left: 5,
					top: height / 2 - Number(buttonStyle.height) / 2,
				}}>
				<span style={arrowStyle}>&lt;</span>
			</div>
			<div
				role="button"
				onClick={e => {
					e.stopPropagation()
					nextSlide()
				}}
				style={{
					...buttonStyle,
					position: 'absolute',
					right: 5,
					top: height / 2 - Number(buttonStyle.height) / 2,
				}}>
				<span style={arrowStyle}>&gt;</span>
			</div>
			<div className="bullets" style={bulletContainerStyle}>
				{sources.map((_, index) => (
					<div
						role="button"
						key={`bullet-${index}`}
						onClick={e => {
							e.stopPropagation()
							setPosition(index)
						}}
						style={{
							...bulletStyle,
							background: index === position ? '#ffffff80' : '#00000080',
						}}></div>
				))}
			</div>
		</div>
	)

	return { slides, position, nextSlide, previousSlide }
}

export default useSlides
