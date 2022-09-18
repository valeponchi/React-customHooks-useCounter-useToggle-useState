import React from 'react'
import useSlides from '../hooks/useSlides'

const autumnImageUrls = [
	'https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/1177440/pexels-photo-1177440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/5725596/pexels-photo-5725596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/3123644/pexels-photo-3123644.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
	'https://images.pexels.com/photos/9898663/pexels-photo-9898663.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
	'https://images.pexels.com/photos/5886248/pexels-photo-5886248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]
const winterImageUrls = [
	'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/699380/pexels-photo-699380.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/314860/pexels-photo-314860.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/436792/pexels-photo-436792.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/1647248/pexels-photo-1647248.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/45212/jay-bird-konar-winter-45212.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/3151907/pexels-photo-3151907.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/281618/pexels-photo-281618.jpeg?auto=compress&cs=tinysrgb&w=400',
]

const springImageUrls = [
	'https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/414083/pexels-photo-414083.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/94847/pexels-photo-94847.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/40731/ladybug-drop-of-water-rain-leaf-40731.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=400',
]

const summerImageUrls = [
	'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/1170572/pexels-photo-1170572.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
	'https://images.pexels.com/photos/1834609/pexels-photo-1834609.jpeg?auto=compress&cs=tinysrgb&w=400',
]

function Slider() {
	const { slides: autumnSlides } = useSlides({
		sources: autumnImageUrls,
		autoPlayMs: 5000,
	})
	const { slides: winterSlides } = useSlides({
		sources: winterImageUrls,
		autoPlayMs: 5000,
	})
	const { slides: springSlides } = useSlides({
		sources: springImageUrls,
		autoPlayMs: 5000,
	})
	const { slides: summerSlides } = useSlides({
		sources: summerImageUrls,
		autoPlayMs: 5000,
	})

	return (
		<div className="slider-container">
			<h2>Autumn:</h2>
			{autumnSlides}
			<h2>Winter:</h2>
			{winterSlides}
			<h2>Spring:</h2>
			{springSlides}
			<h2>Summer:</h2>
			{summerSlides}
		</div>
	)
}

export default Slider
